export interface LandingPageSection {
  type: 'hero' | 'problem' | 'solution' | 'benefits' | 'features' | 'social-proof' | 'pricing' | 'faq' | 'cta';
  headline?: string;
  subheadline?: string;
  content: string;
  items?: string[];
}

export interface AdConcept {
  platform: string;
  headline: string;
  body: string;
  cta: string;
  targeting?: string;
  imageDescription?: string;
  midjourney_prompt?: string;
}

export interface BrandPackage {
  colors: {
    primary: string;
    secondary?: string;
    accent?: string;
  };
  typography: {
    heading?: string;
    body?: string;
  };
  voice: string;
  positioning: string;
  mission?: string;
}

export interface Wireframe {
  page: string;
  sections: string[];
  components: string[];
  interactions: string[];
}

export interface ParsedContentData {
  landingPage: LandingPageSection[];
  ads: AdConcept[];
  brand: BrandPackage;
  wireframes: Wireframe[];
  aiPrompts: {
    landingPagePrompt: string;
    adPrompts: string[];
    brandPrompt: string;
  };
}

export function parseContentData(results: any[]): ParsedContentData {
  const landingPage: LandingPageSection[] = [];
  const ads: AdConcept[] = [];
  let brand: BrandPackage = {
    colors: { primary: '#000000' },
    typography: {},
    voice: '',
    positioning: ''
  };
  const wireframes: Wireframe[] = [];

  // Query 0: Landing Page Copy
  if (results[0]?.content) {
    const content = results[0].content;

    // Extract Hero Section
    const heroHeadline = extractFirstMatch(content, /(?:Hero\s*)?Headline[:\s]+['"]?([^'"\n]+)/i);
    const heroSubheadline = extractFirstMatch(content, /Subheadline[:\s]+['"]?([^'"\n]+)/i);
    if (heroHeadline) {
      landingPage.push({
        type: 'hero',
        headline: heroHeadline,
        subheadline: heroSubheadline || '',
        content: `${heroHeadline}\n${heroSubheadline || ''}`
      });
    }

    // Extract Problem Section
    const problemSection = extractSection(content, /Problem[:\s]/i, 300);
    if (problemSection) {
      landingPage.push({
        type: 'problem',
        content: problemSection,
        items: extractListItems(problemSection)
      });
    }

    // Extract Solution/Benefits Section
    const benefitsSection = extractSection(content, /(?:Benefits?|Solution)[:\s]/i, 400);
    if (benefitsSection) {
      landingPage.push({
        type: 'benefits',
        content: benefitsSection,
        items: extractListItems(benefitsSection)
      });
    }

    // Extract Features Section
    const featuresSection = extractSection(content, /Features?[:\s]/i, 400);
    if (featuresSection) {
      landingPage.push({
        type: 'features',
        content: featuresSection,
        items: extractListItems(featuresSection)
      });
    }

    // Extract FAQ Section
    const faqSection = extractSection(content, /FAQ|Frequently Asked/i, 500);
    if (faqSection) {
      landingPage.push({
        type: 'faq',
        content: faqSection,
        items: extractFAQs(faqSection)
      });
    }

    // Extract CTA
    const ctaMatch = extractFirstMatch(content, /(?:CTA|Call[- ]to[- ]Action)[:\s]+['"]?([^'"\n]+)/i);
    if (ctaMatch) {
      landingPage.push({
        type: 'cta',
        content: ctaMatch
      });
    }
  }

  // Query 1: Ad Concepts
  if (results[1]?.content) {
    const content = results[1].content;

    // Extract individual ad concepts
    const adMatches = content.matchAll(/(?:Ad\s*Concept\s*#?\d+|Platform)[:\s]+(Facebook|Instagram|LinkedIn|Google|Twitter|TikTok)[^\n]*/gi);
    for (const match of adMatches) {
      const platform = match[1];
      const adSection = content.substring(match.index, Math.min(match.index! + 600, content.length));

      const headline = extractFirstMatch(adSection, /Headline[:\s]+['"]?([^'"\n]+)/i);
      const body = extractFirstMatch(adSection, /Body[:\s]+['"]?([^'"\n]+)/i);
      const cta = extractFirstMatch(adSection, /CTA[:\s]+['"]?([^'"\n]+)/i);
      const targeting = extractFirstMatch(adSection, /Target(?:ing)?(?:\s+Audience)?[:\s]+([^.\n]+)/i);
      const imageDesc = extractFirstMatch(adSection, /Image[:\s]+([^\n]+)/i);

      if (headline && body) {
        ads.push({
          platform,
          headline,
          body,
          cta: cta || 'Learn More',
          targeting,
          imageDescription: imageDesc,
          midjourney_prompt: imageDesc ? generateMidjourneyPrompt(imageDesc, platform) : undefined
        });
      }
    }
  }

  // Query 2: Brand Package
  if (results[2]?.content) {
    const content = results[2].content;

    // Extract colors
    const primaryColor = extractFirstMatch(content, /Primary\s*Color[:\s]+([#A-F0-9]{6,7})/i);
    const secondaryColor = extractFirstMatch(content, /Secondary\s*Color[:\s]+([#A-F0-9]{6,7})/i);
    const accentColor = extractFirstMatch(content, /Accent\s*Color[:\s]+([#A-F0-9]{6,7})/i);

    // Alternative: "Color: #4CAF50 (Green - description)"
    const colorMatch = content.match(/Color[:\s]+([#A-F0-9]{6,7})/i);

    // Extract typography
    const headingFont = extractFirstMatch(content, /(?:Heading|Primary)\s*(?:Font|Typography)[:\s]+([^\n(]+)/i);
    const bodyFont = extractFirstMatch(content, /(?:Body|Secondary)\s*(?:Font|Typography)[:\s]+([^\n(]+)/i);

    // Extract brand voice
    const voiceSection = extractSection(content, /(?:Brand\s*)?Voice[:\s]/i, 200);
    const positioningSection = extractSection(content, /Positioning[:\s]/i, 200);
    const missionSection = extractSection(content, /Mission[:\s]/i, 200);

    brand = {
      colors: {
        primary: primaryColor || colorMatch?.[1] || '#3B82F6',
        secondary: secondaryColor,
        accent: accentColor
      },
      typography: {
        heading: headingFont?.trim(),
        body: bodyFont?.trim()
      },
      voice: voiceSection || 'Professional, friendly, and approachable',
      positioning: positioningSection || '',
      mission: missionSection
    };
  }

  // Query 3: Wireframes
  if (results[3]?.content) {
    const content = results[3].content;

    // Extract wireframe for each page type
    const pageTypes = ['Landing', 'Pricing', 'Signup', 'Dashboard', 'Home'];

    for (const pageType of pageTypes) {
      const pageSection = extractSection(content, new RegExp(`${pageType}\\s*Page[:\s]`, 'i'), 600);
      if (pageSection) {
        wireframes.push({
          page: pageType,
          sections: extractListItems(pageSection, /Sections?[:\s]/i),
          components: extractListItems(pageSection, /Components?[:\s]/i),
          interactions: extractListItems(pageSection, /Interactions?[:\s]/i)
        });
      }
    }
  }

  // Generate AI Prompts
  const aiPrompts = generateAIPrompts(landingPage, ads, brand);

  return {
    landingPage,
    ads: ads.slice(0, 5),
    brand,
    wireframes,
    aiPrompts
  };
}

// Helper: Extract first match from regex
function extractFirstMatch(text: string, pattern: RegExp): string | undefined {
  const match = text.match(pattern);
  return match?.[1]?.trim().substring(0, 200);
}

// Helper: Extract a section after a header
function extractSection(text: string, headerPattern: RegExp, maxLength: number = 300): string | undefined {
  const match = text.match(headerPattern);
  if (!match) return undefined;

  const startIndex = match.index! + match[0].length;
  const section = text.substring(startIndex, Math.min(startIndex + maxLength, text.length));

  // Get until next major section (double newline or next header)
  const endMatch = section.match(/\n\n|(?:\n[A-Z][a-z]+:)/);
  const endIndex = endMatch ? endMatch.index : section.length;

  return section.substring(0, endIndex).trim();
}

// Helper: Extract list items (bullets or numbered)
function extractListItems(text: string, headerPattern?: RegExp): string[] {
  const items: string[] = [];
  let searchText = text;

  if (headerPattern) {
    const match = text.match(headerPattern);
    if (match) {
      searchText = text.substring(match.index! + match[0].length, Math.min(match.index! + 600, text.length));
    } else {
      return items;
    }
  }

  const listMatches = searchText.matchAll(/(?:^|\n)\s*(?:[-*•]|\d+\.)\s+([^\n]+)/g);
  for (const match of listMatches) {
    items.push(match[1].trim());
  }

  return items.slice(0, 10);
}

// Helper: Extract FAQ items
function extractFAQs(text: string): string[] {
  const faqs: string[] = [];

  // Pattern: "Q: question" or "Question: text"
  const faqMatches = text.matchAll(/(?:Q(?:uestion)?|FAQ)\s*\d*[:\s]+([^?\n]+\?)/gi);
  for (const match of faqMatches) {
    faqs.push(match[1].trim());
  }

  return faqs.slice(0, 6);
}

// Helper: Generate Midjourney prompt
function generateMidjourneyPrompt(imageDesc: string, platform: string): string {
  return `/imagine ${imageDesc}, professional ${platform} ad creative, high quality, modern aesthetic, clean composition, vibrant colors --ar 1:1 --v 6`;
}

// Helper: Generate AI prompts for users to use with ChatGPT/Claude/etc
function generateAIPrompts(
  landingPage: LandingPageSection[],
  ads: AdConcept[],
  brand: BrandPackage
): { landingPagePrompt: string; adPrompts: string[]; brandPrompt: string } {

  // Landing Page Prompt
  const heroSection = landingPage.find(s => s.type === 'hero');
  const benefitsSection = landingPage.find(s => s.type === 'benefits');
  const featuresSection = landingPage.find(s => s.type === 'features');

  const landingPagePrompt = `Create a modern, responsive landing page with the following structure:

HERO SECTION:
Headline: ${heroSection?.headline || '[Your headline here]'}
Subheadline: ${heroSection?.subheadline || '[Your subheadline here]'}

BENEFITS:
${benefitsSection?.items?.map(item => `• ${item}`).join('\n') || '[List key benefits]'}

FEATURES:
${featuresSection?.items?.map(item => `• ${item}`).join('\n') || '[List main features]'}

DESIGN STYLE:
- Color scheme: ${brand.colors.primary} (primary)${brand.colors.secondary ? `, ${brand.colors.secondary} (secondary)` : ''}
- Typography: ${brand.typography.heading || 'Modern sans-serif'} for headings
- Brand voice: ${brand.voice}

Please create the HTML/CSS code for this landing page with a modern, clean design.`;

  // Ad Prompts
  const adPrompts = ads.map((ad, idx) => `AD CONCEPT #${idx + 1} - ${ad.platform}

Headline: "${ad.headline}"
Body Copy: "${ad.body}"
Call-to-Action: "${ad.cta}"
Target Audience: ${ad.targeting || 'Target audience based on product'}

IMAGE GENERATION PROMPT (for Midjourney/DALL-E):
${ad.midjourney_prompt || `Create a ${ad.platform} ad image: ${ad.imageDescription || 'eye-catching visual'}`}

Use this to create ad creative in Canva or generate the image using AI image generators.`);

  // Brand Prompt
  const brandPrompt = `BRAND PACKAGE SUMMARY

COLORS:
Primary: ${brand.colors.primary}
${brand.colors.secondary ? `Secondary: ${brand.colors.secondary}` : ''}
${brand.colors.accent ? `Accent: ${brand.colors.accent}` : ''}

TYPOGRAPHY:
${brand.typography.heading ? `Headings: ${brand.typography.heading}` : 'Use a bold, modern sans-serif'}
${brand.typography.body ? `Body: ${brand.typography.body}` : 'Use a clean, readable sans-serif'}

BRAND VOICE: ${brand.voice}

POSITIONING: ${brand.positioning}

${brand.mission ? `MISSION: ${brand.mission}` : ''}

Use this brand package as a foundation for all your marketing materials, website design, and communication.`;

  return {
    landingPagePrompt,
    adPrompts,
    brandPrompt
  };
}
