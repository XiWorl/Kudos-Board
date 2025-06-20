import { useState } from 'react'
import "../styles/ThemeToggle.css"

export function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark'
        setIsDarkMode(!isDarkMode)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    return (
        <button id="theme-toggle" onClick={toggleTheme}> {isDarkMode ? '☀️' : '🌑'} </button>
    )
}
