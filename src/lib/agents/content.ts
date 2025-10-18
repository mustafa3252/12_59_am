import { queryPerplexity } from '../perplexity';

export async function runContentAgent(idea: string, context: any) {
  console.log('✍️ Content Agent: Starting...');

  const targetAudience = context.market?.targetAudience || 'business owners';
  const painPoints = context.painPoints?.map((p: any) => p.description).slice(0, 3).join(', ') || 'key challenges';

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

These descriptions should be detailed enough to hand off to a designer or implement in code.`,
  ];

  const results = [];

  for (let i = 0; i < queries.length; i++) {
    console.log(`✍️ Content Agent: Query ${i + 1}/${queries.length}`);
    const result = await queryPerplexity(queries[i], {
      searchType: 'fast', // Use fast for creative generation
      streaming: false,
    });
    results.push(result);
  }

  console.log('✅ Content Agent: Complete');
  return results;
}
