# 12:59 AM ⚡

> **Breaking Traditional Business Logic**

12:59 AM is an illogical representation in the 24-hour time system. This acts as a metaphor for solopreneurs breaking traditional business logic and making something from nothing.

## What is 12:59 AM?

12:59 AM is an AI-powered business validation platform that takes away weeks of startup validation by deploying 6 specialized AI agents that use **Perplexity's Pro Search** and reasoning capabilities. It conducts evidence-based research across market reports, competitor websites, community platforms, and trend data — all in under 60 seconds.

### The Problem

Most entrepreneurs waste weeks or months doing market research, competitor analysis, and business planning. Traditional validation requires:
- 20-40 hours of manual research
- $5K+ in consulting fees
- Skills in market analysis and data interpretation

Or worse, they skip validation entirely and build something nobody wants.

### The Solution

Enter your business idea, and 12:59 AM instantly runs 6 parallel AI agents:

1. **Market Research Agent** - Analyzes market size, trends, and opportunities
2. **Competition Agent** - Identifies competitors, pricing, and market gaps
3. **Community Agent** - Discovers active communities and customer hangouts
4. **Trends Agent** - Tracks search volumes and growth patterns
5. **Execution Agent** - Builds 12-month roadmap and go-to-market strategy
6. **Content Agent** - Generates marketing materials and AI-ready prompts

**Result**: Comprehensive business analysis with actionable insights in 60 seconds.

---

## Key Features

- ✨ **Real-time AI Research** - Live web search via Perplexity's Sonar Pro model
- 📊 **Comprehensive Analysis** - Market size, competitors, communities, trends, execution plans
- 🎯 **Actionable Insights** - Viability scores, competitor grids, trend charts, community signals
- 🚀 **Content Ready** - Copy-paste AI prompts for ChatGPT/Midjourney to generate landing pages and ads
- ⚡ **60-Second Validation** - 6 agents working in parallel for maximum speed
- 🎨 **Beautiful UI** - Dark mode interface with glassmorphism effects and smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile

---

## Tech Stack

### Frontend
- **Next.js 15.3.5** - React framework with App Router and Turbopack
- **React 19** - Latest React with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Recharts** - Data visualization for trend charts
- **Lucide React** - Icon library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Perplexity API** - AI-powered search and reasoning
- **Server-Sent Events (SSE)** - Real-time progress streaming

### Development
- **Bun** - Fast JavaScript runtime and package manager
- **ESLint** - Code linting
- **PostCSS** - CSS transformations

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17 or higher (or **Bun** 1.0+)
- **Git** for version control
- **Perplexity API Key** - [Get one here](https://www.perplexity.ai/settings/api)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/mustafa3252/12_59_am.git
cd 12_59_am
```

### 2. Install Dependencies

Using **Bun** (recommended):
```bash
bun install
```

Or using **npm**:
```bash
npm install
```

Or using **yarn**:
```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
PERPLEXITY_API_KEY=your_api_key_here
```

> **Get your API key**: Sign up at [Perplexity AI](https://www.perplexity.ai/settings/api)

---

## Running the Application

### Development Mode

Using **Bun**:
```bash
bun dev
```

Using **npm**:
```bash
npm run dev
```

Using **yarn**:
```bash
yarn dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### Production Build

1. Build the application:
```bash
bun run build
# or
npm run build
```

2. Start the production server:
```bash
bun start
# or
npm start
```

---

## Dependencies

### Core Dependencies

- `next` ^15.3.5 - React framework
- `react` ^19.0.0 - UI library
- `react-dom` ^19.0.0 - React DOM renderer
- `typescript` ^5.0.0 - Type-safe JavaScript

### UI & Styling

- `@radix-ui/react-dialog` ^1.1.4 - Modal dialogs
- `@radix-ui/react-progress` ^1.1.1 - Progress bars
- `@radix-ui/react-scroll-area` ^1.2.2 - Scrollable areas
- `@radix-ui/react-slot` ^1.1.1 - Composition utility
- `@radix-ui/react-tabs` ^1.1.1 - Tab components
- `class-variance-authority` ^0.7.1 - Component variants
- `clsx` ^2.1.1 - Conditional classes
- `lucide-react` ^0.468.0 - Icon library
- `tailwind-merge` ^2.6.0 - Merge Tailwind classes
- `tailwindcss` ^3.4.17 - CSS framework
- `tailwindcss-animate` ^1.0.7 - Animation utilities

### Data Visualization

- `recharts` ^2.15.1 - Chart library

### Development Dependencies

- `@types/node` ^22.10.5
- `@types/react` ^19.0.6
- `@types/react-dom` ^19.0.2
- `eslint` ^9.18.0
- `eslint-config-next` ^15.3.5
- `postcss` ^8.4.49

---

## How It Works

### 1. User Input
Enter your business idea in a simple text input:
```
"AI-powered meal planning app for busy parents"
```

### 2. Parallel Agent Execution
6 AI agents start working simultaneously using Perplexity's Sonar Pro model:

```typescript
const agents = [
  { name: 'Market Research', query: 'Analyze the market for [idea]...' },
  { name: 'Competition', query: 'Identify competitors for [idea]...' },
  { name: 'Community', query: 'Find communities discussing [idea]...' },
  { name: 'Trends', query: 'Analyze search trends for [idea]...' },
  { name: 'Execution', query: 'Create roadmap for [idea]...' },
  { name: 'Content', query: 'Generate marketing content for [idea]...' }
]

await Promise.all(agents.map(agent => runAgent(agent)))
```

### 3. Real-time Progress
Watch agents complete their research with live status updates via Server-Sent Events (SSE)

### 4. Structured Results
Raw AI responses are parsed into actionable formats:
- **Market Analysis**: TAM, growth rate, opportunities
- **Competitor Grid**: Name, funding, pricing, strengths/weaknesses
- **Community Signals**: Platforms, member counts, engagement levels
- **Trend Charts**: Search volume over time with keyword data
- **Execution Roadmap**: 6-phase timeline with milestones and deliverables
- **Content Assets**: Landing page copy, ad concepts, AI prompts

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PERPLEXITY_API_KEY` | Your Perplexity API key for AI search | ✅ Yes |

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Import project in [Vercel](https://vercel.com)

3. Add environment variable:
   - `PERPLEXITY_API_KEY`: Your API key

4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mustafa3252/12_59_am)

---

## Project Structure

```
12_59_am/
├── src/
│   ├── app/
│   │   ├── api/analyze-idea/route.ts    # AI analysis endpoint
│   │   ├── globals.css                  # Global styles
│   │   ├── layout.tsx                   # Root layout
│   │   └── page.tsx                     # Home page
│   ├── components/
│   │   ├── ui/                          # shadcn/ui components
│   │   ├── HomePage.tsx                 # Landing page
│   │   ├── LoadingScreen.tsx            # Progress display
│   │   └── ResultsPage.tsx              # Results dashboard
│   ├── lib/
│   │   ├── parsers/                     # Data extraction
│   │   └── utils.ts                     # Utilities
│   └── assets/                          # Static files
├── .env.local                           # Environment vars
├── next.config.ts                       # Next.js config
├── tailwind.config.ts                   # Tailwind config
└── package.json                         # Dependencies
```

---

## Troubleshooting

### Build Errors

**Issue**: `.next` directory warnings on Vercel
```bash
# Already configured in .gitignore
/.next/
```

### API Issues

**Issue**: `PERPLEXITY_API_KEY is not defined`
```bash
# Check your .env.local file
cat .env.local
```

**Issue**: API rate limits
- Perplexity free tier: 50 requests/day
- Upgrade to Pro: Unlimited requests

---

## Performance

- **Agent Execution**: 45-75 seconds (parallel processing)
- **Total Analysis Time**: ~60 seconds
- **6x Faster**: Than sequential agent execution

---

## Why "12:59 AM"?

12:59 AM is illogical in a 24-hour system—it should be 00:59. But that's exactly the point.

The best ideas come at 12:59 AM when traditional logic doesn't apply. When you're tired enough to think differently. When constraints become creativity. When "impossible" becomes "why not?"

This tool is for the solopreneurs who:
- Start companies at midnight
- Break traditional business rules
- Make something from nothing
- Validate fast, ship faster

**Because the best time to start was 12:59 AM. The second best time is now.**

---

<div align="center">

**Built with ❤️ by solopreneurs, for solopreneurs**

⚡ From idea to action in 60 seconds ⚡

</div>
