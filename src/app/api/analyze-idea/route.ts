import { NextRequest, NextResponse } from 'next/server';
import { runMarketResearchAgent } from '@/lib/agents/market-research';
import { runCompetitionAgent } from '@/lib/agents/competition';
import { runCommunityAgent } from '@/lib/agents/community';
import { runTrendAgent } from '@/lib/agents/trends';
import { runExecutionAgent } from '@/lib/agents/execution';
import { runContentAgent} from '@/lib/agents/content';
import { parseMarketResearchData } from '@/lib/parsers/market-parser';

export const maxDuration = 300; // 5 minutes for Vercel

export async function POST(req: NextRequest) {
  try {
    const { idea } = await req.json();

    if (!idea || idea.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please provide a valid business idea (at least 10 characters)' },
        { status: 400 }
      );
    }

    console.log('🚀 Starting analysis for:', idea);

    // Create a TransformStream for Server-Sent Events
    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    // Helper to send progress updates
    const sendUpdate = async (data: any) => {
      const json = JSON.stringify(data);
      await writer.write(encoder.encode(`data: ${json}\n\n`));
    };

    // Run analysis in the background
    (async () => {
      try {
        // Phase 1: Run first 4 agents in parallel (they don't depend on each other)
        const [marketResults, competitionResults, communityResults, trendResults] = await Promise.all([
          // Agent 1: Market Research
          (async () => {
            await sendUpdate({
              agent: 'market',
              status: 'active',
              message: 'Analyzing market size and revenue potential...',
            });
            const results = await runMarketResearchAgent(idea);
            await sendUpdate({
              agent: 'market',
              status: 'complete',
              progress: 100,
            });
            return results;
          })(),

          // Agent 2: Competition
          (async () => {
            await sendUpdate({
              agent: 'competition',
              status: 'active',
              message: 'Researching competitors and pain points...',
            });
            const results = await runCompetitionAgent(idea);
            await sendUpdate({
              agent: 'competition',
              status: 'complete',
              progress: 100,
            });
            return results;
          })(),

          // Agent 3: Community
          (async () => {
            await sendUpdate({
              agent: 'community',
              status: 'active',
              message: 'Analyzing community signals across platforms...',
            });
            const results = await runCommunityAgent(idea);
            await sendUpdate({
              agent: 'community',
              status: 'complete',
              progress: 100,
            });
            return results;
          })(),

          // Agent 4: Trends
          (async () => {
            await sendUpdate({
              agent: 'trends',
              status: 'active',
              message: 'Analyzing search trends and forecasts...',
            });
            const results = await runTrendAgent(idea);
            await sendUpdate({
              agent: 'trends',
              status: 'complete',
              progress: 100,
            });
            return results;
          })(),
        ]);

        // Parse market data after all agents complete
        const marketData = parseMarketResearchData(marketResults);

        // Phase 2: Run agents 5-6 in parallel (they both need context from phase 1)
        const context = {
          market: marketData.market,
          competitors: competitionResults,
          painPoints: [],
        };

        const [executionResults, contentResults] = await Promise.all([
          // Agent 5: Execution
          (async () => {
            await sendUpdate({
              agent: 'execution',
              status: 'active',
              message: 'Creating execution roadmap and GTM strategy...',
            });
            const results = await runExecutionAgent(idea, context);
            await sendUpdate({
              agent: 'execution',
              status: 'complete',
              progress: 100,
            });
            return results;
          })(),

          // Agent 6: Content
          (async () => {
            await sendUpdate({
              agent: 'content',
              status: 'active',
              message: 'Generating landing page copy and ad creatives...',
            });
            const results = await runContentAgent(idea, context);
            await sendUpdate({
              agent: 'content',
              status: 'complete',
              progress: 100,
            });
            return results;
          })(),
        ]);

        // Send final report - truncate content to avoid JSON size issues
        const truncateContent = (results: any[]) => {
          return results.map(result => ({
            content: result.content?.substring(0, 1000) || '', // Limit to 1000 chars
          }));
        };

        // Collect all sources from each agent with aggressive truncation
        const extractSources = (results: any[], agentName: string) => {
          const sources: any[] = [];
          results.forEach((result, idx) => {
            // From searchResults - limit to first 3
            if (result.searchResults && Array.isArray(result.searchResults)) {
              result.searchResults.slice(0, 3).forEach((sr: any) => {
                sources.push({
                  url: (sr.url || sr.link || '').substring(0, 200),
                  title: (sr.title || sr.name || '').substring(0, 100),
                  snippet: (sr.snippet || sr.description || '').substring(0, 150),
                  agent: agentName,
                });
              });
            }
            // From citations - limit to first 3
            if (result.citations && Array.isArray(result.citations)) {
              result.citations.slice(0, 3).forEach((citation: any) => {
                const url = typeof citation === 'string' ? citation : (citation.url || '');
                sources.push({
                  url: url.substring(0, 200),
                  title: (citation.title || '').substring(0, 100),
                  snippet: (citation.snippet || '').substring(0, 150),
                  agent: agentName,
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
          content: extractSources(contentResults, 'content'),
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
          sources,
        };

        await sendUpdate({
          type: 'complete',
          report: finalReport,
        });

        await writer.close();
      } catch (error) {
        console.error('Analysis error:', error);
        await sendUpdate({
          type: 'error',
          error: error instanceof Error ? error.message : 'Unknown error',
        });
        await writer.close();
      }
    })();

    // Return the stream
    return new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Request error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
