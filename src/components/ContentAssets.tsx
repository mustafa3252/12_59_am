"use client"

import { useState } from "react"
import { Copy, Check, FileText, Megaphone, Palette, Layout, Sparkles } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface LandingPageSection {
  type: string;
  headline?: string;
  subheadline?: string;
  content: string;
  items?: string[];
}

interface AdConcept {
  platform: string;
  headline: string;
  body: string;
  cta: string;
  targeting?: string;
  imageDescription?: string;
  midjourney_prompt?: string;
}

interface BrandPackage {
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

interface Wireframe {
  page: string;
  sections: string[];
  components: string[];
  interactions: string[];
}

interface ContentAssetsProps {
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

export default function ContentAssets({
  landingPage,
  ads,
  brand,
  wireframes,
  aiPrompts
}: ContentAssetsProps) {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(id);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const CopyButton = ({ text, id }: { text: string; id: string }) => (
    <Button
      variant="outline"
      size="sm"
      onClick={() => copyToClipboard(text, id)}
      className="gap-2"
    >
      {copiedIndex === id ? (
        <>
          <Check className="h-4 w-4 text-green-500" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy
        </>
      )}
    </Button>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-primary" />
            Content & Marketing Assets
          </h2>
          <p className="text-muted-foreground mt-2">
            Ready-to-use copy and AI prompts for your business
          </p>
        </div>
      </div>

      <Tabs defaultValue="landing" className="w-full">
        <TabsList className="grid grid-cols-4 gap-2 bg-muted/50 p-2 h-auto">
          <TabsTrigger value="landing" className="flex flex-col items-center gap-2 py-3">
            <FileText className="h-5 w-5" />
            <span className="text-xs">Landing Page</span>
          </TabsTrigger>
          <TabsTrigger value="ads" className="flex flex-col items-center gap-2 py-3">
            <Megaphone className="h-5 w-5" />
            <span className="text-xs">Ad Creatives</span>
          </TabsTrigger>
          <TabsTrigger value="brand" className="flex flex-col items-center gap-2 py-3">
            <Palette className="h-5 w-5" />
            <span className="text-xs">Brand Package</span>
          </TabsTrigger>
          <TabsTrigger value="wireframes" className="flex flex-col items-center gap-2 py-3">
            <Layout className="h-5 w-5" />
            <span className="text-xs">Wireframes</span>
          </TabsTrigger>
        </TabsList>

        {/* Landing Page Tab */}
        <TabsContent value="landing" className="mt-6 space-y-6">
          <div className="glass-card backdrop-blur-md bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl border border-primary/30 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  AI Prompt for Landing Page
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Use this prompt with ChatGPT, Claude, or v0.dev to generate your landing page
                </p>
              </div>
              <CopyButton text={aiPrompts.landingPagePrompt} id="landing-prompt" />
            </div>

            <ScrollArea className="h-[300px] w-full">
              <pre className="text-sm text-foreground whitespace-pre-wrap font-mono bg-black/20 p-4 rounded-lg border border-primary/20">
                {aiPrompts.landingPagePrompt}
              </pre>
            </ScrollArea>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Landing Page Sections</h3>

            {landingPage.map((section, idx) => (
              <div
                key={idx}
                className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <Badge variant="outline" className="mb-2">{section.type}</Badge>
                    {section.headline && (
                      <h4 className="text-lg font-bold text-foreground">{section.headline}</h4>
                    )}
                    {section.subheadline && (
                      <p className="text-sm text-muted-foreground mt-1">{section.subheadline}</p>
                    )}
                  </div>
                  <CopyButton text={section.content} id={`section-${idx}`} />
                </div>

                {section.items && section.items.length > 0 ? (
                  <ul className="space-y-2 mt-3">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-foreground mt-3 leading-relaxed">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Ads Tab */}
        <TabsContent value="ads" className="mt-6 space-y-6">
          {ads.map((ad, idx) => (
            <div key={idx} className="space-y-4">
              <div className="glass-card backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-purple-400" />
                      AI Prompt for {ad.platform} Ad #{idx + 1}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Use this with ChatGPT or Canva to create your ad creative
                    </p>
                  </div>
                  <CopyButton text={aiPrompts.adPrompts[idx] || ''} id={`ad-prompt-${idx}`} />
                </div>

                <ScrollArea className="h-[200px] w-full">
                  <pre className="text-sm text-foreground whitespace-pre-wrap font-mono bg-black/20 p-4 rounded-lg border border-purple-500/20">
                    {aiPrompts.adPrompts[idx]}
                  </pre>
                </ScrollArea>
              </div>

              <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                      {ad.platform}
                    </Badge>
                    <h4 className="text-lg font-semibold">Ad Concept #{idx + 1}</h4>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">HEADLINE</p>
                    <p className="text-base font-bold text-foreground">{ad.headline}</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">BODY COPY</p>
                    <p className="text-sm text-foreground leading-relaxed">{ad.body}</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">CALL-TO-ACTION</p>
                    <Badge variant="secondary" className="font-semibold">{ad.cta}</Badge>
                  </div>

                  {ad.targeting && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">TARGET AUDIENCE</p>
                      <p className="text-sm text-foreground">{ad.targeting}</p>
                    </div>
                  )}

                  {ad.midjourney_prompt && (
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-xs font-medium text-muted-foreground">MIDJOURNEY PROMPT</p>
                        <CopyButton text={ad.midjourney_prompt} id={`mj-${idx}`} />
                      </div>
                      <pre className="text-xs text-foreground whitespace-pre-wrap font-mono bg-black/20 p-3 rounded-lg border border-primary/20">
                        {ad.midjourney_prompt}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </TabsContent>

        {/* Brand Tab */}
        <TabsContent value="brand" className="mt-6 space-y-6">
          <div className="glass-card backdrop-blur-md bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-400" />
                  Complete Brand Package
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Use this as your brand foundation for all materials
                </p>
              </div>
              <CopyButton text={aiPrompts.brandPrompt} id="brand-prompt" />
            </div>

            <ScrollArea className="h-[200px] w-full">
              <pre className="text-sm text-foreground whitespace-pre-wrap font-mono bg-black/20 p-4 rounded-lg border border-amber-500/20">
                {aiPrompts.brandPrompt}
              </pre>
            </ScrollArea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Colors */}
            <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5">
              <h4 className="text-lg font-semibold mb-4">Color Palette</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className="h-12 w-12 rounded-lg border border-border shadow-lg"
                    style={{ backgroundColor: brand.colors.primary }}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Primary</p>
                    <p className="text-xs text-muted-foreground font-mono">{brand.colors.primary}</p>
                  </div>
                </div>
                {brand.colors.secondary && (
                  <div className="flex items-center gap-3">
                    <div
                      className="h-12 w-12 rounded-lg border border-border shadow-lg"
                      style={{ backgroundColor: brand.colors.secondary }}
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">Secondary</p>
                      <p className="text-xs text-muted-foreground font-mono">{brand.colors.secondary}</p>
                    </div>
                  </div>
                )}
                {brand.colors.accent && (
                  <div className="flex items-center gap-3">
                    <div
                      className="h-12 w-12 rounded-lg border border-border shadow-lg"
                      style={{ backgroundColor: brand.colors.accent }}
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">Accent</p>
                      <p className="text-xs text-muted-foreground font-mono">{brand.colors.accent}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Typography */}
            <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5">
              <h4 className="text-lg font-semibold mb-4">Typography</h4>
              <div className="space-y-4">
                {brand.typography.heading && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Headings</p>
                    <p className="text-base font-bold text-foreground">{brand.typography.heading}</p>
                  </div>
                )}
                {brand.typography.body && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Body Text</p>
                    <p className="text-base text-foreground">{brand.typography.body}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5">
            <h4 className="text-lg font-semibold mb-4">Brand Voice & Positioning</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Voice</p>
                <p className="text-base text-foreground leading-relaxed">{brand.voice}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Positioning</p>
                <p className="text-base text-foreground leading-relaxed">{brand.positioning}</p>
              </div>
              {brand.mission && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Mission</p>
                  <p className="text-base text-foreground leading-relaxed">{brand.mission}</p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Wireframes Tab */}
        <TabsContent value="wireframes" className="mt-6 space-y-6">
          {wireframes.map((wireframe, idx) => (
            <div
              key={idx}
              className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5"
            >
              <h3 className="text-xl font-semibold mb-4">{wireframe.page} Page</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {wireframe.sections.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Sections</p>
                    <ul className="space-y-1">
                      {wireframe.sections.map((section, sIdx) => (
                        <li key={sIdx} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{section}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {wireframe.components.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Components</p>
                    <ul className="space-y-1">
                      {wireframe.components.map((component, cIdx) => (
                        <li key={cIdx} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{component}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {wireframe.interactions.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Interactions</p>
                    <ul className="space-y-1">
                      {wireframe.interactions.map((interaction, iIdx) => (
                        <li key={iIdx} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{interaction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
