'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  // Initialize theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const initialTheme = stored || 'system'
    setThemeState(initialTheme)

    // Determine resolved theme
    let resolved: 'light' | 'dark' = 'dark'
    if (initialTheme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    } else {
      resolved = initialTheme
    }
    setResolvedTheme(resolved)
    applyTheme(resolved)
    setMounted(true)
  }, [])

  // Listen to system theme changes
  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    const handleChange = (e: MediaQueryListEvent) => {
      const newResolved = e.matches ? 'light' : 'dark'
      setResolvedTheme(newResolved)
      applyTheme(newResolved)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)

    let resolved: 'light' | 'dark' = 'dark'
    if (newTheme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    } else {
      resolved = newTheme
    }
    setResolvedTheme(resolved)
    applyTheme(resolved)
  }

  const applyTheme = (resolved: 'light' | 'dark') => {
    const html = document.documentElement
    html.setAttribute('data-theme', resolved)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
