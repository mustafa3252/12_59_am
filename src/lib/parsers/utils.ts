// Helper functions for parsing Perplexity responses

export function extractNumber(text: string, ...units: string[]): number {
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

export function extractPercentage(text: string): number {
  const match = text.match(/(\d+\.?\d*)\s*%/);
  return match ? parseFloat(match[1]) : 0;
}

export function extractYear(text: string): number {
  const match = text.match(/20\d{2}/);
  return match ? parseInt(match[0]) : new Date().getFullYear();
}

export function extractDollarAmount(text: string): number {
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

export function extractList(text: string, pattern: RegExp): string[] {
  const matches = text.match(pattern);
  return matches ? matches.map(m => m.trim()) : [];
}

export function calculateScore(factors: Record<string, number>, weights: Record<string, number>): number {
  let totalScore = 0;
  let totalWeight = 0;

  for (const [key, value] of Object.entries(factors)) {
    const weight = weights[key] || 1;
    totalScore += value * weight;
    totalWeight += weight;
  }

  return Math.round((totalScore / totalWeight) * 10) / 10;
}

export function extractSentiment(text: string): 'positive' | 'negative' | 'neutral' {
  const positiveWords = ['great', 'excellent', 'amazing', 'love', 'perfect', 'best', 'fantastic'];
  const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'worst', 'horrible', 'disappointed'];

  const lowerText = text.toLowerCase();
  const positiveCount = positiveWords.filter(word => lowerText.includes(word)).length;
  const negativeCount = negativeWords.filter(word => lowerText.includes(word)).length;

  if (positiveCount > negativeCount) return 'positive';
  if (negativeCount > positiveCount) return 'negative';
  return 'neutral';
}
