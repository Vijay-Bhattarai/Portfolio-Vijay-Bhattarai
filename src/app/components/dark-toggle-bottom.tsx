"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

const DarkToggleBottom = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement
      const isDark = localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
      setDarkMode(isDark)
      root.classList.toggle("dark", isDark)
    }
  }, [])

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement
      const newDarkMode = !darkMode
      setDarkMode(newDarkMode)
      localStorage.setItem("theme", newDarkMode ? "dark" : "light")
      root.classList.toggle("dark", newDarkMode)
    }
  }

  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-primary/20 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}

export default DarkToggleBottom
