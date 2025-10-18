"use client"

import { useState, useEffect } from "react"
import HomePage from "@/components/HomePage"
import LoadingScreen from "@/components/LoadingScreen"
import ResultsPage from "@/components/ResultsPage"

interface AgentStatus {
  status: 'waiting' | 'active' | 'complete';
  progress: number;
  message?: string;
}

export default function Home() {
  const [screen, setScreen] = useState<"home" | "loading" | "results">("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [agentUpdates, setAgentUpdates] = useState<Record<string, AgentStatus>>({})
  const [report, setReport] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    setScreen("loading")
    setError(null)

    // Initialize agent statuses
    const agents = ['market', 'competition', 'community', 'trends', 'execution', 'content']
    const initialStatuses: Record<string, AgentStatus> = {}
    agents.forEach(agent => {
      initialStatuses[agent] = { status: 'waiting', progress: 0 }
    })
    setAgentUpdates(initialStatuses)

    try {
      const response = await fetch('/api/analyze-idea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea: query }),
      })

      if (!response.ok) {
        throw new Error('Failed to analyze idea')
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) {
        throw new Error('No response body')
      }

      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()

        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        buffer += chunk

        const lines = buffer.split('\n')
        buffer = lines.pop() || '' // Keep incomplete line in buffer

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonStr = line.slice(6)
              const data = JSON.parse(jsonStr)

              if (data.type === 'complete') {
                setReport(data.report)
                setScreen("results")
              } else if (data.type === 'error') {
                setError(data.error)
              } else if (data.agent) {
                setAgentUpdates(prev => ({
                  ...prev,
                  [data.agent]: {
                    status: data.status,
                    progress: data.progress || 0,
                    message: data.message,
                  }
                }))
              }
            } catch (parseError) {
              console.error('JSON parse error:', parseError)
              console.error('Problematic line:', line.slice(0, 200))
              // Continue to next line instead of crashing
            }
          }
        }
      }
    } catch (err) {
      console.error('Analysis error:', err)
      setError(err instanceof Error ? err.message : 'An error occurred')
    }
  }

  const handleBack = () => {
    setScreen("home")
    setSearchQuery("")
    setReport(null)
    setAgentUpdates({})
  }

  return (
    <>
      {screen === "home" && <HomePage onSearch={handleSearch} />}
      {screen === "loading" && (
        <LoadingScreen
          idea={searchQuery}
          agentUpdates={agentUpdates}
          error={error}
        />
      )}
      {screen === "results" && <ResultsPage idea={searchQuery} report={report} onBack={handleBack} />}
    </>
  )
}