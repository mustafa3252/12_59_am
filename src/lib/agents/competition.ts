import { queryPerplexity } from '../perplexity';

export async function runCompetitionAgent(idea: string) {
  console.log('🏢 Competition Agent: Starting...');

  const queries = [
    // Query 1: Competitor Analysis
    `Identify and analyze the top 5-10 competitors for: "${idea}".

Search sources:
- Product Hunt (producthunt.com) for new startups
- Crunchbase (crunchbase.com) for funding info
- G2 (g2.com) and Capterra (capterra.com) for software reviews
- Google search for related companies

For each competitor, provide:
1. Company name
2. Website URL
3. Founding year
4. Total funding raised
5. Estimated ARR or revenue
6. Number of customers/users
7. Key features and differentiators
8. Pricing model and price points
9. Strengths and weaknesses
10. Market positioning

Also identify the MAIN competitor (market leader) and explain why they're vulnerable.`,

    // Query 2: Customer Pain Points
    `Research customer pain points and problems that "${idea}" would solve.

Search for complaints, frustrations, and unmet needs in:
- Reddit discussions (reddit.com)
- Twitter/X complaints and hashtags
- G2 and Capterra reviews (negative reviews of competitors)
- Quora questions (quora.com)
- Industry forums and communities

For each pain point, identify:
1. Problem description (specific and detailed)
2. Severity: Critical, High, Medium, Low
3. Frequency: How often does this problem occur?
4. Current workarounds: What do people do now?
5. Willingness to pay: Evidence of monetary impact
6. Quote real user feedback when possible

List at least 8-10 distinct pain points ranked by severity.`,

    // Query 3: Feasibility Analysis
    `Analyze the technical feasibility and execution difficulty for building: "${idea}".

Evaluate:
1. **Technical Complexity** (1-10 scale):
   - What technologies are required?
   - Are there existing APIs/tools available?
   - Is specialized expertise needed?

2. **Time to MVP**:
   - Minimum viable product timeline
   - Beta launch timeline
   - Full product timeline

3. **Team Requirements**:
   - Minimum team size
   - Required roles (founder/CEO, CTO, engineers, designers, etc.)
   - Specialized skills needed

4. **Capital Requirements**:
   - Pre-seed: $0-50K (bootstrapped)
   - Seed: $50K-500K
   - Series A: $500K-2M
   - Estimated burn rate

5. **Regulatory/Compliance Barriers**:
   - Licenses or certifications required
   - Industry regulations
   - Legal complexity

6. **Key Risks**:
   - Technical risks
   - Market risks
   - Execution risks

Provide a realistic feasibility assessment with specific timelines and costs.`,

    // Query 4: Market Gap
    `Identify the unique market gap and positioning opportunities for: "${idea}".

Analyze:
1. What do existing competitors NOT solve well?
2. What customer segments are underserved?
3. What features are missing from current solutions?
4. What is the unique value proposition (UVP)?
5. How can we differentiate from incumbents?
6. What is the "unfair advantage" or moat?

Search competitor websites, product pages, and customer reviews to identify gaps.

Create a positioning statement:
"For [target customer] who [need/pain point], [product name] is a [category] that [unique benefit]. Unlike [competitors], we [key differentiator]."

List 5-7 specific positioning opportunities with evidence.`,
  ];

  const results = [];

  for (let i = 0; i < queries.length; i++) {
    console.log(`🏢 Competition Agent: Query ${i + 1}/${queries.length}`);
    const result = await queryPerplexity(queries[i], {
      searchType: 'pro',
      streaming: false,
    });
    results.push(result);
  }

  console.log('✅ Competition Agent: Complete');
  return results;
}
