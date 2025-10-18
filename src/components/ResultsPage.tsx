"use client"

import { useState } from "react"
import {
  ArrowLeft, Award, ExternalLink, TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import SourcesModal from "@/components/SourcesModal"
import CompetitorGrid from "@/components/CompetitorGrid"
import CommunityDetails from "@/components/CommunityDetails"
import ExecutionPhaseModal from "@/components/ExecutionPhaseModal"
import ContentAssets from "@/components/ContentAssets"

// Import all parsers
import { parseCommunityData } from "@/lib/parsers/community-parser"
import { parseTrendsData } from "@/lib/parsers/trends-parser"
import { parseExecutionData } from "@/lib/parsers/execution-parser"
import { parseContentData } from "@/lib/parsers/content-parser"

interface ResultsPageProps {
  idea: string
  report: any
  onBack: () => void
}

export default function ResultsPage({ idea, report, onBack }: ResultsPageProps) {
  const [sourcesOpen, setSourcesOpen] = useState(false)
  const [selectedPhase, setSelectedPhase] = useState<any>(null)

  // Parse all data from report
  const communityData = report?.community ? parseCommunityData(report.community) : null
  const trendsData = report?.trends ? parseTrendsData(report.trends) : null
  const executionData = report?.execution ? parseExecutionData(report.execution) : null
  const contentData = report?.content ? parseContentData(report.content) : null

  // Calculate real scores from actual data
  const calculateScores = () => {
    const scores = {
      marketViability: 75,
      problemSeverity: 75,
      competitionLevel: 75,
      communityInterest: 75,
      executionFeasibility: 75,
      whyNowScore: 75
    }

    // Market Viability - based on TAM and CAGR from market data
    if (report?.market) {
      const marketContent = report.market.map((r: any) => r.content).join(' ')
      const tamMatch = marketContent.match(/([\d.]+)\s*B(?:illion)?/i)
      const cagrMatch = marketContent.match(/(\d+)%.*?CAGR/i)

      if (tamMatch && parseFloat(tamMatch[1]) > 10) scores.marketViability = 90
      else if (tamMatch && parseFloat(tamMatch[1]) > 5) scores.marketViability = 80

      if (cagrMatch && parseInt(cagrMatch[1]) > 15) scores.marketViability = Math.min(95, scores.marketViability + 10)
    }

    // Community Interest - based on parsed community data
    if (communityData && communityData.platforms.length > 0) {
      if (communityData.engagementLevel === 'High') scores.communityInterest = 92
      else if (communityData.engagementLevel === 'Medium') scores.communityInterest = 78
      else scores.communityInterest = 65
    }

    // Competition Level - inverse score (more competition = lower score)
    if (report?.competition) {
      const compCount = report.competition.length
      if (compCount > 10) scores.competitionLevel = 60
      else if (compCount > 5) scores.competitionLevel = 70
      else scores.competitionLevel = 85
    }

    // Trends Growth - based on parsed trends data
    if (trendsData && trendsData.overallGrowth) {
      const growthMatch = trendsData.overallGrowth.match(/(\d+)/)
      if (growthMatch) {
        const growth = parseInt(growthMatch[1])
        if (growth > 50) scores.problemSeverity = 90
        else if (growth > 20) scores.problemSeverity = 80
      }
    }

    return scores
  }

  const scores = calculateScores()
  const overallScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length)

  const scoreCards = [
    {
      title: "Market Viability",
      score: scores.marketViability,
      icon: TrendingUp,
      color: "text-green-500",
      description: "Market demand and growth potential"
    },
    {
      title: "Community Interest",
      score: scores.communityInterest,
      icon: TrendingUp,
      color: "text-blue-500",
      description: "Active community engagement and demand"
    },
    {
      title: "Competition Level",
      score: scores.competitionLevel,
      icon: TrendingUp,
      color: "text-orange-500",
      description: "Competitive landscape analysis"
    },
    {
      title: "Trend Growth",
      score: scores.problemSeverity,
      icon: TrendingUp,
      color: "text-purple-500",
      description: "Search volume and interest trends"
    }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

      {/* Header */}
      <div className="border-b border-primary/20 bg-card/70 backdrop-blur-xl sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="hover:bg-primary/20 hover:text-primary transition-all duration-300 rounded-xl"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Analysis Results
              </h1>
              <p className="text-sm text-muted-foreground">&quot;{idea}&quot;</p>
            </div>
            <Button
              variant="outline"
              onClick={() => setSourcesOpen(true)}
              className="flex items-center gap-2 hover:bg-primary/20 hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4" />
              View Sources
            </Button>
            <div className="flex items-center gap-3 glass-card px-4 py-2 rounded-xl border border-primary/30 backdrop-blur-xl bg-card/80 shadow-xl">
              <Award className="h-8 w-8 text-primary animate-pulse" />
              <div className="text-right">
                <p className="text-3xl font-bold text-primary">{overallScore}</p>
                <p className="text-xs text-muted-foreground">Overall Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Executive Summary */}
        <Card className="glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="h-6 w-6 text-primary" />
              Executive Summary
            </CardTitle>
            <CardDescription className="text-base">AI-powered analysis of your business idea</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground leading-relaxed text-lg">
              {report?.executiveSummary || "Your idea shows strong potential in the current market landscape. Analysis includes market research, competition insights, community validation, and execution roadmap."}
            </p>
            <div className="flex flex-wrap gap-2">
              {overallScore > 80 && (
                <Badge variant="default" className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                  High Potential
                </Badge>
              )}
              {communityData && communityData.platforms.length > 5 && (
                <Badge variant="default" className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                  Active Community
                </Badge>
              )}
              {executionData && executionData.roadmap.length > 0 && (
                <Badge variant="default" className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                  Clear Roadmap
                </Badge>
              )}
              {trendsData && trendsData.keywords.length > 0 && (
                <Badge variant="default" className="bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 border border-orange-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                  Growing Demand
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Score Cards Grid */}
        <div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {scoreCards.map((card) => {
              const Icon = card.icon
              return (
                <Card
                  key={card.title}
                  className="glass-card backdrop-blur-xl bg-card/70 border-primary/20 shadow-xl hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${card.color.replace('text-', 'from-')}/20 to-transparent border border-${card.color.replace('text-', '')}/30`}>
                        <Icon className={`h-6 w-6 ${card.color}`} />
                      </div>
                      <span className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                        {card.score}
                      </span>
                    </div>
                    <CardTitle className="text-base mt-3">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={card.score} className="h-2.5 mb-3" />
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Competition Analysis - NEW! */}
        {report?.competition && report.competition.length > 0 && (
          <CompetitorGrid
            competitors={[]} // TODO: Create competition parser
            onCompetitorClick={(comp) => {
              // Show competitor modal
              console.log('Competitor clicked:', comp)
            }}
          />
        )}

        {/* Community Signals - ENHANCED with real data! */}
        {communityData && communityData.platforms.length > 0 && (
          <CommunityDetails
            platforms={communityData.platforms}
            totalReach={communityData.totalReach}
            engagementLevel={communityData.engagementLevel}
            keyInsights={communityData.keyInsights}
          />
        )}

        {/* Trend Analysis - ENHANCED with keywords! */}
        {trendsData && trendsData.keywords.length > 0 && (
          <Card className="glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6 text-primary" />
                Trend Analysis
              </CardTitle>
              <CardDescription className="text-base">
                Tracking {trendsData.keywords.length} keywords with {trendsData.overallGrowth} growth
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Keywords List */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-3">Top Keywords:</p>
                <div className="flex flex-wrap gap-2">
                  {trendsData.keywords.slice(0, 8).map((kw, idx) => (
                    <Badge key={idx} variant="outline" className="px-3 py-1.5">
                      {kw.keyword}
                      {kw.volume && <span className="ml-2 text-primary">{kw.volume}</span>}
                      {kw.growth && <span className="ml-1 text-green-400">↑{kw.growth}</span>}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Growth Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 p-4">
                  <p className="text-sm text-muted-foreground mb-1">Overall Growth</p>
                  <p className="text-3xl font-bold text-green-400">{trendsData.overallGrowth}</p>
                </div>
                {trendsData.forecast && (
                  <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 p-4">
                    <p className="text-sm text-muted-foreground mb-1">Forecast</p>
                    <p className="text-xl font-bold text-foreground">{trendsData.forecast}</p>
                  </div>
                )}
              </div>

              {/* Insights */}
              {trendsData.insights && trendsData.insights.length > 0 && (
                <div className="space-y-2">
                  {trendsData.insights.map((insight, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {insight}
                    </p>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Execution Timeline - ENHANCED with clickable phases! */}
        {executionData && executionData.roadmap.length > 0 && (
          <Card className="glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6 text-primary" />
                Execution Timeline
              </CardTitle>
              <CardDescription className="text-base">
                Click any phase to see detailed guide
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {executionData.roadmap.map((phase, index) => (
                <div
                  key={index}
                  className="flex gap-4 group cursor-pointer"
                  onClick={() => setSelectedPhase(phase)}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all duration-300 shadow-lg bg-gradient-to-br from-primary/30 to-blue-500/30 text-primary border border-primary/40 group-hover:scale-110">
                      {index + 1}
                    </div>
                    {index < executionData.roadmap.length - 1 && (
                      <div className="w-1 h-full bg-gradient-to-b from-primary/50 to-border mt-2 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 pb-8 glass-card backdrop-blur-md bg-card/30 rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all p-4">
                    <p className="font-semibold text-foreground text-lg mb-1">{phase.name}</p>
                    <p className="text-sm text-muted-foreground mb-2">{phase.timeline}</p>
                    <p className="text-xs text-primary">Click to see detailed guide →</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* GTM Strategy - NEW! */}
        {executionData && executionData.gtmStrategy && (
          <Card className="glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6 text-primary" />
                Go-to-Market Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Customer Segments */}
              {executionData.gtmStrategy.segments.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold mb-3">Target Segments</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {executionData.gtmStrategy.segments.map((seg, idx) => (
                      <div key={idx} className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-4">
                        <p className="font-semibold text-foreground">{seg.name}</p>
                        <p className="text-sm text-muted-foreground mt-1">{seg.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Acquisition Channels */}
              {executionData.gtmStrategy.channels.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold mb-3">Acquisition Channels</h4>
                  <div className="space-y-2">
                    {executionData.gtmStrategy.channels.slice(0, 5).map((ch, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 glass-card backdrop-blur-md bg-card/50 rounded-lg border border-primary/20">
                        <span className="font-medium text-foreground">{ch.name}</span>
                        <div className="flex items-center gap-3">
                          {ch.cac && <span className="text-sm text-muted-foreground">CAC: {ch.cac}</span>}
                          <Badge variant={ch.priority === 'High' ? 'default' : 'secondary'}>
                            {ch.priority}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Content & Marketing Assets - THE GAME CHANGER! */}
        {contentData && (
          <ContentAssets
            landingPage={contentData.landingPage}
            ads={contentData.ads}
            brand={contentData.brand}
            wireframes={contentData.wireframes}
            aiPrompts={contentData.aiPrompts}
          />
        )}
      </div>

      {/* Modals */}
      <SourcesModal
        open={sourcesOpen}
        onClose={() => setSourcesOpen(false)}
        sources={report?.sources || {}}
      />

      <ExecutionPhaseModal
        open={!!selectedPhase}
        onClose={() => setSelectedPhase(null)}
        phase={selectedPhase}
      />
    </div>
  )
}
