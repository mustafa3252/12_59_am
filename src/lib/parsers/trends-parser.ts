export interface TrendKeyword {
  keyword: string;
  volume?: string;
  growth?: string;
}

export interface TrendDataPoint {
  date: string;
  value: number;
  keyword?: string;
}

export interface ParsedTrendsData {
  keywords: TrendKeyword[];
  dataPoints: TrendDataPoint[];
  overallGrowth: string;
  forecast?: string;
  seasonality?: string;
  insights: string[];
}

export function parseTrendsData(results: any[]): ParsedTrendsData {
  const keywords: TrendKeyword[] = [];
  const dataPoints: TrendDataPoint[] = [];
  const insights: string[] = [];
  let overallGrowth = 'N/A';
  let forecast = '';
  let seasonality = '';

  // Query 0: Search Keywords and Volumes
  if (results[0]?.content) {
    const content = results[0].content;

    // Extract keywords with volumes
    const keywordMatches = content.matchAll(/['"]([^'"]+?)['"][^\d]*?([\d,]+)\s*(?:searches?|volume|\/mo)/gi);
    for (const match of keywordMatches) {
      keywords.push({
        keyword: match[1].trim(),
        volume: match[2].replace(/,/g, '')
      });
    }

    // Alternative pattern: "keyword - 12,400 searches"
    const altKeywordMatches = content.matchAll(/(?:keyword|term)[:\s]+['"]?([^'":\n]+?)['"]?\s*[-–]\s*([\d,]+[KMB]?)/gi);
    for (const match of altKeywordMatches) {
      if (!keywords.find(k => k.keyword === match[1].trim())) {
        keywords.push({
          keyword: match[1].trim(),
          volume: match[2].replace(/,/g, '')
        });
      }
    }

    // Extract monthly data points from content like "Jan: 12,400" or "January 2024: 15,200"
    const monthDataMatches = content.matchAll(/(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s*(?:\d{4})?\s*[:\s]\s*([\d,]+)/gi);
    for (const match of monthDataMatches) {
      dataPoints.push({
        date: match[0].split(':')[0].trim(),
        value: parseInt(match[1].replace(/,/g, ''))
      });
    }
  }

  // Query 1: Growth Trends
  if (results[1]?.content) {
    const content = results[1].content;

    // Extract growth percentage
    const growthMatch = content.match(/(?:growth|increase|rise)[^\d]*?([\d.]+)%/i);
    if (growthMatch) {
      overallGrowth = `${growthMatch[1]}%`;
    }

    // Extract year-over-year growth
    const yoyMatch = content.match(/(?:year[- ]over[- ]year|YoY)[^\d]*?([\d.]+)%/i);
    if (yoyMatch) {
      overallGrowth = `${yoyMatch[1]}% YoY`;
    }

    // Extract growth insights
    const growthInsightMatch = content.match(/(?:trend|growth|momentum)[:\s]+([^.]+\.)/i);
    if (growthInsightMatch) {
      insights.push(growthInsightMatch[1].trim());
    }

    // Add keyword growth data to keywords array
    const keywordGrowthMatches = content.matchAll(/['"]([^'"]+?)['"][^\d]*?([\d.]+)%\s*(?:growth|increase)/gi);
    for (const match of keywordGrowthMatches) {
      const existing = keywords.find(k => k.keyword === match[1].trim());
      if (existing) {
        existing.growth = `${match[2]}%`;
      } else {
        keywords.push({
          keyword: match[1].trim(),
          growth: `${match[2]}%`
        });
      }
    }
  }

  // Query 2: Historical Data
  if (results[2]?.content) {
    const content = results[2].content;

    // Extract historical data points (quarters, years)
    const quarterMatches = content.matchAll(/(?:Q[1-4]\s*(?:\d{4})|(?:20\d{2}))[^\d]*?([\d,]+[KMB]?)/gi);
    for (const match of quarterMatches) {
      dataPoints.push({
        date: match[0].split(/[\s:]/)[0],
        value: parseVolumeString(match[1])
      });
    }

    // Extract seasonality info
    const seasonalityMatch = content.match(/seasonality[:\s]+([^.]+\.)/i);
    if (seasonalityMatch) {
      seasonality = seasonalityMatch[1].trim();
    }
  }

  // Query 3: Future Forecasts
  if (results[3]?.content) {
    const content = results[3].content;

    // Extract forecast
    const forecastMatch = content.match(/(?:forecast|projected?|expected?)[^\d]*?([\d.]+[KMB]?)\s*(?:by|in)\s*(\d{4})/i);
    if (forecastMatch) {
      forecast = `${forecastMatch[1]} by ${forecastMatch[2]}`;
    }

    // Extract forecast growth rate
    const forecastGrowthMatch = content.match(/(?:projected|forecasted|expected)\s*(?:growth|CAGR)[^\d]*?([\d.]+)%/i);
    if (forecastGrowthMatch && !overallGrowth.includes('%')) {
      overallGrowth = `${forecastGrowthMatch[1]}% (projected)`;
    }

    // Extract trending topics
    const trendingMatch = content.match(/trending[:\s]+([^.]+\.)/i);
    if (trendingMatch) {
      insights.push(`Trending: ${trendingMatch[1].trim()}`);
    }
  }

  // Sort keywords by volume (descending)
  keywords.sort((a, b) => {
    const volA = parseVolumeString(a.volume || '0');
    const volB = parseVolumeString(b.volume || '0');
    return volB - volA;
  });

  // Sort data points by date
  dataPoints.sort((a, b) => {
    // Simple date comparison - can be enhanced
    return a.date.localeCompare(b.date);
  });

  return {
    keywords: keywords.slice(0, 10), // Top 10 keywords
    dataPoints: dataPoints.slice(0, 12), // Max 12 data points
    overallGrowth,
    forecast,
    seasonality,
    insights: insights.slice(0, 5)
  };
}

function parseVolumeString(str: string): number {
  const num = parseFloat(str.replace(/,/g, ''));
  if (str.includes('M')) return num * 1000000;
  if (str.includes('K')) return num * 1000;
  if (str.includes('B')) return num * 1000000000;
  return num;
}
