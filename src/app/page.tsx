"use client"

import { useState, useEffect } from "react"
import HomePage from "@/components/HomePage"
import LoadingScreen from "@/components/LoadingScreen"
import ResultsPage from "@/components/ResultsPage"

export default function Home() {
  const [screen, setScreen] = useState<"home" | "loading" | "results">("home")
  const [searchQuery, setSearchQuery] = useState("")

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setScreen("loading")
    
    // Simulate loading for 5 seconds
    setTimeout(() => {
      setScreen("results")
    }, 5000)
  }

  const handleBack = () => {
    setScreen("home")
    setSearchQuery("")
  }

  return (
    <>
      {screen === "home" && <HomePage onSearch={handleSearch} />}
      {screen === "loading" && <LoadingScreen idea={searchQuery} />}
      {screen === "results" && <ResultsPage idea={searchQuery} onBack={handleBack} />}
    </>
  )
}