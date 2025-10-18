"use client"

import { useState } from "react"
import { TrendingUp, DollarSign, Users, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Competitor {
  name: string;
  funding?: string;
  features: string[];
  pricing?: string;
  strengths: string[];
  weaknesses: string[];
  differentiation: string;
}

interface CompetitorGridProps {
  competitors: Competitor[];
  onCompetitorClick?: (competitor: Competitor) => void;
}

export default function CompetitorGrid({ competitors, onCompetitorClick }: CompetitorGridProps) {
  if (!competitors || competitors.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <TrendingUp className="h-16 w-16 mx-auto mb-4 opacity-30" />
        <p className="text-lg">No competitor data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Competition Analysis</h2>
          <p className="text-muted-foreground mt-2">
            {competitors.length} competitor{competitors.length !== 1 ? 's' : ''} identified in your market
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitors.map((competitor, idx) => (
          <div
            key={idx}
            className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 p-6 group cursor-pointer"
            onClick={() => onCompetitorClick?.(competitor)}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {competitor.name}
                </h3>
                {competitor.funding && (
                  <Badge variant="outline" className="text-xs">
                    <DollarSign className="h-3 w-3 mr-1" />
                    {competitor.funding} raised
                  </Badge>
                )}
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>

            {/* Pricing */}
            {competitor.pricing && (
              <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground">Pricing</p>
                <p className="text-lg font-semibold text-foreground">{competitor.pricing}</p>
              </div>
            )}

            {/* Key Features */}
            {competitor.features && competitor.features.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">Key Features</p>
                <div className="space-y-1">
                  {competitor.features.slice(0, 3).map((feature, fIdx) => (
                    <div key={fIdx} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="flex-1">{feature}</span>
                    </div>
                  ))}
                  {competitor.features.length > 3 && (
                    <p className="text-xs text-muted-foreground mt-1">
                      +{competitor.features.length - 3} more features
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Strengths & Weaknesses Preview */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {competitor.strengths && competitor.strengths.length > 0 && (
                <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                  <p className="text-xs font-medium text-green-400 mb-1">Strengths</p>
                  <p className="text-xs text-muted-foreground">
                    {competitor.strengths.length} identified
                  </p>
                </div>
              )}
              {competitor.weaknesses && competitor.weaknesses.length > 0 && (
                <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <p className="text-xs font-medium text-orange-400 mb-1">Gaps</p>
                  <p className="text-xs text-muted-foreground">
                    {competitor.weaknesses.length} identified
                  </p>
                </div>
              )}
            </div>

            {/* Your Advantage */}
            {competitor.differentiation && (
              <div className="pt-4 border-t border-border">
                <p className="text-xs font-medium text-primary mb-2">💡 Your Advantage</p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {competitor.differentiation}
                </p>
              </div>
            )}

            {/* Click to view more indicator */}
            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span>Click for full analysis</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
