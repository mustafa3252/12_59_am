export interface CommunityPlatform {
  name: string;
  type: 'reddit' | 'facebook' | 'youtube' | 'startup';
  memberCount: string;
  activity: string;
  sentiment?: string;
  details: string;
}

export interface ParsedCommunityData {
  platforms: CommunityPlatform[];
  totalReach: string;
  engagementLevel: 'High' | 'Medium' | 'Low';
  keyInsights: string[];
}

export function parseCommunityData(results: any[]): ParsedCommunityData {
  const platforms: CommunityPlatform[] = [];
  const insights: string[] = [];

  // Query 0: Reddit Analysis
  if (results[0]?.content) {
    const content = results[0].content;

    // Extract subreddits with regex
    const subredditMatches = content.matchAll(/r\/(\w+)[^\d]*?([\d.]+[KMB]?)\s*members?/gi);
    for (const match of subredditMatches) {
      platforms.push({
        name: `r/${match[1]}`,
        type: 'reddit',
        memberCount: match[2],
        activity: 'Active', // Can be enhanced with more parsing
        sentiment: extractSentiment(content),
        details: content.substring(0, 200)
      });
    }

    // Extract pain points as insights
    const painPointMatch = content.match(/pain point[s]?:([^]*?)(?=\n\n|\d\.|$)/i);
    if (painPointMatch) {
      insights.push(painPointMatch[1].trim().substring(0, 150));
    }
  }

  // Query 1: Facebook Groups
  if (results[1]?.content) {
    const content = results[1].content;

    const groupMatches = content.matchAll(/['"]([^'"]+)['"][^\d]*?([\d.]+[KMB]?)\s*members?/gi);
    for (const match of groupMatches) {
      platforms.push({
        name: match[1],
        type: 'facebook',
        memberCount: match[2],
        activity: 'Active',
        details: content.substring(0, 200)
      });
    }
  }

  // Query 2: YouTube Analysis
  if (results[2]?.content) {
    const content = results[2].content;

    const channelMatches = content.matchAll(/(?:channel|creator)[:]\s*([^,\n]+)[^\d]*?([\d.]+[KMB]?)\s*subscriber/gi);
    for (const match of channelMatches) {
      platforms.push({
        name: match[1].trim(),
        type: 'youtube',
        memberCount: match[2],
        activity: 'Active',
        details: content.substring(0, 200)
      });
    }
  }

  // Query 3: Startup Activity
  if (results[3]?.content) {
    const content = results[3].content;

    const startupCountMatch = content.match(/([\d.]+[KMB]?)\s*(?:new\s*)?startups?/i);
    if (startupCountMatch) {
      platforms.push({
        name: 'Startup Ecosystem',
        type: 'startup',
        memberCount: startupCountMatch[1],
        activity: 'Growing',
        details: content.substring(0, 200)
      });
    }

    // Extract market momentum
    const momentumMatch = content.match(/momentum[:\s]*(\w+)/i);
    if (momentumMatch) {
      insights.push(`Market momentum: ${momentumMatch[1]}`);
    }
  }

  // Calculate total reach
  let totalReach = 0;
  platforms.forEach(p => {
    const num = parseFloat(p.memberCount);
    const multiplier = p.memberCount.includes('M') ? 1000000 :
                      p.memberCount.includes('K') ? 1000 : 1;
    totalReach += num * multiplier;
  });

  return {
    platforms: platforms.slice(0, 12), // Limit to 12 platforms
    totalReach: formatNumber(totalReach),
    engagementLevel: platforms.length > 8 ? 'High' : platforms.length > 4 ? 'Medium' : 'Low',
    keyInsights: insights
  };
}

function extractSentiment(text: string): string {
  if (/frustrated|angry|disappointed|terrible/i.test(text)) return 'Frustrated';
  if (/positive|excited|love|great|excellent/i.test(text)) return 'Positive';
  if (/mixed|moderate|neutral/i.test(text)) return 'Mixed';
  return 'Neutral';
}

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}
