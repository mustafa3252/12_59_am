"use client"

import { useState } from "react"
import { 
  ArrowLeft, TrendingUp, Users, Target, Clock, 
  ThumbsUp, MessageCircle, Share2, Award, Calendar,
  DollarSign, Zap, AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface ResultsPageProps {
  idea: string
  onBack: () => void
}

const scoreCards = [
  { 
    title: "Market Viability", 
    score: 87, 
    icon: TrendingUp, 
    color: "text-green-500",
    description: "Strong market demand with growing trends"
  },
  { 
    title: "Competition Level", 
    score: 65, 
    icon: Target, 
    color: "text-orange-500",
    description: "Moderate competition with differentiation opportunities"
  },
  { 
    title: "Target Audience", 
    score: 92, 
    icon: Users, 
    color: "text-blue-500",
    description: "Clear and accessible target demographic"
  },
  { 
    title: "Execution Feasibility", 
    score: 78, 
    icon: Zap, 
    color: "text-purple-500",
    description: "Achievable with proper planning and resources"
  }
]

const trendData = [
  { month: "Jan", interest: 45 },
  { month: "Feb", interest: 52 },
  { month: "Mar", interest: 61 },
  { month: "Apr", interest: 68 },
  { month: "May", interest: 75 },
  { month: "Jun", interest: 82 }
]

const communitySignals = [
  { platform: "Reddit", engagement: 1247, sentiment: "Positive", icon: MessageCircle },
  { platform: "Twitter", engagement: 3891, sentiment: "Very Positive", icon: Share2 },
  { platform: "ProductHunt", engagement: 542, sentiment: "Positive", icon: ThumbsUp }
]

const executionTimeline = [
  { phase: "Research & Planning", duration: "2-3 weeks", status: "critical" },
  { phase: "MVP Development", duration: "6-8 weeks", status: "important" },
  { phase: "Beta Testing", duration: "3-4 weeks", status: "normal" },
  { phase: "Launch & Marketing", duration: "4-6 weeks", status: "normal" },
  { phase: "Scale & Optimize", duration: "Ongoing", status: "future" }
]

export default function ResultsPage({ idea, onBack }: ResultsPageProps) {
  const overallScore = Math.round(scoreCards.reduce((sum, card) => sum + card.score, 0) / scoreCards.length)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Analysis Results</h1>
              <p className="text-sm text-muted-foreground">&quot;{idea}&quot;</p>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-8 w-8 text-primary" />
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{overallScore}</p>
                <p className="text-xs text-muted-foreground">Overall Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Executive Summary */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Executive Summary
            </CardTitle>
            <CardDescription>AI-powered analysis of your business idea</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Your idea shows strong potential in the current market landscape. The concept addresses a clear 
              need with growing demand, particularly among tech-savvy consumers aged 25-45. While there is 
              existing competition, your unique approach offers differentiation opportunities through 
              personalization and AI integration.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default" className="bg-green-500/20 text-green-500 hover:bg-green-500/30">
                High Demand
              </Badge>
              <Badge variant="default" className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30">
                Clear Target Market
              </Badge>
              <Badge variant="default" className="bg-purple-500/20 text-purple-500 hover:bg-purple-500/30">
                Scalable Model
              </Badge>
              <Badge variant="default" className="bg-orange-500/20 text-orange-500 hover:bg-orange-500/30">
                Moderate Risk
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Score Cards Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {scoreCards.map((card) => {
              const Icon = card.icon
              return (
                <Card key={card.title} className="glass-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Icon className={`h-5 w-5 ${card.color}`} />
                      <span className="text-3xl font-bold">{card.score}</span>
                    </div>
                    <CardTitle className="text-base">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={card.score} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Trend Chart */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Market Interest Trend
            </CardTitle>
            <CardDescription>6-month search and engagement data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-4">
              {trendData.map((data, index) => (
                <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full relative">
                    <div 
                      className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t-lg transition-all duration-500"
                      style={{ height: `${data.interest * 2.5}px` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 inline mr-2 text-green-500" />
                Interest has increased by <span className="font-semibold text-foreground">82%</span> over the last 6 months
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Community Signals */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Community Signals
              </CardTitle>
              <CardDescription>Social media sentiment analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {communitySignals.map((signal) => {
                const Icon = signal.icon
                return (
                  <div key={signal.platform} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{signal.platform}</p>
                        <p className="text-sm text-muted-foreground">{signal.engagement.toLocaleString()} mentions</p>
                      </div>
                    </div>
                    <Badge variant="default" className="bg-green-500/20 text-green-500">
                      {signal.sentiment}
                    </Badge>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* Execution Timeline */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Execution Timeline
              </CardTitle>
              <CardDescription>Recommended implementation phases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {executionTimeline.map((phase, index) => (
                <div key={phase.phase} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      phase.status === 'critical' ? 'bg-red-500/20 text-red-500' :
                      phase.status === 'important' ? 'bg-orange-500/20 text-orange-500' :
                      phase.status === 'future' ? 'bg-muted text-muted-foreground' :
                      'bg-primary/20 text-primary'
                    }`}>
                      {index + 1}
                    </div>
                    {index < executionTimeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{phase.phase}</p>
                      {phase.status === 'critical' && (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {phase.duration}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Key Recommendations */}
        <Card className="glass-card border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Key Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3 p-4 bg-primary/10 rounded-lg">
              <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">Start with MVP</p>
                <p className="text-sm text-muted-foreground">
                  Focus on core features first. Estimate $15-25K initial investment for a lean launch.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-primary/10 rounded-lg">
              <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">Build Community Early</p>
                <p className="text-sm text-muted-foreground">
                  Engage with potential users on Reddit and Twitter to validate assumptions and build momentum.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-primary/10 rounded-lg">
              <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">Leverage AI Differentiation</p>
                <p className="text-sm text-muted-foreground">
                  Your AI-powered personalization is a key differentiator. Make it central to your marketing message.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}