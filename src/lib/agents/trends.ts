import { queryPerplexity } from '../perplexity';

export async function runTrendAgent(idea: string) {
  console.log('📈 Trend Agent: Starting...');

  const mainKeyword = idea.split(' ').slice(0, 3).join(' ');

  const queries = [
    // Query 1: Search Volume Trends
    `Analyze search volume trends and keyword growth for: "${idea}".

Research:
1. Primary keywords related to this idea (5-10 keywords)
2. Monthly search volumes for each keyword
3. Year-over-year growth percentages
4. Search trend direction (rising, stable, declining)
5. Related rising queries
6. Geographic interest (top countries/regions)

Use data from:
- Google Trends (google.com/trends)
- SEO tools data if available
- Industry keyword research

For the main keyword "${mainKeyword}", provide:
- Current monthly search volume
- Growth rate (% change YoY)
- Historical data (past 3 years if available)
- Seasonal patterns

Format response with specific numbers:
Keyword: [keyword]
Volume: [number] searches/month
Growth: +[X]% YoY
Trend: [rising/stable/declining]`,

    // Query 2: Emerging Trends
    `Identify emerging trends and macro factors driving demand for: "${idea}".

Research trend signals from:
- Google Trends for rising queries
- Industry reports (Gartner, Forrester, McKinsey)
- TechCrunch, VentureBeat for technology trends
- Harvard Business Review for business trends

Identify:
1. **Technology Trends**: What new tech enables this? (AI, blockchain, IoT, etc.)
2. **Consumer Behavior Trends**: How are customer preferences changing?
3. **Regulatory Trends**: New laws or policy changes
4. **Economic Trends**: Budget shifts, spending priorities
5. **Demographic Trends**: Generational shifts, remote work, etc.

For each trend:
- Trend name
- Description (2-3 sentences)
- Impact on this idea (how it helps)
- Supporting data/evidence

List 7-10 specific trends with evidence and sources.`,

    // Query 3: Historical Market Data
    `Find historical market size data for the "${idea}" market from 2020-2025.

Search for:
- Market research reports (Statista, Grand View Research, MarketsandMarkets)
- Industry association reports
- Company investor presentations
- Analyst reports

Provide:
- 2020 market size: $X.XB
- 2021 market size: $X.XB
- 2022 market size: $X.XB
- 2023 market size: $X.XB
- 2024 market size: $X.XB
- 2025 market size (current): $X.XB

Calculate:
- CAGR (2020-2025): X.X%
- Total market growth: +X%

Include source citations for credibility.`,

    // Query 4: Market Forecasts
    `Find market size projections and forecasts for the "${idea}" market from 2025-2030.

Search for:
- Industry forecast reports
- Analyst projections
- Market research firm predictions
- Investment bank reports

Provide:
- 2025 projected size: $X.XB
- 2026 projected size: $X.XB
- 2027 projected size: $X.XB
- 2028 projected size: $X.XB
- 2029 projected size: $X.XB
- 2030 projected size: $X.XB

Calculate:
- Projected CAGR (2025-2030): X.X%
- Expected market growth: +X%

Include:
- Key growth drivers
- Market constraints or risks
- Geographic growth opportunities

This data will be used to generate market growth charts showing historical + forecast data.`,
  ];

  const results = [];

  for (let i = 0; i < queries.length; i++) {
    console.log(`📈 Trend Agent: Query ${i + 1}/${queries.length}`);
    const result = await queryPerplexity(queries[i], {
      searchType: 'pro',
      streaming: false,
    });
    results.push(result);
  }

  console.log('✅ Trend Agent: Complete');
  return results;
}
