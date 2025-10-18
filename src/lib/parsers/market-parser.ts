import {
  extractDollarAmount,
  extractPercentage,
  extractList,
  calculateScore,
} from './utils';

export function parseMarketResearchData(results: any[]) {
  const [tamResult, revenueResult, fundingResult, timingResult] = results;

  // Parse TAM and market size
  const tamText = tamResult.content || '';
  const tam = extractDollarAmount(tamText);
  const cagr = extractPercentage(tamText);

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
    timingFactors: timingFactors.length,
  });

  // Calculate "Why Now" score
  const whyNowScore = Math.min(10, timingFactors.length);

  // Generate executive summary
  const executiveSummary = generateExecutiveSummary({
    tam,
    cagr,
    revenueModel,
    arrPotential,
    timingFactors,
  });

  return {
    executiveSummary,
    arrPotential,
    scores: {
      opportunity: opportunityScore,
      whyNow: whyNowScore,
    },
    market: {
      tam,
      cagr,
      revenueModel,
      fundingActivity,
      timingFactors,
    },
  };
}

function extractRevenueModel(text: string): string {
  const models = [
    'SaaS subscription',
    'freemium',
    'transaction fees',
    'usage-based',
    'tiered pricing',
  ];

  for (const model of models) {
    if (text.toLowerCase().includes(model.toLowerCase())) {
      return model;
    }
  }

  return 'Subscription-based';
}

function extractARRPotential(text: string): string {
  // Look for ARR projections
  const match = text.match(/\$(\d+[KkMm]?)\s*-\s*\$(\d+[KkMm]?)\s*ARR/i);
  if (match) {
    return `${match[1]}-${match[2]} ARR`;
  }

  // Default estimate based on market signals
  return '$1M-$10M ARR potential';
}

function extractFundingActivity(text: string): string[] {
  const activities: string[] = [];

  // Extract funding rounds
  const fundingMatches = text.match(/\$\d+[\.\d]*[MBK]\s*(?:Series [A-F]|seed|round)/gi);
  if (fundingMatches) {
    activities.push(...fundingMatches.slice(0, 5));
  }

  return activities;
}

function extractTimingFactors(text: string): string[] {
  const factors: string[] = [];

  // Look for numbered lists or bullet points
  const lines = text.split('\n');
  for (const line of lines) {
    if (/^[\d\-\*]\s*\*\*/.test(line) || /^\d+\./.test(line)) {
      const factor = line.replace(/^[\d\-\*\.\s]+/, '').trim();
      if (factor.length > 20 && factor.length < 200) {
        factors.push(factor);
      }
    }
  }

  return factors.slice(0, 7);
}

function calculateOpportunityScore(data: {
  tam: number;
  cagr: number;
  fundingActivity: number;
  timingFactors: number;
}): number {
  const factors = {
    marketSize: data.tam > 1_000_000_000 ? 10 : data.tam > 100_000_000 ? 7 : 4,
    growth: data.cagr > 20 ? 10 : data.cagr > 10 ? 7 : 4,
    funding: data.fundingActivity > 3 ? 10 : data.fundingActivity > 1 ? 7 : 4,
    timing: data.timingFactors > 5 ? 10 : data.timingFactors > 3 ? 7 : 4,
  };

  const weights = {
    marketSize: 0.3,
    growth: 0.3,
    funding: 0.2,
    timing: 0.2,
  };

  return Math.round(calculateScore(factors, weights));
}

function generateExecutiveSummary(data: any): string {
  const tamFormatted =
    data.tam > 1_000_000_000
      ? `${(data.tam / 1_000_000_000).toFixed(1)}B`
      : `${(data.tam / 1_000_000).toFixed(0)}M`;

  return `This business idea targets a ${tamFormatted} market growing at ${data.cagr}% annually. ${
    data.revenueModel
  } revenue model with ${data.arrPotential} potential. Key timing factors include: ${data.timingFactors
    .slice(0, 2)
    .join(', ')}.`;
}
