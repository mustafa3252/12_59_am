import { Perplexity } from '@perplexity-ai/perplexity_ai';

const client = new Perplexity({
  apiKey: process.env.PERPLEXITY_API_KEY!,
});

export interface PerplexityQueryOptions {
  searchType: 'pro' | 'fast';
  streaming?: boolean;
}

export async function queryPerplexity(
  query: string,
  options: PerplexityQueryOptions = { searchType: 'pro', streaming: false }
) {
  try {
    const response = await client.chat.completions.create({
      model: 'sonar-pro',
      messages: [
        {
          role: 'user',
          content: query,
        },
      ],
      stream: options.streaming,
      web_search_options: {
        search_type: options.searchType,
      },
    });

    if (options.streaming) {
      // For streaming, return the async iterable
      return response;
    }

    // For non-streaming, the response is already complete
    // Cast to proper type
    const completion = response as any;

    return {
      content: completion.choices?.[0]?.message?.content || '',
      searchResults: completion.search_results || [],
      reasoningSteps: completion.reasoning_steps || [],
      citations: completion.citations || [],
    };
  } catch (error) {
    console.error('Perplexity API error:', error);
    throw error;
  }
}

export { client };
