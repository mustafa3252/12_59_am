module.exports = {

"[project]/.next-internal/server/app/api/analyze-idea/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/perplexity.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "client": (()=>client),
    "queryPerplexity": (()=>queryPerplexity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$perplexity$2d$ai$2f$perplexity_ai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@perplexity-ai/perplexity_ai/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$perplexity$2d$ai$2f$perplexity_ai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@perplexity-ai/perplexity_ai/client.mjs [app-route] (ecmascript)");
;
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$perplexity$2d$ai$2f$perplexity_ai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Perplexity"]({
    apiKey: process.env.PERPLEXITY_API_KEY
});
async function queryPerplexity(query, options = {
    searchType: 'pro',
    streaming: false
}) {
    try {
        const response = await client.chat.completions.create({
            model: 'sonar-pro',
            messages: [
                {
                    role: 'user',
                    content: query
                }
            ],
            stream: options.streaming,
            web_search_options: {
                search_type: options.searchType
            }
        });
        if (options.streaming) {
            // For streaming, return the async iterable
            return response;
        }
        // For non-streaming, the response is already complete
        // Cast to proper type
        const completion = response;
        return {
            content: completion.choices?.[0]?.message?.content || '',
            searchResults: completion.search_results || [],
            reasoningSteps: completion.reasoning_steps || [],
            citations: completion.citations || []
        };
    } catch (error) {
        console.error('Perplexity API error:', error);
        throw error;
    }
}
;
}}),
"[project]/src/lib/agents/market-research.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "runMarketResearchAgent": (()=>runMarketResearchAgent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$perplexity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/perplexity.ts [app-route] (ecmascript)");
;
async function runMarketResearchAgent(idea) {
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

Create a compelling "Why Now?" narrative with 5-7 specific timing factors.`
    ];
    const results = [];
    for(let i = 0; i < queries.length; i++){
        console.log(`🔍 Market Research Agent: Query ${i + 1}/${queries.length}`);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$perplexity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryPerplexity"])(queries[i], {
            searchType: 'pro',
            streaming: false
        });
        results.push(result);
    }
    console.log('✅ Market Research Agent: Complete');
    return results;
}
}}),
"[project]/src/lib/agents/competition.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "runCompetitionAgent": (()=>runCompetitionAgent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$perplexity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/perplexity.ts [app-route] (ecmascript)");
;
async function runCompetitionAgent(idea) {
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

List 5-7 specific positioning opportunities with evidence.`
    ];
    const results = [];
    for(let i = 0; i < queries.length; i++){
        console.log(`🏢 Competition Agent: Query ${i + 1}/${queries.length}`);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$perplexity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryPerplexity"])(queries[i], {
            searchType: 'pro',
            streaming: false
        });
        results.push(result);
    }
    console.log('✅ Competition Agent: Complete');
    return results;
}
}}),
"[project]/src/lib/agents/community.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "runCommunityAgent": (()=>runCommunityAgent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$perplexity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/perplexity.ts [app-route] (ecmascript)");
;
async function runCommunityAgent(idea) {
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
- Market momentum score (heating up / stable / cooling down)`
    ];
    const results = [];
    for(let i = 0; i < queries.length; i++){
        console.log(`👥 Community Agent: Query ${i + 1}/${queries.length}`);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$perplexity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryPerplexity"])(queries[i], {
            searchType: 'pro',
            streaming: false
        });
        results.push(result);
    }
    console.log('✅ Community Agent: Complete');
    return results;
}
}}),
"[project]/src/lib/agents/trends.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "runTrendAgent": (()=>runTrendAgent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$perplexity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/perplexity.ts [app-route] (ecmascript)");
;
async function runTrendAgent(idea) {
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

This data will be used to generate market growth charts showing historical + forecast data.`
    ];
    const results = [];
    for(let i = 0; i < queries.length; i++){
        console.log(`📈 Trend Agent: Query ${i + 1}/${queries.length}`);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$perplexity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryPerplexity"])(queries[i], {
            searchType: 'pro',
            streaming: false
        });
        results.push(result);
    }
    console.log('✅ Trend Agent: Complete');
    return results;
}
}}),
"[project]/src/lib/agents/execution.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "runExecutionAgent": (()=>runExecutionAgent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$perplexity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/perplexity.ts [app-route] (ecmascript)");
;
async function runExecutionAgent(idea, context) {
    console.log('🚀 Execution Agent: Starting...');
    // Use data from previous agents for context
    const contextSummary = `
Market Size: ${context.market?.tam || 'Unknown'}
Main Competitor: ${context.competitors?.[0]?.name || 'Unknown'}
Key Pain Points: ${context.painPoints?.map((p)=>p.description).join(', ') || 'Unknown'}
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

Focus on lean, efficient team building for a startup with limited runway.`
    ];
    const results = [];
    for(let i = 0; i < queries.length; i++){
        console.log(`🚀 Execution Agent: Query ${i + 1}/${queries.length}`);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$perplexity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryPerplexity"])(queries[i], {
            searchType: 'fast',
            streaming: false
        });
        results.push(result);
    }
    console.log('✅ Execution Agent: Complete');
    return results;
}
}}),
"[project]/src/lib/agents/content.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "runContentAgent": (()=>runContentAgent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$perplexity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/perplexity.ts [app-route] (ecmascript)");
;
async function runContentAgent(idea, context) {
    console.log('✍️ Content Agent: Starting...');
    const targetAudience = context.market?.targetAudience || 'business owners';
    const painPoints = context.painPoints?.map((p)=>p.description).slice(0, 3).join(', ') || 'key challenges';
    const queries = [
        // Query 1: Landing Page Copy
        `Write high-converting landing page copy for: "${idea}".

Target Audience: ${targetAudience}
Key Pain Points: ${painPoints}

Create the following sections:

1. **Hero Section**:
   - Main headline (10-15 words, benefit-driven, specific)
   - Subheadline (20-30 words, elaborates on headline)
   - Primary CTA button text
   - Supporting visual suggestion (hero image/illustration description)

2. **Problem Section** (Above the fold):
   - Section headline
   - 3-4 sentences describing the customer's pain points
   - Emotional language that resonates

3. **Solution Section**:
   - Section headline ("How [Product] Works" or similar)
   - 3 key benefits with:
     * Benefit headline
     * 2-3 sentence description
     * Icon or visual suggestion

4. **Features Section**:
   - Section headline
   - 5-6 features with:
     * Feature name
     * Brief description (1-2 sentences)
     * Why it matters

5. **Social Proof Section**:
   - Section headline ("Trusted by..." or "Join thousands...")
   - Placeholder testimonial structure (3 testimonials):
     * Quote (what problem was solved)
     * Name, title, company (placeholder)
   - Stats to highlight (users, savings, etc.)

6. **Pricing Teaser**:
   - Section headline
   - Brief pricing description
   - CTA to "View Pricing" or "Get Started"

7. **FAQ Section**:
   - 5-7 common questions with answers

8. **Final CTA Section**:
   - Compelling headline
   - Supporting text
   - Primary CTA button
   - Trust badges or guarantees

Use persuasive copywriting techniques:
- Benefit-driven language
- Specificity (numbers, outcomes)
- Emotional triggers
- Urgency/scarcity where appropriate
- Active voice

Make it scannable with clear hierarchy.`,
        // Query 2: Ad Creatives
        `Create 5 high-converting ad concepts for: "${idea}".

Target Audience: ${targetAudience}

For each ad, provide:

**Ad Concept #1** (Focus: Pain Point)
- **Platform**: Facebook/Instagram
- **Target Audience**: [specific description]
- **Headline**: [40 characters max, attention-grabbing]
- **Body Copy**: [125 characters, focuses on pain point]
- **CTA**: [button text]
- **Image Suggestion**: [detailed description for AI image generation or photo sourcing]
- **Estimated CTR**: [based on industry benchmarks]

**Ad Concept #2** (Focus: Solution/Benefit)
- **Platform**: LinkedIn
- **Target Audience**: [specific description]
- **Headline**: [40 characters max]
- **Body Copy**: [125 characters, focuses on key benefit]
- **CTA**: [button text]
- **Image Suggestion**: [description]
- **Estimated CTR**: [based on industry benchmarks]

**Ad Concept #3** (Focus: Social Proof/Trust)
- **Platform**: Facebook/Instagram
- **Target Audience**: [specific description]
- **Headline**: [40 characters max, includes testimonial or stat]
- **Body Copy**: [125 characters]
- **CTA**: [button text]
- **Image Suggestion**: [description]
- **Estimated CTR**: [based on industry benchmarks]

**Ad Concept #4** (Focus: Urgency/Offer)
- **Platform**: Google Search
- **Headline 1**: [30 characters]
- **Headline 2**: [30 characters]
- **Headline 3**: [30 characters]
- **Description**: [90 characters, includes offer/urgency]
- **CTA**: [button text]
- **Estimated CTR**: [based on industry benchmarks]

**Ad Concept #5** (Focus: Differentiation)
- **Platform**: Twitter/X or Instagram
- **Target Audience**: [specific description]
- **Tweet/Caption**: [280 characters, highlights what makes you different]
- **CTA**: [button text]
- **Image/Video Suggestion**: [description]
- **Estimated Engagement Rate**: [based on industry benchmarks]

Each ad should be ready to test immediately with clear targeting parameters.`,
        // Query 3: Brand Package
        `Design a comprehensive brand identity package for: "${idea}".

Create:

1. **Brand Name Ideas** (if needed):
   - 10 potential names with explanations
   - Domain availability considerations
   - Trademark considerations

2. **Tagline Options**:
   - 5 tagline variations (5-7 words each)
   - Explain the positioning of each

3. **Brand Positioning Statement**:
   "For [target customer] who [need/problem], [brand] is a [category] that [unique benefit]. Unlike [competitors], we [key differentiator]."

4. **Color Palette**:
   - Primary color: [Hex code + color name + psychology/reason]
   - Secondary color: [Hex code + color name + psychology/reason]
   - Accent color: [Hex code + color name + psychology/reason]
   - Neutral colors: [Hex codes]
   - Explain the color psychology and industry fit

5. **Typography**:
   - Heading font: [Google Font name + reasoning]
   - Body font: [Google Font name + reasoning]
   - Pairing explanation

6. **Brand Voice & Tone**:
   - Voice description (friendly, professional, authoritative, playful, etc.)
   - Tone guidelines (formal vs casual, technical vs simple)
   - Do's and Don'ts for messaging
   - Example phrases in brand voice

7. **Visual Style Guidelines**:
   - Imagery style (photography, illustrations, icons)
   - UI style (modern, minimalist, bold, etc.)
   - Brand personality traits (3-5 traits)

8. **Mission Statement** (1-2 sentences):
   - Why does this company exist?
   - What change do you want to create?

Make the brand memorable, differentiated, and aligned with the target audience.`,
        // Query 4: Wireframes
        `Generate detailed wireframe descriptions for: "${idea}".

Create wireframe structures for 3 key pages:

**Page 1: Landing Page**

For each section, describe:
- Section name
- Layout structure (columns, grid)
- Components included
- Content hierarchy
- Interactions/functionality

Sections:
1. **Navigation Bar**:
   - Layout: [description]
   - Components: [logo, menu items, CTA button]
   - Sticky/fixed behavior

2. **Hero Section**:
   - Layout: [full-width, 2-column, etc.]
   - Components: [headline, subheadline, CTA, hero image/visual]
   - Spacing and visual hierarchy

3. **Benefits Section**:
   - Layout: [3-column grid, etc.]
   - Components per benefit: [icon, headline, description]
   - Visual style

4. **Social Proof Section**:
   - Layout: [testimonial cards, carousel]
   - Components: [testimonial text, avatar, name/title, company logo]

5. **CTA Section**:
   - Layout: [centered, full-width]
   - Components: [headline, supporting text, form or button]

6. **Footer**:
   - Layout: [4-column grid]
   - Components: [links, social icons, copyright]

**Page 2: Pricing Page**

1. **Pricing Tiers**:
   - Layout: [3-column comparison table]
   - Components per tier: [tier name, price, features list, CTA button, badge for "popular"]
   - Toggle for monthly/annual pricing

2. **FAQ Section**:
   - Layout: [accordion or expandable sections]
   - Components: [question, answer, expand/collapse icon]

**Page 3: Signup/Onboarding Flow**

1. **Step 1: Account Creation**:
   - Layout: [centered form, progress indicator]
   - Form fields: [email, password, name]
   - Components: [social login buttons, terms checkbox, submit button]

2. **Step 2: Profile Setup** (if needed):
   - Fields based on the product

3. **Step 3: First Action/Activation**:
   - Description of first value moment

For each wireframe section, describe:
- Visual hierarchy (what's most prominent)
- Spacing and padding guidelines
- Mobile responsiveness considerations
- Any animations or transitions

These descriptions should be detailed enough to hand off to a designer or implement in code.`
    ];
    const results = [];
    for(let i = 0; i < queries.length; i++){
        console.log(`✍️ Content Agent: Query ${i + 1}/${queries.length}`);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$perplexity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryPerplexity"])(queries[i], {
            searchType: 'fast',
            streaming: false
        });
        results.push(result);
    }
    console.log('✅ Content Agent: Complete');
    return results;
}
}}),
"[project]/src/lib/parsers/utils.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Helper functions for parsing Perplexity responses
__turbopack_context__.s({
    "calculateScore": (()=>calculateScore),
    "extractDollarAmount": (()=>extractDollarAmount),
    "extractList": (()=>extractList),
    "extractNumber": (()=>extractNumber),
    "extractPercentage": (()=>extractPercentage),
    "extractSentiment": (()=>extractSentiment),
    "extractYear": (()=>extractYear)
});
function extractNumber(text, ...units) {
    const regex = new RegExp(`(\\d+\\.?\\d*)\\s*(${units.join('|')})`, 'i');
    const match = text.match(regex);
    if (!match) return 0;
    const value = parseFloat(match[1]);
    const unit = match[2].toLowerCase();
    // Convert to base unit (e.g., billions to actual number)
    if (unit.includes('billion') || unit === 'b') {
        return value * 1_000_000_000;
    } else if (unit.includes('million') || unit === 'm') {
        return value * 1_000_000;
    } else if (unit.includes('thousand') || unit === 'k') {
        return value * 1_000;
    }
    return value;
}
function extractPercentage(text) {
    const match = text.match(/(\d+\.?\d*)\s*%/);
    return match ? parseFloat(match[1]) : 0;
}
function extractYear(text) {
    const match = text.match(/20\d{2}/);
    return match ? parseInt(match[0]) : new Date().getFullYear();
}
function extractDollarAmount(text) {
    const match = text.match(/\$(\d+\.?\d*)\s*(billion|million|thousand|[BMK])?/i);
    if (!match) return 0;
    const value = parseFloat(match[1]);
    const unit = match[2]?.toLowerCase();
    if (!unit) return value;
    if (unit.includes('billion') || unit === 'b') {
        return value * 1_000_000_000;
    } else if (unit.includes('million') || unit === 'm') {
        return value * 1_000_000;
    } else if (unit.includes('thousand') || unit === 'k') {
        return value * 1_000;
    }
    return value;
}
function extractList(text, pattern) {
    const matches = text.match(pattern);
    return matches ? matches.map((m)=>m.trim()) : [];
}
function calculateScore(factors, weights) {
    let totalScore = 0;
    let totalWeight = 0;
    for (const [key, value] of Object.entries(factors)){
        const weight = weights[key] || 1;
        totalScore += value * weight;
        totalWeight += weight;
    }
    return Math.round(totalScore / totalWeight * 10) / 10;
}
function extractSentiment(text) {
    const positiveWords = [
        'great',
        'excellent',
        'amazing',
        'love',
        'perfect',
        'best',
        'fantastic'
    ];
    const negativeWords = [
        'bad',
        'terrible',
        'awful',
        'hate',
        'worst',
        'horrible',
        'disappointed'
    ];
    const lowerText = text.toLowerCase();
    const positiveCount = positiveWords.filter((word)=>lowerText.includes(word)).length;
    const negativeCount = negativeWords.filter((word)=>lowerText.includes(word)).length;
    if (positiveCount > negativeCount) return 'positive';
    if (negativeCount > positiveCount) return 'negative';
    return 'neutral';
}
}}),
"[project]/src/lib/parsers/market-parser.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseMarketResearchData": (()=>parseMarketResearchData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/parsers/utils.ts [app-route] (ecmascript)");
;
function parseMarketResearchData(results) {
    const [tamResult, revenueResult, fundingResult, timingResult] = results;
    // Parse TAM and market size
    const tamText = tamResult.content || '';
    const tam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractDollarAmount"])(tamText);
    const cagr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractPercentage"])(tamText);
    // Parse revenue model
    const revenueText = revenueResult.content || '';
    const revenueModel = extractRevenueModel(revenueText);
    const arrPotential = extractARRPotential(revenueText);
    // Parse funding activity
    const fundingText = fundingResult.content || '';
    const fundingActivity = extractFundingActivity(fundingText);
    // Parse timing factors
    const timingText = timingResult.content || '';
    const timingFactors = extractTimingFactors(timingText);
    // Calculate opportunity score
    const opportunityScore = calculateOpportunityScore({
        tam,
        cagr,
        fundingActivity: fundingActivity.length,
        timingFactors: timingFactors.length
    });
    // Calculate "Why Now" score
    const whyNowScore = Math.min(10, timingFactors.length);
    // Generate executive summary
    const executiveSummary = generateExecutiveSummary({
        tam,
        cagr,
        revenueModel,
        arrPotential,
        timingFactors
    });
    return {
        executiveSummary,
        arrPotential,
        scores: {
            opportunity: opportunityScore,
            whyNow: whyNowScore
        },
        market: {
            tam,
            cagr,
            revenueModel,
            fundingActivity,
            timingFactors
        }
    };
}
function extractRevenueModel(text) {
    const models = [
        'SaaS subscription',
        'freemium',
        'transaction fees',
        'usage-based',
        'tiered pricing'
    ];
    for (const model of models){
        if (text.toLowerCase().includes(model.toLowerCase())) {
            return model;
        }
    }
    return 'Subscription-based';
}
function extractARRPotential(text) {
    // Look for ARR projections
    const match = text.match(/\$(\d+[KkMm]?)\s*-\s*\$(\d+[KkMm]?)\s*ARR/i);
    if (match) {
        return `${match[1]}-${match[2]} ARR`;
    }
    // Default estimate based on market signals
    return '$1M-$10M ARR potential';
}
function extractFundingActivity(text) {
    const activities = [];
    // Extract funding rounds
    const fundingMatches = text.match(/\$\d+[\.\d]*[MBK]\s*(?:Series [A-F]|seed|round)/gi);
    if (fundingMatches) {
        activities.push(...fundingMatches.slice(0, 5));
    }
    return activities;
}
function extractTimingFactors(text) {
    const factors = [];
    // Look for numbered lists or bullet points
    const lines = text.split('\n');
    for (const line of lines){
        if (/^[\d\-\*]\s*\*\*/.test(line) || /^\d+\./.test(line)) {
            const factor = line.replace(/^[\d\-\*\.\s]+/, '').trim();
            if (factor.length > 20 && factor.length < 200) {
                factors.push(factor);
            }
        }
    }
    return factors.slice(0, 7);
}
function calculateOpportunityScore(data) {
    const factors = {
        marketSize: data.tam > 1_000_000_000 ? 10 : data.tam > 100_000_000 ? 7 : 4,
        growth: data.cagr > 20 ? 10 : data.cagr > 10 ? 7 : 4,
        funding: data.fundingActivity > 3 ? 10 : data.fundingActivity > 1 ? 7 : 4,
        timing: data.timingFactors > 5 ? 10 : data.timingFactors > 3 ? 7 : 4
    };
    const weights = {
        marketSize: 0.3,
        growth: 0.3,
        funding: 0.2,
        timing: 0.2
    };
    return Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateScore"])(factors, weights));
}
function generateExecutiveSummary(data) {
    const tamFormatted = data.tam > 1_000_000_000 ? `${(data.tam / 1_000_000_000).toFixed(1)}B` : `${(data.tam / 1_000_000).toFixed(0)}M`;
    return `This business idea targets a ${tamFormatted} market growing at ${data.cagr}% annually. ${data.revenueModel} revenue model with ${data.arrPotential} potential. Key timing factors include: ${data.timingFactors.slice(0, 2).join(', ')}.`;
}
}}),
"[project]/src/app/api/analyze-idea/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST),
    "maxDuration": (()=>maxDuration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agents$2f$market$2d$research$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agents/market-research.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agents$2f$competition$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agents/competition.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agents$2f$community$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agents/community.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agents$2f$trends$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agents/trends.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agents$2f$execution$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agents/execution.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agents$2f$content$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agents/content.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$market$2d$parser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/parsers/market-parser.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const maxDuration = 300; // 5 minutes for Vercel
async function POST(req) {
    try {
        const { idea } = await req.json();
        if (!idea || idea.trim().length < 10) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Please provide a valid business idea (at least 10 characters)'
            }, {
                status: 400
            });
        }
        console.log('🚀 Starting analysis for:', idea);
        // Create a TransformStream for Server-Sent Events
        const encoder = new TextEncoder();
        const stream = new TransformStream();
        const writer = stream.writable.getWriter();
        // Helper to send progress updates
        const sendUpdate = async (data)=>{
            const json = JSON.stringify(data);
            await writer.write(encoder.encode(`data: ${json}\n\n`));
        };
        // Run analysis in the background
        (async ()=>{
            try {
                // Phase 1: Run first 4 agents in parallel (they don't depend on each other)
                const [marketResults, competitionResults, communityResults, trendResults] = await Promise.all([
                    // Agent 1: Market Research
                    (async ()=>{
                        await sendUpdate({
                            agent: 'market',
                            status: 'active',
                            message: 'Analyzing market size and revenue potential...'
                        });
                        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agents$2f$market$2d$research$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runMarketResearchAgent"])(idea);
                        await sendUpdate({
                            agent: 'market',
                            status: 'complete',
                            progress: 100
                        });
                        return results;
                    })(),
                    // Agent 2: Competition
                    (async ()=>{
                        await sendUpdate({
                            agent: 'competition',
                            status: 'active',
                            message: 'Researching competitors and pain points...'
                        });
                        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agents$2f$competition$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runCompetitionAgent"])(idea);
                        await sendUpdate({
                            agent: 'competition',
                            status: 'complete',
                            progress: 100
                        });
                        return results;
                    })(),
                    // Agent 3: Community
                    (async ()=>{
                        await sendUpdate({
                            agent: 'community',
                            status: 'active',
                            message: 'Analyzing community signals across platforms...'
                        });
                        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agents$2f$community$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runCommunityAgent"])(idea);
                        await sendUpdate({
                            agent: 'community',
                            status: 'complete',
                            progress: 100
                        });
                        return results;
                    })(),
                    // Agent 4: Trends
                    (async ()=>{
                        await sendUpdate({
                            agent: 'trends',
                            status: 'active',
                            message: 'Analyzing search trends and forecasts...'
                        });
                        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agents$2f$trends$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runTrendAgent"])(idea);
                        await sendUpdate({
                            agent: 'trends',
                            status: 'complete',
                            progress: 100
                        });
                        return results;
                    })()
                ]);
                // Parse market data after all agents complete
                const marketData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parsers$2f$market$2d$parser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseMarketResearchData"])(marketResults);
                // Phase 2: Run agents 5-6 in parallel (they both need context from phase 1)
                const context = {
                    market: marketData.market,
                    competitors: competitionResults,
                    painPoints: []
                };
                const [executionResults, contentResults] = await Promise.all([
                    // Agent 5: Execution
                    (async ()=>{
                        await sendUpdate({
                            agent: 'execution',
                            status: 'active',
                            message: 'Creating execution roadmap and GTM strategy...'
                        });
                        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agents$2f$execution$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runExecutionAgent"])(idea, context);
                        await sendUpdate({
                            agent: 'execution',
                            status: 'complete',
                            progress: 100
                        });
                        return results;
                    })(),
                    // Agent 6: Content
                    (async ()=>{
                        await sendUpdate({
                            agent: 'content',
                            status: 'active',
                            message: 'Generating landing page copy and ad creatives...'
                        });
                        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agents$2f$content$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runContentAgent"])(idea, context);
                        await sendUpdate({
                            agent: 'content',
                            status: 'complete',
                            progress: 100
                        });
                        return results;
                    })()
                ]);
                // Send final report - truncate content to avoid JSON size issues
                const truncateContent = (results)=>{
                    return results.map((result)=>({
                            content: result.content?.substring(0, 1000) || ''
                        }));
                };
                // Collect all sources from each agent with aggressive truncation
                const extractSources = (results, agentName)=>{
                    const sources = [];
                    results.forEach((result, idx)=>{
                        // From searchResults - limit to first 3
                        if (result.searchResults && Array.isArray(result.searchResults)) {
                            result.searchResults.slice(0, 3).forEach((sr)=>{
                                sources.push({
                                    url: (sr.url || sr.link || '').substring(0, 200),
                                    title: (sr.title || sr.name || '').substring(0, 100),
                                    snippet: (sr.snippet || sr.description || '').substring(0, 150),
                                    agent: agentName
                                });
                            });
                        }
                        // From citations - limit to first 3
                        if (result.citations && Array.isArray(result.citations)) {
                            result.citations.slice(0, 3).forEach((citation)=>{
                                const url = typeof citation === 'string' ? citation : citation.url || '';
                                sources.push({
                                    url: url.substring(0, 200),
                                    title: (citation.title || '').substring(0, 100),
                                    snippet: (citation.snippet || '').substring(0, 150),
                                    agent: agentName
                                });
                            });
                        }
                    });
                    // Limit total sources per agent to 10
                    return sources.slice(0, 10);
                };
                const sources = {
                    market: extractSources(marketResults, 'market'),
                    competition: extractSources(competitionResults, 'competition'),
                    community: extractSources(communityResults, 'community'),
                    trends: extractSources(trendResults, 'trends'),
                    execution: extractSources(executionResults, 'execution'),
                    content: extractSources(contentResults, 'content')
                };
                const finalReport = {
                    id: Date.now().toString(),
                    idea,
                    timestamp: new Date().toISOString(),
                    ...marketData,
                    competition: truncateContent(competitionResults),
                    community: truncateContent(communityResults),
                    trends: truncateContent(trendResults),
                    execution: truncateContent(executionResults),
                    content: truncateContent(contentResults),
                    sources
                };
                await sendUpdate({
                    type: 'complete',
                    report: finalReport
                });
                await writer.close();
            } catch (error) {
                console.error('Analysis error:', error);
                await sendUpdate({
                    type: 'error',
                    error: error instanceof Error ? error.message : 'Unknown error'
                });
                await writer.close();
            }
        })();
        // Return the stream
        return new Response(stream.readable, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                Connection: 'keep-alive'
            }
        });
    } catch (error) {
        console.error('Request error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__751f802c._.js.map