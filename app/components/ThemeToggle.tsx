'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 text-sm rounded border bg-white dark:bg-zinc-800 text-black dark:text-white shadow"
    >
      Toggle {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
