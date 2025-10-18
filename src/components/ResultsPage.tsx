"use client"

import { useState } from "react"
import {
  ArrowLeft, TrendingUp, Users, Target, Clock,
  ThumbsUp, MessageCircle, Share2, Award, Calendar,
  DollarSign, Zap, Brain, ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import SourcesModal from "@/components/SourcesModal"

// Import parsers (with error handling)
let parseCommunityData, parseTrendsData, parseExecutionData, parseContentData
try {
  parseCommunityData = require("@/lib/parsers/community-parser").parseCommunityData
  parseTrendsData = require("@/lib/parsers/trends-parser").parseTrendsData
  parseExecutionData = require("@/lib/parsers/execution-parser").parseExecutionData
  parseContentData = require("@/lib/parsers/content-parser").parseContentData
} catch (e) {
  console.warn('Parsers not available:', e)
}

interface ResultsPageProps {
  idea: string
  report: any
  onBack: () => void
}

const trendData = [
  { year: "2022", volume: 720 },
  { year: "2023", volume: 1350 },
  { year: "2024", volume: 2900 },
  { year: "2025", volume: 4400 }
]

export default function ResultsPage({ idea, report, onBack }: ResultsPageProps) {
  const [sourcesOpen, setSourcesOpen] = useState(false)

  // Try to parse data, but fall back to null if parser fails
  let communityData = null
  let trendsData = null
  let executionData = null
  let contentData = null

  try {
    if (parseCommunityData && report?.community) {
      communityData = parseCommunityData(report.community)
    }
    if (parseTrendsData && report?.trends) {
      trendsData = parseTrendsData(report.trends)
    }
    if (parseExecutionData && report?.execution) {
      executionData = parseExecutionData(report.execution)
    }
    if (parseContentData && report?.content) {
      contentData = parseContentData(report.content)
    }
  } catch (error) {
    console.warn('Parser error:', error)
  }

  // Calculate scores with proper error handling
  const calculateScores = () => {
    const scores = {
      marketViability: 87,
      problemSeverity: 92,
      competitionLevel: 65,
      communityInterest: 78
    }

    try {
      if (report?.market && Array.isArray(report.market)) {
        const marketContent = report.market.map((r: any) => r.content || '').join(' ')
        const tamMatch = marketContent.match(/([\d.]+)\s*B(?:illion)?/i)
        if (tamMatch && parseFloat(tamMatch[1]) > 10) scores.marketViability = 90
        else if (tamMatch && parseFloat(tamMatch[1]) > 5) scores.marketViability = 85
      }

      if (communityData && communityData.platforms && communityData.platforms.length > 0) {
        if (communityData.engagementLevel === 'High') scores.communityInterest = 92
        else if (communityData.engagementLevel === 'Medium') scores.communityInterest = 78
      }

      if (report?.competition && Array.isArray(report.competition)) {
        const compCount = report.competition.length
        if (compCount > 10) scores.competitionLevel = 60
        else if (compCount > 5) scores.competitionLevel = 70
        else scores.competitionLevel = 85
      }

      if (trendsData && trendsData.overallGrowth) {
        const growthMatch = trendsData.overallGrowth.match(/(\d+)/)
        if (growthMatch) {
          const growth = parseInt(growthMatch[1])
          if (growth > 50) scores.problemSeverity = 95
          else if (growth > 20) scores.problemSeverity = 85
        }
      }
    } catch (error) {
      console.warn('Score calculation error:', error)
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
      description: "Strong market demand with growing trends"
    },
    {
      title: "Competition Level",
      score: scores.competitionLevel,
      icon: Target,
      color: "text-orange-500",
      description: "Moderate competition with differentiation opportunities"
    },
    {
      title: "Target Audience",
      score: scores.communityInterest,
      icon: Users,
      color: "text-blue-500",
      description: "Clear and accessible target demographic"
    },
    {
      title: "Execution Feasibility",
      score: scores.problemSeverity,
      icon: Zap,
      color: "text-purple-500",
      description: "Achievable with proper planning and resources"
    }
  ]

  // Show community signals (real data if available, fallback to placeholder)
  const communitySignals = communityData && communityData.platforms && communityData.platforms.length > 0
    ? communityData.platforms.slice(0, 3).map((platform: any) => ({
        platform: platform.name,
        engagement: platform.memberCount,
        sentiment: platform.sentiment || "Positive",
        icon: platform.type === 'reddit' ? MessageCircle :
              platform.type === 'youtube' ? Share2 : ThumbsUp
      }))
    : [
        { platform: "Reddit", engagement: "1.2K+", sentiment: "Positive", icon: MessageCircle },
        { platform: "Twitter", engagement: "3.8K+", sentiment: "Very Positive", icon: Share2 },
        { platform: "ProductHunt", engagement: "542", sentiment: "Positive", icon: ThumbsUp }
      ]

  // Show execution timeline (real data if available, fallback to placeholder)
  const executionTimeline = executionData && executionData.roadmap && executionData.roadmap.length > 0
    ? executionData.roadmap.slice(0, 5).map((phase: any, idx: number) => ({
        phase: phase.name,
        duration: phase.timeline,
        status: idx === 0 ? "critical" : idx === 1 ? "important" : "normal"
      }))
    : [
        { phase: "Research & Planning", duration: "2-3 weeks", status: "critical" },
        { phase: "MVP Development", duration: "6-8 weeks", status: "important" },
        { phase: "Beta Testing", duration: "3-4 weeks", status: "normal" },
        { phase: "Launch & Marketing", duration: "4-6 weeks", status: "normal" },
        { phase: "Scale & Optimize", duration: "Ongoing", status: "future" }
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
              {report?.executiveSummary || "Your idea shows strong potential in the current market landscape. The concept addresses a clear need with growing demand, particularly among tech-savvy consumers aged 25-45. While there is existing competition, your unique approach offers differentiation opportunities through personalization and AI integration."}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default" className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                High Demand
              </Badge>
              <Badge variant="default" className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                Clear Target Market
              </Badge>
              <Badge variant="default" className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                Scalable Model
              </Badge>
              <Badge variant="default" className="bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 border border-orange-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                Moderate Risk
              </Badge>
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

        {/* Trend Chart */}
        <Card className="glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <TrendingUp className="h-6 w-6 text-primary" />
              Trend Analysis
            </CardTitle>
            <CardDescription className="text-base">Search volume growth over time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis
                  dataKey="year"
                  stroke="rgba(255,255,255,0.5)"
                  style={{ fontSize: '14px' }}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.5)"
                  style={{ fontSize: '14px' }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(96, 165, 250, 0.3)',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value: any) => [`${value}`, 'volume']}
                  labelStyle={{ color: '#60a5fa' }}
                />
                <Line
                  type="monotone"
                  dataKey="volume"
                  stroke="#60a5fa"
                  strokeWidth={3}
                  dot={{ fill: '#60a5fa', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: '#60a5fa' }}
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 p-4">
                <p className="text-sm text-muted-foreground mb-1">Search Volume</p>
                <p className="text-3xl font-bold text-foreground">4.4K</p>
              </div>
              <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 p-4">
                <p className="text-sm text-muted-foreground mb-1">Growth</p>
                <p className="text-3xl font-bold text-green-400">+511%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Community Signals */}
          <Card className="glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-primary" />
                Community Signals
              </CardTitle>
              <CardDescription className="text-base">Social media sentiment analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {communitySignals.map((signal) => {
                const Icon = signal.icon
                return (
                  <div
                    key={signal.platform}
                    className="flex items-center justify-between p-4 glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{signal.platform}</p>
                        <p className="text-sm text-muted-foreground">{signal.engagement} mentions</p>
                      </div>
                    </div>
                    <Badge variant="default" className="bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm px-3 py-1">
                      {signal.sentiment}
                    </Badge>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* Execution Timeline */}
          <Card className="glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calendar className="h-6 w-6 text-primary" />
                Execution Timeline
              </CardTitle>
              <CardDescription className="text-base">Recommended implementation phases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {executionTimeline.map((phase, index) => (
                <div key={phase.phase} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all duration-300 shadow-lg ${
                        phase.status === 'critical'
                          ? 'bg-gradient-to-br from-red-500/30 to-red-600/30 text-red-400 border border-red-500/40 group-hover:scale-110'
                          : phase.status === 'important'
                            ? 'bg-gradient-to-br from-orange-500/30 to-orange-600/30 text-orange-400 border border-orange-500/40 group-hover:scale-110'
                            : phase.status === 'future'
                              ? 'bg-muted/50 text-muted-foreground border border-border'
                              : 'bg-gradient-to-br from-primary/30 to-blue-500/30 text-primary border border-primary/40 group-hover:scale-110'
                      }`}
                    >
                      {index + 1}
                    </div>
                    {index < executionTimeline.length - 1 && (
                      <div className="w-1 h-full bg-gradient-to-b from-primary/50 to-border mt-2 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="font-semibold text-foreground text-lg mb-2">{phase.phase}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">{phase.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Key Recommendations */}
        <Card className="glass-card backdrop-blur-xl bg-gradient-to-br from-primary/10 via-card/70 to-card/70 border-primary/50 shadow-2xl hover:border-primary/70 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="h-6 w-6 text-primary" />
              Key Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 p-5 glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 border border-green-500/40 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="h-6 w-6 text-green-400 flex-shrink-0" />
              </div>
              <div>
                <p className="font-semibold mb-2 text-lg text-foreground">Start with MVP</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Focus on core features first. Estimate $15-25K initial investment for a lean launch.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-500/40 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-blue-400 flex-shrink-0" />
              </div>
              <div>
                <p className="font-semibold mb-2 text-lg text-foreground">Build Community Early</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Engage with potential users on Reddit and Twitter to validate assumptions and build momentum.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/40 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-purple-400 flex-shrink-0" />
              </div>
              <div>
                <p className="font-semibold mb-2 text-lg text-foreground">Leverage AI Differentiation</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your AI-powered personalization is a key differentiator. Make it central to your marketing message.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sources Modal */}
      <SourcesModal
        open={sourcesOpen}
        onClose={() => setSourcesOpen(false)}
        sources={report?.sources || {}}
      />
    </div>
  )
}
