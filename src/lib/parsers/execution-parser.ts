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

  // Query 0: 12-Month Roadmap - ENHANCED EXTRACTION
  if (results[0]?.content) {
    const content = results[0].content;
    console.log('🔍 Execution Parser - Full Content Length:', content.length);

    try {
      // Split content into paragraphs
      const paragraphs = content.split(/\n\n+/).filter(p => p.trim().length > 20);

      console.log('📄 Found', paragraphs.length, 'paragraphs to analyze');

      let currentPhase: RoadmapPhase | null = null;
      let phaseCounter = 0;

      for (let i = 0; i < paragraphs.length; i++) {
        const para = paragraphs[i];
        const lines = para.split('\n').map(l => l.trim()).filter(l => l.length > 0);

        // Check if this paragraph starts a new phase
        const firstLine = lines[0];
        const isPhaseHeader = /^(?:Phase\s+\d+|Month\s*\d+|Months?\s+\d+-\d+|Quarter\s+\d+|Q\d+|Week\s+\d+|Stage\s+\d+|\d+\.)[\s:]/i.test(firstLine);

        if (isPhaseHeader || (phaseCounter === 0 && para.length > 50)) {
          // Save previous phase if exists
          if (currentPhase) {
            roadmap.push(currentPhase);
          }

          phaseCounter++;

          // Extract phase name and timeline
          let phaseName = firstLine.replace(/^\d+\.\s*/, '').replace(/^(?:Phase|Month|Quarter|Week|Stage)\s*\d+:?\s*/i, '');
          const timelineMatch = firstLine.match(/(?:Phase|Month|Quarter|Week|Stage)\s*(\d+(?:-\d+)?)/i);
          const timeline = timelineMatch ? timelineMatch[0] : `Phase ${phaseCounter}`;

          // If name is still too short, use the whole first line
          if (phaseName.length < 5) {
            phaseName = firstLine;
          }

          // Extract detailed information from the paragraph
          const activities: string[] = [];
          const milestones: string[] = [];
          const deliverables: string[] = [];
          const successMetrics: string[] = [];
          const resources: string[] = [];

          // Parse lines in this paragraph and the next one
          const sectionLines = [...lines, ...(paragraphs[i + 1] ? paragraphs[i + 1].split('\n') : [])];

          for (const line of sectionLines) {
            const lower = line.toLowerCase();

            // Extract activities/tasks
            if (lower.includes('activit') || lower.includes('task') || lower.includes('action') || lower.includes('focus')) {
              const items = extractItemsFromLine(line);
              activities.push(...items);
            }

            // Extract milestones
            if (lower.includes('milestone') || lower.includes('goal') || lower.includes('achieve')) {
              const items = extractItemsFromLine(line);
              milestones.push(...items);
            }

            // Extract deliverables
            if (lower.includes('deliver') || lower.includes('output') || lower.includes('produce') || lower.includes('launch')) {
              const items = extractItemsFromLine(line);
              deliverables.push(...items);
            }

            // Extract success metrics
            if (lower.includes('metric') || lower.includes('kpi') || lower.includes('measure') || lower.includes('target')) {
              const items = extractItemsFromLine(line);
              successMetrics.push(...items);
            }

            // Extract resources
            if (lower.includes('resource') || lower.includes('team') || lower.includes('budget') || lower.includes('tool')) {
              const items = extractItemsFromLine(line);
              resources.push(...items);
            }

            // Also extract bullet points
            if (/^[-•*]\s/.test(line)) {
              const item = line.replace(/^[-•*]\s+/, '').trim();
              if (item.length > 5) {
                activities.push(item);
              }
            }
          }

          currentPhase = {
            name: phaseName.substring(0, 150),
            timeline,
            activities: activities.slice(0, 10),
            milestones: milestones.slice(0, 8),
            deliverables: deliverables.slice(0, 8),
            successMetrics: successMetrics.slice(0, 8),
            resources: resources.slice(0, 8),
          };
        }
      }

      // Add the last phase
      if (currentPhase) {
        roadmap.push(currentPhase);
      }

      console.log('✅ Found', roadmap.length, 'detailed phases');

      // If still no phases, create default structure from content
      if (roadmap.length === 0) {
        console.log('⚠️ Creating default phases from content');

        // Split into roughly equal chunks
        const chunkSize = Math.ceil(paragraphs.length / 8);

        for (let i = 0; i < 8 && i * chunkSize < paragraphs.length; i++) {
          const chunk = paragraphs.slice(i * chunkSize, (i + 1) * chunkSize).join('\n\n');
          const activities = extractListItems(chunk, /./);

          if (activities.length > 0 || chunk.length > 100) {
            roadmap.push({
              name: `Phase ${i + 1}: ${getPhaseTitle(i)}`,
              timeline: `Month ${i * 2 + 1}-${i * 2 + 2}`,
              activities: activities.slice(0, 5),
              milestones: [],
              deliverables: [],
              successMetrics: [],
              resources: []
            });
          }
        }
      }

    } catch (error) {
      console.warn('❌ Error parsing roadmap phases:', error);
    }
  }

  // Query 1: GTM Strategy
  if (results[1]?.content) {
    const content = results[1].content;

    // Extract customer segments
    const segmentMatches = Array.from(content.matchAll(/Segment\s+(\d+)[:\s]+([^\n]+?)(?:\n|$)/gi));
    for (const match of segmentMatches) {
      segments.push({
        name: match[2].trim(),
        description: extractFirstLine(content, new RegExp(`${escapeRegex(match[2])}[:\\s]+([^\\n]+)`, 'i')) || '',
        priority: parseInt(match[1])
      });
    }

    // Extract acquisition channels
    const channelMatches = Array.from(content.matchAll(/Channel[:\s]+([^\n(]+?)(?:\(([^)]+)\))?[^\n]*?(?:Priority[:\s]+(High|Medium|Low)|CAC[:\s]+\$?([\d,]+))?/gi));
    for (const match of channelMatches) {
      const channelName = match[1].trim();
      const startIdx = (match as any).index || 0;
      const channelSection = content.substring(startIdx, startIdx + 400);

      channels.push({
        name: channelName,
        priority: (match[3] as any) || 'Medium',
        cac: match[4] ? `$${match[4]}` : undefined,
        tactics: extractListItems(channelSection, /(?:tactics?|strategies?)[:\s]/i),
        timeline: extractFirstLine(channelSection, /timeline[:\s]/i)
      });
    }

    // Extract pricing tiers
    const tierMatches = Array.from(content.matchAll(/(?:Tier|Plan)[:\s]+([^\n$]+?)[:\s]+\$?([\d,]+)(?:\/mo|\/month)?/gi));
    for (const match of tierMatches) {
      const startIdx = (match as any).index || 0;
      const tierSection = content.substring(startIdx, startIdx + 300);
      pricingTiers.push({
        name: match[1].trim(),
        price: `$${match[2]}/mo`,
        features: extractListItems(tierSection, /features?[:\s]/i)
      });
    }

    // Extract growth loops
    const loopMatches = Array.from(content.matchAll(/(?:Loop|Growth\s+Loop)\s*\d*[:\s]+([^.\n]+)/gi));
    for (const match of loopMatches) {
      growthLoops.push(match[1].trim());
    }
  }

  // Query 2: Risk Assessment
  if (results[2]?.content) {
    const content = results[2].content;

    // Extract risks
    const riskMatches = Array.from(content.matchAll(/Risk\s*\d*[:\s]+([^\n]+)/gi));
    for (const match of riskMatches) {
      const riskName = match[1].trim();
      const startIdx = (match as any).index || 0;
      const riskSection = content.substring(startIdx, Math.min(startIdx + 500, content.length));

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
    const roleMatches = Array.from(content.matchAll(/(?:Month|Year)\s+([\d-]+)[:\s]+(?:Hire\s+)?([^($\n]+?)(?:\(?\$?([\d,]+K?))?/gi));
    for (const match of roleMatches) {
      const startIdx = (match as any).index || 0;
      const roleSection = content.substring(startIdx, Math.min(startIdx + 400, content.length));

      teamPlan.push({
        role: match[2].trim(),
        timeline: `Month ${match[1]}`,
        salary: match[3] ? `$${match[3]}` : undefined,
        skills: extractListItems(roleSection, /(?:skills?|requirements?)[:\s]/i)
      });
    }

    // Alternative pattern: "Role: Full-stack Engineer"
    if (teamPlan.length === 0) {
      const altRoleMatches = Array.from(content.matchAll(/Role[:\s]+([^\n]+)/gi));
      for (const match of altRoleMatches) {
        const startIdx = (match as any).index || 0;
        const roleSection = content.substring(startIdx, Math.min(startIdx + 400, content.length));
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

  const result = {
    roadmap: roadmap.slice(0, 12),  // Increased from 6 to 12 phases
    gtmStrategy: {
      segments: segments.slice(0, 8),  // Increased from 5 to 8
      channels: channels.slice(0, 12),  // Increased from 8 to 12
      pricingTiers: pricingTiers.slice(0, 6),  // Increased from 4 to 6
      growthLoops: growthLoops.slice(0, 8)  // Increased from 5 to 8
    },
    risks: risks.slice(0, 12),  // Increased from 8 to 12
    teamPlan: teamPlan.slice(0, 15)  // Increased from 10 to 15
  };

  console.log('📊 Execution Parser Final Result:', {
    roadmapCount: result.roadmap.length,
    segmentsCount: result.gtmStrategy.segments.length,
    channelsCount: result.gtmStrategy.channels.length,
    risksCount: result.risks.length,
    teamPlanCount: result.teamPlan.length
  });

  return result;
}

// Helper function to extract items from a single line
function extractItemsFromLine(line: string): string[] {
  const items: string[] = [];

  // Remove common prefixes
  let cleaned = line.replace(/^[-•*\d+\.\s]+/, '').trim();
  cleaned = cleaned.replace(/^(Activities?|Tasks?|Milestones?|Deliverables?|Metrics?|KPIs?|Resources?)[:\s]+/i, '').trim();

  // Split by common separators
  const segments = cleaned.split(/[;,]\s+/).filter(s => s.length > 3);

  for (const segment of segments) {
    const trimmed = segment.trim();
    if (trimmed.length > 5 && trimmed.length < 200) {
      items.push(trimmed);
    }
  }

  // If no segments found, return the whole cleaned line
  if (items.length === 0 && cleaned.length > 5) {
    items.push(cleaned);
  }

  return items;
}

// Helper function to get default phase titles
function getPhaseTitle(index: number): string {
  const titles = [
    'Foundation & Setup',
    'MVP Development',
    'Beta Testing & Iteration',
    'Market Launch',
    'Growth & Scale',
    'Optimization',
    'Expansion',
    'Maturity & Innovation'
  ];
  return titles[index] || 'Execution';
}

// Helper function to extract bullet points or numbered lists
function extractListItems(text: string, headerPattern: RegExp): string[] {
  const items: string[] = [];

  // Match bullet points (-, *, •) or numbered lists (1., 2.)
  const listMatches = Array.from(text.matchAll(/(?:^|\n)\s*(?:[-*•]|\d+\.)\s+([^\n]+)/g));
  for (const match of listMatches) {
    const item = match[1].trim();
    if (item.length > 5) {
      items.push(item);
    }
  }

  // If no list items found, try to split by sentences
  if (items.length === 0) {
    const sentences = text.split(/[.!?]\s+/).filter(s => s.trim().length > 10);
    items.push(...sentences.slice(0, 5));
  }

  return items.slice(0, 10);
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
