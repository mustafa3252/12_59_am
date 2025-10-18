"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HomePageProps {
  onSearch: (query: string) => void
}

const sampleIdeas = [
  {
    id: 1,
    title: "AI-Powered Meal Planner",
    description: "Personalized meal plans based on dietary preferences and budget",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Smart Home Energy Optimizer",
    description: "Reduce energy bills with intelligent automation",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Virtual Fitness Coach",
    description: "AI-driven personalized workout plans and motivation",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Local Service Marketplace",
    description: "Connect with trusted local professionals instantly",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Eco-Friendly Delivery Service",
    description: "Carbon-neutral last-mile delivery for local businesses",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop"
  }
]

export default function HomePage({ onSearch }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 })
  const searchBarRef = useRef<HTMLDivElement>(null)

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (searchBarRef.current) {
        const rect = searchBarRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        setMousePos({ 
          x: e.clientX - centerX, 
          y: e.clientY - centerY 
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Smooth lerp animation for glow
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setGlowPos(prev => ({
        x: lerp(prev.x, mousePos.x, 0.1),
        y: lerp(prev.y, mousePos.y, 0.1)
      }))
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [mousePos])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
      
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        <div className="text-center space-y-8">
          {/* App Name Display */}
          <div className="inline-block glass-card px-8 py-4 rounded-2xl">
            <p className="text-5xl font-bold text-primary tabular-nums tracking-tight">
              12:59 AM
            </p>
          </div>

          {/* Title and Subtitle */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Prove your idea works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              An idea analyser powered by sophisticated AI Agents and Grounded information.
            </p>
          </div>

          {/* Pinned Search Bar with Following Glow */}
          <div className="relative max-w-2xl mx-auto">
            <div 
              ref={searchBarRef}
              className="relative"
            >
              {/* Following Glow Effect */}
              <div 
                className="absolute inset-0 pointer-events-none rounded-full"
                style={{
                  background: `radial-gradient(circle 150px at ${glowPos.x + 50}% ${glowPos.y + 50}%, rgba(96, 165, 250, 0.4), transparent 70%)`,
                  filter: 'blur(20px)',
                }}
              />
              
              {/* Search Bar */}
              <form 
                onSubmit={handleSubmit}
                className="relative glass-card rounded-full p-2 flex items-center gap-2 shadow-2xl border-2 border-primary/30"
              >
                <Search className="ml-3 h-5 w-5 text-primary" />
                <Input
                  type="text"
                  placeholder="Describe your business idea..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
                />
                <Button 
                  type="submit"
                  size="sm" 
                  className="rounded-full bg-primary hover:bg-primary/90"
                >
                  <Sparkles className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Ideas Carousel */}
      <div className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Sample Ideas to Explore</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {sampleIdeas.map((idea) => (
              <div
                key={idea.id}
                onClick={() => onSearch(idea.title)}
                className="flex-shrink-0 w-80 glass-card rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 snap-start group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={idea.image} 
                    alt={idea.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
                  <p className="text-muted-foreground text-sm">{idea.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}