"use client"

import { useState } from "react"
import { X, ExternalLink, Search, TrendingUp, Users, Target, Lightbulb, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

interface Source {
  url: string;
  title?: string;
  snippet?: string;
  agent: string;
}

interface SourcesModalProps {
  open: boolean;
  onClose: () => void;
  sources: Record<string, Source[]>;
}

const agentConfig = {
  market: { icon: Search, color: "from-blue-500 to-cyan-500", label: "Market Research" },
  trends: { icon: TrendingUp, color: "from-purple-500 to-pink-500", label: "Trend Analysis" },
  community: { icon: Users, color: "from-green-500 to-emerald-500", label: "Community Intelligence" },
  execution: { icon: Target, color: "from-orange-500 to-red-500", label: "Execution Strategy" },
  competition: { icon: Lightbulb, color: "from-yellow-500 to-amber-500", label: "Competition Analysis" },
  content: { icon: Brain, color: "from-indigo-500 to-violet-500", label: "Content Generation" },
};

export default function SourcesModal({ open, onClose, sources }: SourcesModalProps) {
  const [selectedAgent, setSelectedAgent] = useState<string>("market");

  const totalSources = Object.values(sources).reduce((acc, agentSources) => acc + agentSources.length, 0);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] glass-card backdrop-blur-xl bg-card/95 border-primary/30">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/30 to-blue-500/30">
              <ExternalLink className="h-6 w-6 text-primary" />
            </div>
            Research Sources
          </DialogTitle>
          <DialogDescription className="text-base">
            {totalSources} sources used across all AI agents
          </DialogDescription>
        </DialogHeader>

        <Tabs value={selectedAgent} onValueChange={setSelectedAgent} className="mt-4">
          <TabsList className="grid grid-cols-6 gap-2 bg-muted/50 p-2">
            {Object.entries(agentConfig).map(([key, config]) => {
              const Icon = config.icon;
              const count = sources[key]?.length || 0;

              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-primary/20 rounded-lg"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${config.color}`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs text-center leading-tight">{config.label}</span>
                  <Badge variant="secondary" className="text-xs">
                    {count}
                  </Badge>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <ScrollArea className="h-[550px] mt-6 pr-4">
            {Object.entries(agentConfig).map(([key, config]) => (
              <TabsContent key={key} value={key} className="space-y-4 mt-0">
                {sources[key] && sources[key].length > 0 ? (
                  sources[key].map((source, index) => (
                    <div
                      key={index}
                      className="p-5 glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <Badge variant="outline" className="text-xs">
                          Source #{index + 1}
                        </Badge>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors flex-shrink-0"
                          title="Open in new tab"
                        >
                          <ExternalLink className="h-4 w-4 text-primary" />
                        </a>
                      </div>

                      {source.title && (
                        <h4 className="font-semibold text-lg text-foreground mb-3 leading-snug">
                          {source.title}
                        </h4>
                      )}

                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary/80 hover:text-primary hover:underline break-all mb-3 block transition-colors"
                      >
                        {source.url}
                      </a>

                      {source.snippet && (
                        <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4 py-1">
                          {source.snippet}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-16 text-muted-foreground">
                    <ExternalLink className="h-16 w-16 mx-auto mb-4 opacity-30" />
                    <p className="text-lg">No sources available for this agent</p>
                    <p className="text-sm mt-2 opacity-70">This agent may not have used external sources</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </ScrollArea>
        </Tabs>

        <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-border">
          <Button variant="outline" onClick={onClose} className="px-6">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
