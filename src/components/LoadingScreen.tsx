"use client"

import { useState, useEffect } from "react"
import { Brain, Search, TrendingUp, Users, Target, Lightbulb } from "lucide-react"

const agents = [
  { 
    id: 1, 
    name: "Market Researcher", 
    icon: Search, 
    status: "Analyzing market trends...",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    id: 2, 
    name: "Trend Analyst", 
    icon: TrendingUp, 
    status: "Scanning global trends...",
    color: "from-purple-500 to-pink-500"
  },
  { 
    id: 3, 
    name: "Community Expert", 
    icon: Users, 
    status: "Gathering community insights...",
    color: "from-green-500 to-emerald-500"
  },
  { 
    id: 4, 
    name: "Strategy Planner", 
    icon: Target, 
    status: "Building execution plan...",
    color: "from-orange-500 to-red-500"
  },
  { 
    id: 5, 
    name: "Innovation Scout", 
    icon: Lightbulb, 
    status: "Identifying opportunities...",
    color: "from-yellow-500 to-amber-500"
  },
  { 
    id: 6, 
    name: "AI Synthesizer", 
    icon: Brain, 
    status: "Synthesizing insights...",
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

interface LoadingScreenProps {
  idea: string
}

export default function LoadingScreen({ idea }: LoadingScreenProps) {
  const [funnyTextIndex, setFunnyTextIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Rotate funny texts
    const textInterval = setInterval(() => {
      setFunnyTextIndex((prev) => (prev + 1) % funnyTexts.length)
    }, 2000)

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev
        return prev + Math.random() * 5
      })
    }, 300)

    return () => {
      clearInterval(textInterval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Analyzing Your Idea</h2>
          <p className="text-xl text-muted-foreground">&quot;{idea}&quot;</p>
          <p className="text-primary text-lg font-medium animate-pulse">
            {funnyTexts[funnyTextIndex]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ease-out shimmer"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-2">
            {Math.round(progress)}% Complete
          </p>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => {
            const Icon = agent.icon
            const isActive = progress > (index * 15)
            
            return (
              <div
                key={agent.id}
                className={`glass-card rounded-xl p-6 transition-all duration-500 ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${agent.color} ${isActive ? 'animate-pulse' : ''}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground">{agent.status}</p>
                  </div>
                </div>
                
                {/* Shimmer effect when active */}
                {isActive && (
                  <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-transparent via-primary to-transparent shimmer" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

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