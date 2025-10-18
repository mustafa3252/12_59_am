import { queryPerplexity } from '../perplexity';

export async function runExecutionAgent(idea: string, context: any) {
  console.log('🚀 Execution Agent: Starting...');

  // Use data from previous agents for context
  const contextSummary = `
Market Size: ${context.market?.tam || 'Unknown'}
Main Competitor: ${context.competitors?.[0]?.name || 'Unknown'}
Key Pain Points: ${context.painPoints?.map((p: any) => p.description).join(', ') || 'Unknown'}
`;

  const queries = [
    // Query 1: Execution Roadmap
    `Create a detailed 12-month execution roadmap for launching: "${idea}".

Context:
${contextSummary}

Structure the roadmap in 4 phases:

**Phase 1: Foundation (Months 1-3) - MVP Development**
- Key activities and milestones
- Technical buildout priorities
- Design and UX work
- Initial user research
- Deliverables
- Success metrics

**Phase 2: Validation (Months 4-6) - Beta/Pilot Testing**
- Beta launch strategy
- Target pilot customers
- Feedback collection methods
- Product iterations
- Deliverables
- Success metrics

**Phase 3: Launch (Months 7-9) - Go-to-Market**
- Public launch plan
- Marketing campaigns
- Sales approach
- Channel partnerships
- Deliverables
- Success metrics (users, revenue, etc.)

**Phase 4: Growth (Months 10-12) - Scaling**
- Growth experiments
- Team expansion
- Product expansion
- Revenue optimization
- Deliverables
- Success metrics

For each phase, be specific about:
- Timeline (weeks within the phase)
- Resources needed (people, tools, budget)
- Expected outcomes
- Transition criteria to next phase`,

    // Query 2: GTM Strategy
    `Design a comprehensive go-to-market (GTM) strategy for: "${idea}".

Analyze successful GTM strategies from similar startups and identify the best channels for this idea.

Provide:

1. **Target Customer Segments** (rank by priority):
   - Segment 1: [description, size, characteristics]
   - Segment 2: [description, size, characteristics]
   - Segment 3: [description, size, characteristics]

2. **Customer Acquisition Channels** (rank by priority/efficiency):
   For each channel provide:
   - Channel name
   - Priority: High/Medium/Low
   - Estimated CAC (Customer Acquisition Cost)
   - Expected conversion rate
   - Specific tactics to use
   - Timeline to results

   Consider channels like:
   - SEO/Content marketing
   - Paid ads (Google, Facebook, LinkedIn)
   - Social media organic
   - Community building (Reddit, Facebook groups)
   - Partnerships/integrations
   - Sales outreach (cold email, LinkedIn)
   - Product-led growth
   - Referrals/viral loops

3. **Growth Loops**: How will organic growth compound?

4. **Pricing Strategy**:
   - Pricing model (freemium, subscription, usage-based, etc.)
   - Price points for each tier
   - Competitive positioning

5. **Launch Timeline**: Pre-launch, launch day, post-launch activities`,

    // Query 3: Risk Assessment
    `Identify the top risks and challenges for: "${idea}" with actionable mitigation strategies.

Analyze risks in these categories:

1. **Market Risks**:
   - Risk: [description]
   - Likelihood: High/Medium/Low
   - Impact: High/Medium/Low
   - Mitigation: [specific actions]

2. **Technical Risks**:
   - Risk: [description]
   - Likelihood: High/Medium/Low
   - Impact: High/Medium/Low
   - Mitigation: [specific actions]

3. **Competitive Risks**:
   - Risk: [description]
   - Likelihood: High/Medium/Low
   - Impact: High/Medium/Low
   - Mitigation: [specific actions]

4. **Financial Risks**:
   - Risk: [description]
   - Likelihood: High/Medium/Low
   - Impact: High/Medium/Low
   - Mitigation: [specific actions]

5. **Regulatory/Legal Risks**:
   - Risk: [description]
   - Likelihood: High/Medium/Low
   - Impact: High/Medium/Low
   - Mitigation: [specific actions]

For each risk, provide:
- Clear description of the risk
- Why it's a concern
- Early warning signs
- Specific mitigation tactics (not generic advice)

List 8-12 key risks with actionable mitigation plans.`,

    // Query 4: Team Strategy
    `Design the ideal team composition and hiring roadmap for: "${idea}".

Provide:

1. **Founding Team** (Day 0):
   - Ideal co-founder roles and skills
   - Who should be involved from the start
   - Complementary skill sets needed

2. **First 5 Hires** (Months 0-12):
   For each role:
   - Job title
   - When to hire (which month/phase)
   - Key responsibilities
   - Required skills/experience
   - Estimated salary range
   - Why this role is critical

3. **First Year Team Structure** (Month 12):
   - Total team size
   - Department breakdown
   - Reporting structure
   - Total payroll cost

4. **Hiring Sources**:
   - Where to find talent (AngelList, LinkedIn, niche communities)
   - Hiring strategy (full-time, contractors, agencies)

5. **Key Advisors/Mentors**:
   - What expertise to seek
   - Where to find advisors (industry networks, accelerators)

Focus on lean, efficient team building for a startup with limited runway.`,
  ];

  const results = [];

  for (let i = 0; i < queries.length; i++) {
    console.log(`🚀 Execution Agent: Query ${i + 1}/${queries.length}`);
    const result = await queryPerplexity(queries[i], {
      searchType: 'fast', // Use fast for synthesis
      streaming: false,
    });
    results.push(result);
  }

  console.log('✅ Execution Agent: Complete');
  return results;
}
