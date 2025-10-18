export interface RoadmapPhase {
  name: string;
  timeline: string;
  activities: string[];
  milestones: string[];
  deliverables: string[];
  successMetrics: string[];
  resources: string[];
  transitionCriteria?: string;
}

export interface AcquisitionChannel {
  name: string;
  priority: 'High' | 'Medium' | 'Low';
  cac?: string;
  tactics: string[];
  timeline?: string;
}

export interface CustomerSegment {
  name: string;
  description: string;
  priority?: number;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

export interface Risk {
  category: string;
  severity: 'High' | 'Medium' | 'Low';
  description: string;
  mitigation: string;
  contingency?: string;
}

export interface TeamRole {
  role: string;
  timeline: string;
  salary?: string;
  skills: string[];
}

export interface ParsedExecutionData {
  roadmap: RoadmapPhase[];
  gtmStrategy: {
    segments: CustomerSegment[];
    channels: AcquisitionChannel[];
    pricingTiers: PricingTier[];
    growthLoops: string[];
  };
  risks: Risk[];
  teamPlan: TeamRole[];
}

export function parseExecutionData(results: any[]): ParsedExecutionData {
  const roadmap: RoadmapPhase[] = [];
  const segments: CustomerSegment[] = [];
  const channels: AcquisitionChannel[] = [];
  const pricingTiers: PricingTier[] = [];
  const growthLoops: string[] = [];
  const risks: Risk[] = [];
  const teamPlan: TeamRole[] = [];

  // Query 0: 12-Month Roadmap
  if (results[0]?.content) {
    const content = results[0].content;

    // Extract phases - look for "Phase N:" or "Month X-Y:"
    const phaseMatches = content.matchAll(/(?:Phase\s+(\d+)|Months?\s+([\d-]+))[:\s]+([^\n]+)/gi);
    for (const match of phaseMatches) {
      const phaseName = match[3].trim();
      const timeline = match[2] || `Phase ${match[1]}`;

      // Find the section for this phase
      const phaseRegex = new RegExp(`${escapeRegex(phaseName)}[\\s\\S]{0,800}`, 'i');
      const phaseSection = content.match(phaseRegex)?.[0] || '';

      roadmap.push({
        name: phaseName,
        timeline: timeline,
        activities: extractListItems(phaseSection, /(?:activities?|tasks?|actions?)[:\s]/i),
        milestones: extractListItems(phaseSection, /milestones?[:\s]/i),
        deliverables: extractListItems(phaseSection, /deliverables?[:\s]/i),
        successMetrics: extractListItems(phaseSection, /(?:success\s*metrics?|KPIs?)[:\s]/i),
        resources: extractListItems(phaseSection, /resources?(?:\s*needed)?[:\s]/i),
        transitionCriteria: extractFirstLine(phaseSection, /transition\s*criteria[:\s]/i)
      });
    }

    // If no phases found, try alternative format
    if (roadmap.length === 0) {
      const sections = content.split(/\n\n+/);
      sections.forEach((section, idx) => {
        if (section.length > 50 && idx < 5) {
          const firstLine = section.split('\n')[0];
          roadmap.push({
            name: firstLine.substring(0, 100),
            timeline: `Phase ${idx + 1}`,
            activities: extractListItems(section, /(?:activities?|tasks?)[:\s]/i),
            milestones: extractListItems(section, /milestones?[:\s]/i),
            deliverables: extractListItems(section, /deliverables?[:\s]/i),
            successMetrics: extractListItems(section, /metrics?[:\s]/i),
            resources: extractListItems(section, /resources?[:\s]/i)
          });
        }
      });
    }
  }

  // Query 1: GTM Strategy
  if (results[1]?.content) {
    const content = results[1].content;

    // Extract customer segments
    const segmentMatches = content.matchAll(/Segment\s+(\d+)[:\s]+([^\n]+?)(?:\n|$)/gi);
    for (const match of segmentMatches) {
      segments.push({
        name: match[2].trim(),
        description: extractFirstLine(content, new RegExp(`${escapeRegex(match[2])}[:\\s]+([^\\n]+)`, 'i')) || '',
        priority: parseInt(match[1])
      });
    }

    // Extract acquisition channels
    const channelMatches = content.matchAll(/Channel[:\s]+([^\n(]+?)(?:\(([^)]+)\))?[^\n]*?(?:Priority[:\s]+(High|Medium|Low)|CAC[:\s]+\$?([\d,]+))?/gi);
    for (const match of channelMatches) {
      const channelName = match[1].trim();
      const channelSection = content.substring(match.index, match.index! + 400);

      channels.push({
        name: channelName,
        priority: (match[3] as any) || 'Medium',
        cac: match[4] ? `$${match[4]}` : undefined,
        tactics: extractListItems(channelSection, /(?:tactics?|strategies?)[:\s]/i),
        timeline: extractFirstLine(channelSection, /timeline[:\s]/i)
      });
    }

    // Extract pricing tiers
    const tierMatches = content.matchAll(/(?:Tier|Plan)[:\s]+([^\n$]+?)[:\s]+\$?([\d,]+)(?:\/mo|\/month)?/gi);
    for (const match of tierMatches) {
      const tierSection = content.substring(match.index, match.index! + 300);
      pricingTiers.push({
        name: match[1].trim(),
        price: `$${match[2]}/mo`,
        features: extractListItems(tierSection, /features?[:\s]/i)
      });
    }

    // Extract growth loops
    const loopMatches = content.matchAll(/(?:Loop|Growth\s+Loop)\s*\d*[:\s]+([^.\n]+)/gi);
    for (const match of loopMatches) {
      growthLoops.push(match[1].trim());
    }
  }

  // Query 2: Risk Assessment
  if (results[2]?.content) {
    const content = results[2].content;

    // Extract risks
    const riskMatches = content.matchAll(/Risk\s*\d*[:\s]+([^\n]+)/gi);
    for (const match of riskMatches) {
      const riskName = match[1].trim();
      const riskSection = content.substring(match.index, Math.min(match.index! + 500, content.length));

      const severityMatch = riskSection.match(/Severity[:\s]+(High|Medium|Low)/i);
      const mitigationMatch = riskSection.match(/Mitigation[:\s]+([^.\n]+)/i);
      const contingencyMatch = riskSection.match(/Contingency[:\s]+([^.\n]+)/i);

      risks.push({
        category: riskName,
        severity: (severityMatch?.[1] as any) || 'Medium',
        description: extractFirstLine(riskSection, /(?:Description|Risk)[:\s]/i) || riskName,
        mitigation: mitigationMatch?.[1]?.trim() || 'To be determined',
        contingency: contingencyMatch?.[1]?.trim()
      });
    }
  }

  // Query 3: Team Building Plan
  if (results[3]?.content) {
    const content = results[3].content;

    // Extract roles with hiring timeline
    const roleMatches = content.matchAll(/(?:Month|Year)\s+([\d-]+)[:\s]+(?:Hire\s+)?([^($\n]+?)(?:\(?\$?([\d,]+K?))?/gi);
    for (const match of roleMatches) {
      const roleSection = content.substring(match.index, Math.min(match.index! + 400, content.length));

      teamPlan.push({
        role: match[2].trim(),
        timeline: `Month ${match[1]}`,
        salary: match[3] ? `$${match[3]}` : undefined,
        skills: extractListItems(roleSection, /(?:skills?|requirements?)[:\s]/i)
      });
    }

    // Alternative pattern: "Role: Full-stack Engineer"
    if (teamPlan.length === 0) {
      const altRoleMatches = content.matchAll(/Role[:\s]+([^\n]+)/gi);
      for (const match of altRoleMatches) {
        const roleSection = content.substring(match.index, Math.min(match.index! + 400, content.length));
        const timelineMatch = roleSection.match(/(?:Timeline|When)[:\s]+([^\n]+)/i);
        const salaryMatch = roleSection.match(/Salary[:\s]+\$?([\d,]+K?)/i);

        teamPlan.push({
          role: match[1].trim(),
          timeline: timelineMatch?.[1]?.trim() || 'TBD',
          salary: salaryMatch ? `$${salaryMatch[1]}` : undefined,
          skills: extractListItems(roleSection, /skills?[:\s]/i)
        });
      }
    }
  }

  return {
    roadmap: roadmap.slice(0, 6),
    gtmStrategy: {
      segments: segments.slice(0, 5),
      channels: channels.slice(0, 8),
      pricingTiers: pricingTiers.slice(0, 4),
      growthLoops: growthLoops.slice(0, 5)
    },
    risks: risks.slice(0, 8),
    teamPlan: teamPlan.slice(0, 10)
  };
}

// Helper function to extract bullet points or numbered lists
function extractListItems(text: string, headerPattern: RegExp): string[] {
  const items: string[] = [];
  const headerMatch = text.match(headerPattern);

  if (!headerMatch) return items;

  const startIndex = headerMatch.index! + headerMatch[0].length;
  const section = text.substring(startIndex, Math.min(startIndex + 500, text.length));

  // Match bullet points (-, *, •) or numbered lists (1., 2.)
  const listMatches = section.matchAll(/(?:^|\n)\s*(?:[-*•]|\d+\.)\s+([^\n]+)/g);
  for (const match of listMatches) {
    items.push(match[1].trim());
  }

  return items.slice(0, 8);
}

// Helper function to extract first line after a pattern
function extractFirstLine(text: string, pattern: RegExp): string | undefined {
  const match = text.match(pattern);
  if (!match) return undefined;

  const startIndex = match.index! + match[0].length;
  const remaining = text.substring(startIndex);
  const firstLine = remaining.split('\n')[0].trim();

  return firstLine.substring(0, 200);
}

// Helper function to escape regex special characters
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
