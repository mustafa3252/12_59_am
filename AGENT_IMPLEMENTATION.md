# AI Idea Analyzer - Agent Implementation

## Overview

This application uses 6 specialized AI agents powered by Perplexity's Pro Search API to analyze business ideas comprehensively. Each agent performs deep research using multi-step reasoning, web search, and data analysis.

## Architecture

### Core Components

1. **Perplexity Client** (`lib/perplexity.ts`)
   - Handles API communication
   - Supports both streaming and non-streaming requests
   - Uses Pro Search for agentic reasoning

2. **AI Agents** (`lib/agents/`)
   - **Market Research Agent**: Analyzes TAM, revenue potential, funding activity, and timing
   - **Competition Agent**: Identifies competitors, pain points, feasibility, and market gaps
   - **Community Agent**: Analyzes Reddit, Facebook, YouTube, and startup activity
   - **Trend Agent**: Examines search volumes, emerging trends, and market forecasts
   - **Execution Agent**: Creates roadmap, GTM strategy, risk assessment, and team plan
   - **Content Agent**: Generates landing page copy, ads, brand package, and wireframes

3. **Data Parsers** (`lib/parsers/`)
   - Extract structured data from AI responses
   - Calculate scores and metrics
   - Generate executive summaries

4. **API Route** (`src/app/api/analyze-idea/route.ts`)
   - Orchestrates all agents sequentially
   - Streams progress updates in real-time
   - Returns comprehensive analysis report

5. **Frontend Components**
   - **HomePage**: Search interface
   - **LoadingScreen**: Real-time agent progress display
   - **ResultsPage**: Comprehensive analysis visualization

## How It Works

### 1. User Submits Idea
```typescript
User enters: "AI-powered meal planning app"
↓
HomePage → API Route
```

### 2. Sequential Agent Execution
```typescript
Market Research Agent (4 queries)
  ├→ TAM & market size analysis
  ├→ Revenue potential analysis
  ├→ Funding activity research
  └→ "Why now?" timing factors

Competition Agent (4 queries)
  ├→ Competitor identification
  ├→ Customer pain points
  ├→ Feasibility analysis
  └→ Market gap analysis

Community Agent (4 queries)
  ├→ Reddit analysis
  ├→ Facebook groups
  ├→ YouTube content
  └→ Startup activity

Trend Agent (4 queries)
  ├→ Search volume trends
  ├→ Emerging trends
  ├→ Historical data
  └→ Market forecasts

Execution Agent (4 queries)
  ├→ 12-month roadmap
  ├→ GTM strategy
  ├→ Risk assessment
  └→ Team strategy

Content Agent (4 queries)
  ├→ Landing page copy
  ├→ Ad creatives
  ├→ Brand package
  └→ Wireframes
```

### 3. Real-Time Progress Updates
```typescript
// Server-Sent Events stream
data: { agent: "market", status: "active", message: "..." }
data: { agent: "market", status: "complete", progress: 100 }
data: { agent: "competition", status: "active", message: "..." }
...
data: { type: "complete", report: {...} }
```

### 4. Data Parsing & Display
```typescript
Raw API Response
  ↓
Parser Functions
  ↓
Structured Data
  ↓
ResultsPage UI
```

## Key Features

### Agentic Pro Search
- Multi-step reasoning with tool calls
- Autonomous web searching
- URL content fetching
- Real-time thought streaming

### Comprehensive Analysis
- **24 total queries** (6 agents × 4 queries each)
- Market sizing and growth projections
- Competitive landscape mapping
- Community sentiment analysis
- Trend validation
- Execution planning
- Content generation

### Real-Time Feedback
- Live agent status updates
- Progress tracking per agent
- Error handling and display
- Streaming results

## Environment Variables

```bash
PERPLEXITY_API_KEY=your_api_key_here
```

## API Endpoints

### POST /api/analyze-idea
```typescript
Request:
{
  "idea": "Your business idea description"
}

Response: Server-Sent Events stream
data: { agent: "market", status: "active", ... }
data: { agent: "market", status: "complete", ... }
...
data: { type: "complete", report: {...} }
```

## Data Structures

### Agent Update
```typescript
interface AgentStatus {
  status: 'waiting' | 'active' | 'complete';
  progress: number;
  message?: string;
}
```

### Final Report
```typescript
interface Report {
  id: string;
  idea: string;
  timestamp: Date;
  executiveSummary: string;
  arrPotential: string;
  scores: {
    opportunity: number;  // 0-10
    whyNow: number;       // 0-10
  };
  market: {
    tam: number;
    cagr: number;
    revenueModel: string;
    fundingActivity: string[];
    timingFactors: string[];
  };
  competition: any[];
  community: any[];
  trends: any[];
  execution: any[];
  content: any[];
}
```

## Testing

### Manual Test
1. Start dev server: `npm run dev`
2. Navigate to http://localhost:3003
3. Enter a test idea: "AI-powered fitness coaching app"
4. Watch agents execute in real-time
5. Review comprehensive report

### Expected Results
- All 6 agents complete successfully
- Progress updates stream in real-time
- Final report displays market data, scores, and analysis
- Process takes 2-5 minutes depending on API response times

## Performance

- **Average Analysis Time**: 2-3 minutes
- **API Calls**: 24 total (4 per agent)
- **Rate Limits**: Perplexity API limits apply
- **Timeout**: 5 minutes (Vercel limit)

## Error Handling

```typescript
try {
  // Agent execution
} catch (error) {
  sendUpdate({
    type: 'error',
    error: error.message
  });
}
```

Errors are:
- Logged to console
- Displayed to user in LoadingScreen
- Preserved in state for debugging

## Future Enhancements

1. **Caching**: Store results for similar ideas
2. **Export**: PDF/JSON report generation
3. **Comparison**: Compare multiple ideas side-by-side
4. **Charts**: Visualize market growth and trends
5. **Collaboration**: Share and comment on reports
6. **Customization**: User-configurable agent queries
7. **Batch Analysis**: Analyze multiple ideas at once

## Dependencies

```json
{
  "@perplexity-ai/perplexity_ai": "latest",
  "next": "15.3.5",
  "react": "19.0.0",
  "recharts": "3.0.2",
  "lucide-react": "latest"
}
```

## File Structure

```
├── lib/
│   ├── perplexity.ts              # API client
│   ├── agents/
│   │   ├── market-research.ts     # Market analysis
│   │   ├── competition.ts         # Competition analysis
│   │   ├── community.ts           # Community signals
│   │   ├── trends.ts              # Trend analysis
│   │   ├── execution.ts           # Strategy planning
│   │   └── content.ts             # Content generation
│   └── parsers/
│       ├── utils.ts               # Parser helpers
│       └── market-parser.ts       # Data extraction
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── analyze-idea/
│   │   │       └── route.ts       # Main API endpoint
│   │   └── page.tsx               # Main app component
│   └── components/
│       ├── HomePage.tsx           # Search interface
│       ├── LoadingScreen.tsx      # Progress display
│       └── ResultsPage.tsx        # Results visualization
└── .env                           # API keys
```

## Notes

- Perplexity Pro Search provides agentic capabilities with multi-step reasoning
- Each agent makes 4 focused queries for comprehensive coverage
- Real-time streaming keeps users engaged during 2-3 minute analysis
- Parsers extract structured data from natural language responses
- Results are displayed with scores, metrics, and actionable insights

---

Built with ❤️ using Perplexity Pro Search API
