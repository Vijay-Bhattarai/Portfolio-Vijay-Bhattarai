"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    const isDark = localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setDarkMode(isDark)
    root.classList.toggle("dark", isDark)
  }, [])

  const toggleTheme = () => {
    const root = window.document.documentElement
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")
    root.classList.toggle("dark", newDarkMode)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-9 px-0 rounded-full hover:bg-accent/20"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}

export default ThemeToggle
