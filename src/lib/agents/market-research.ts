import { queryPerplexity } from '../perplexity';

export async function runMarketResearchAgent(idea: string) {
  console.log('🔍 Market Research Agent: Starting...');

  const queries = [
    // Query 1: Market Size & TAM
    `Research the Total Addressable Market (TAM) and market size for: "${idea}".

Search authoritative sources including:
- Statista (statista.com) for market size data
- Grand View Research (grandviewresearch.com) for industry reports
- IBISWorld (ibisworld.com) for market analysis
- Gartner reports if available

Provide:
1. Current market size in USD (2025)
2. Projected market size (2030)
3. CAGR (Compound Annual Growth Rate) percentage
4. Key market segments and their sizes
5. Geographic market breakdown

Format your response with specific numbers and sources.`,

    // Query 2: Revenue Potential
    `Analyze revenue potential and monetization strategies for: "${idea}".

Consider:
1. What are the typical pricing models in this space? (SaaS, transaction fees, freemium, etc.)
2. What is the realistic ARR (Annual Recurring Revenue) potential?
   - Year 1: $X - $Y
   - Year 3: $X - $Y
   - Year 5: $X - $Y
3. What is the average customer LTV (Lifetime Value)?
4. What are proven monetization strategies from successful competitors?
5. What is the ideal pricing tier structure?

Search for case studies and competitor pricing from:
- Crunchbase (crunchbase.com) for startup funding data
- SaaS pricing pages of competitors
- Industry benchmark reports

Provide realistic revenue projections with justification.`,

    // Query 3: Funding Activity
    `Research recent funding, acquisitions, and market activity related to: "${idea}".

Search sources including:
- Crunchbase (crunchbase.com) for funding rounds
- TechCrunch (techcrunch.com) for acquisition news
- PitchBook for M&A activity
- CB Insights for market trends

Find:
1. Top 5 recent funding rounds in this space (company, amount, date, investors)
2. Recent acquisitions or exits (company, acquirer, amount, date)
3. Total capital invested in this category (last 12 months)
4. Key investors actively funding this space
5. Average seed/Series A valuations

This validates market interest and investor appetite.`,

    // Query 4: "Why Now?" Timing
    `Analyze why NOW is the perfect timing for launching: "${idea}".

Identify timing factors including:
1. **Regulatory Changes**: New laws, policies, or mandates (search .gov sites, regulatory news)
2. **Technology Enablers**: What new technology makes this possible now? (AI, APIs, hardware)
3. **Market Shifts**: Changing consumer behavior, remote work trends, demographic shifts
4. **Competitive Gaps**: Why haven't incumbents solved this? What's changing?
5. **Economic Factors**: Recession-proof? Stimulus money? Budget priorities?

Search for:
- Recent regulatory changes on government websites
- Technology trend reports (Gartner, Forrester)
- Consumer behavior studies
- News articles from last 12 months

Create a compelling "Why Now?" narrative with 5-7 specific timing factors.`,
  ];

  const results = [];

  for (let i = 0; i < queries.length; i++) {
    console.log(`🔍 Market Research Agent: Query ${i + 1}/${queries.length}`);
    const result = await queryPerplexity(queries[i], {
      searchType: 'pro',
      streaming: false,
    });
    results.push(result);
  }

  console.log('✅ Market Research Agent: Complete');
  return results;
}
