"use client"

import { useState, useEffect } from "react"
import { Brain, Search, TrendingUp, Users, Target, Lightbulb } from "lucide-react"

const agents = [
  {
    id: "market",
    name: "Market Researcher",
    icon: Search,
    defaultStatus: "Analyzing market trends...",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "trends",
    name: "Trend Analyst",
    icon: TrendingUp,
    defaultStatus: "Scanning global trends...",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "community",
    name: "Community Expert",
    icon: Users,
    defaultStatus: "Gathering community insights...",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "execution",
    name: "Strategy Planner",
    icon: Target,
    defaultStatus: "Building execution plan...",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "competition",
    name: "Competition Analyzer",
    icon: Lightbulb,
    defaultStatus: "Identifying opportunities...",
    color: "from-yellow-500 to-amber-500"
  },
  {
    id: "content",
    name: "Content Generator",
    icon: Brain,
    defaultStatus: "Synthesizing insights...",
    color: "from-indigo-500 to-violet-500"
  }
]

const funnyTexts = [
  "Teaching AI to think outside the box...",
  "Consulting with our virtual crystal ball...",
  "Asking the magic 8-ball for business advice...",
  "Brewing some innovation coffee...",
  "Summoning the entrepreneurial spirits...",
  "Running idea through the genius machine...",
  "Calculating the probability of success...",
  "Channeling business wisdom from the universe...",
  "Warming up the idea engines...",
  "Polishing your brilliant concept..."
]

interface AgentStatus {
  status: 'waiting' | 'active' | 'complete';
  progress: number;
  message?: string;
}

interface LoadingScreenProps {
  idea: string;
  agentUpdates: Record<string, AgentStatus>;
  error?: string | null;
}

export default function LoadingScreen({ idea, agentUpdates, error }: LoadingScreenProps) {
  const [funnyTextIndex, setFunnyTextIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Rotate funny texts
    const textInterval = setInterval(() => {
      setFunnyTextIndex((prev) => (prev + 1) % funnyTexts.length)
    }, 2000)

    return () => {
      clearInterval(textInterval)
    }
  }, [])

  // Calculate overall progress
  useEffect(() => {
    const totalAgents = Object.keys(agentUpdates).length
    if (totalAgents === 0) return

    const completedAgents = Object.values(agentUpdates).filter(
      agent => agent.status === 'complete'
    ).length

    const newProgress = (completedAgents / totalAgents) * 100
    setProgress(newProgress)
  }, [agentUpdates])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background animate-gradient-shift" />

      <div className="max-w-6xl w-full space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block glass-card px-6 py-3 rounded-2xl border border-primary/30 backdrop-blur-xl bg-card/70 shadow-xl">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Analyzing Your Idea
            </h2>
          </div>
          <p className="text-xl text-foreground font-medium">&quot;{idea}&quot;</p>
          <p className="text-primary text-lg font-medium animate-pulse">
            {funnyTexts[funnyTextIndex]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card h-3 rounded-full overflow-hidden border border-primary/30 backdrop-blur-xl bg-card/50 shadow-lg">
            <div
              className="h-full bg-gradient-to-r from-primary via-blue-500 to-primary transition-all duration-300 ease-out shimmer shadow-lg shadow-primary/50"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-2 font-medium">
            {Math.round(progress)}% Complete
          </p>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => {
            const Icon = agent.icon
            const agentStatus = agentUpdates[agent.id] || { status: 'waiting', progress: 0 }
            const isActive = agentStatus.status === 'active'
            const isComplete = agentStatus.status === 'complete'
            const statusMessage = agentStatus.message || agent.defaultStatus

            return (
              <div
                key={agent.id}
                className={`glass-card rounded-2xl p-6 transition-all duration-500 backdrop-blur-xl bg-card/70 border shadow-xl ${
                  isActive
                    ? 'opacity-100 scale-100 border-primary/40 shadow-primary/20 animate-pulse'
                    : isComplete
                    ? 'opacity-100 scale-100 border-green-400/40 shadow-green-400/20'
                    : 'opacity-50 scale-95 border-border'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${agent.color} shadow-lg ${
                      isActive ? 'animate-pulse shadow-xl' : ''
                    }`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold mb-1 transition-colors ${isActive || isComplete ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {agent.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{statusMessage}</p>
                  </div>
                  {isComplete && (
                    <span className="text-green-400 text-xl">✓</span>
                  )}
                </div>

                {/* Progress bar when active */}
                {isActive && (
                  <div className="mt-4 h-1.5 bg-muted/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-transparent via-primary to-transparent shimmer" />
                  </div>
                )}

                {/* Completion indicator */}
                {isComplete && (
                  <div className="mt-4 h-1.5 bg-green-400/50 rounded-full" />
                )}
              </div>
            )
          })}
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-8 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
            <p className="text-red-400 text-center">{error}</p>
          </div>
        )}

        {/* Loading Dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-3 w-3 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}