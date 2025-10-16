import React, { useEffect, useState, useMemo } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  // init from localStorage or fallback to 'light'
  const [themeMode, setThemeMode] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light'
    } catch {
      return 'light'
    }
  })

  // convenience setters
  const lightTheme = () => setThemeMode('light')
  const darkTheme = () => setThemeMode('dark')

  // apply to <html> and persist
  useEffect(() => {
    const html = document.documentElement

    // remove previous classes and add the one we want
    html.classList.remove('light', 'dark')
    html.classList.add(themeMode)

    // also set color-scheme for UA form controls (so e.g. scrollbars, form controls adapt)
    try {
      html.style.colorScheme = themeMode === 'dark' ? 'dark' : 'light'
    } catch {
      // ignore on older browsers
    }

    try {
      localStorage.setItem('theme', themeMode)
    } catch {
      // ignore write errors
    }
  }, [themeMode])

  // memoized provider value to avoid unnecessary renders
  const providerValue = useMemo(
    () => ({ themeMode, lightTheme, darkTheme }),
    [themeMode]
  )

  return (
    <ThemeProvider value={providerValue}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text px-4 py-12">
        <div className="w-full max-w-2xl flex justify-end mb-6">
          <ThemeBtn />
        </div>

        <div className="w-full max-w-md">
          <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
