import { queryPerplexity } from '../perplexity';

export async function runCommunityAgent(idea: string) {
  console.log('👥 Community Agent: Starting...');

  // Extract keywords from idea for better search
  const keywords = idea.split(' ').slice(0, 5).join(' ');

  const queries = [
    // Query 1: Reddit Analysis
    `Search Reddit for discussions, pain points, and community activity related to: "${idea}" or "${keywords}".

Find:
1. Top 5-10 relevant subreddits with their:
   - Subreddit name (r/[name])
   - Member count
   - Posts per day (activity level)
   - Recent discussion themes
   - User sentiment (positive/negative/frustrated)

2. Specific pain point discussions:
   - Find threads where users complain about current solutions
   - Find threads asking for recommendations
   - Find threads discussing problems

3. Engagement metrics:
   - Average upvotes per post
   - Average comments per post
   - Notable power users or influencers

Example search queries to use:
- "[keyword] software reddit"
- "best [keyword] reddit"
- "frustrated with [keyword] reddit"
- "[keyword] alternatives reddit"

Provide specific subreddit URLs and quote real user comments that validate the need.`,

    // Query 2: Facebook Groups
    `Search Facebook for groups and communities discussing: "${idea}" or "${keywords}".

Find:
1. Top 5-10 relevant Facebook groups with:
   - Group name
   - Member count
   - Activity level (posts per day/week)
   - Group purpose/focus
   - Admin information if available

2. Discussion themes:
   - What problems are people discussing?
   - What solutions are recommended?
   - What frustrations are expressed?

3. Engagement metrics:
   - Average likes per post
   - Average comments per post
   - Notable influencers or admins

Search strategies:
- Google: "[keyword] facebook group"
- Search within Facebook: "[keyword] group"
- Look for professional/industry groups

Note: Due to Facebook privacy, focus on public groups and general metrics.`,

    // Query 3: YouTube Analysis
    `Analyze YouTube content and audience engagement for: "${idea}" or "${keywords}".

Find:
1. Top 5-10 relevant YouTube channels covering this topic:
   - Channel name
   - Subscriber count
   - Total video views
   - Upload frequency
   - Content type (tutorials, reviews, news, etc.)

2. Popular videos:
   - Video titles with highest views
   - View counts
   - Like/comment ratios
   - Key topics covered

3. Audience signals:
   - What are people asking in comments?
   - What problems are mentioned?
   - What solutions are requested?

Search queries:
- "[keyword] tutorial"
- "[keyword] review"
- "how to [solve problem]"
- "[keyword] vs [competitor]"

Provide channel URLs and view count metrics.`,

    // Query 4: Startup Activity
    `Research startup activity and product launches related to: "${idea}".

Search sources:
- Product Hunt (producthunt.com) - recent launches
- Crunchbase (crunchbase.com) - new company formations
- BetaList (betalist.com) - upcoming startups
- TechCrunch - launch announcements
- YC portfolio companies (ycombinator.com/companies)

Find:
1. Number of new startups launched (last 12 months)
2. Product Hunt launches with upvotes/comments
3. Successfully funded startups (with amounts)
4. Failed or shut down companies (and why)
5. Acquisition activity

This validates market momentum and investor interest.

Provide:
- Total number of active startups in this space
- Recent funding totals
- Notable launches with traction metrics
- Market momentum score (heating up / stable / cooling down)`,
  ];

  const results = [];

  for (let i = 0; i < queries.length; i++) {
    console.log(`👥 Community Agent: Query ${i + 1}/${queries.length}`);
    const result = await queryPerplexity(queries[i], {
      searchType: 'pro',
      streaming: false,
    });
    results.push(result);
  }

  console.log('✅ Community Agent: Complete');
  return results;
}
