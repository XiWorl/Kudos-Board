import { useState } from 'react'
import "../styles/ThemeToggle.css"

function toggleTheme(isDarkMode, setIsDarkMode) {
    return function() {
        const newTheme = isDarkMode ? 'light' : 'dark'
        setIsDarkMode(!isDarkMode)
        document.documentElement.setAttribute('data-theme', newTheme)
    }
}

export function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <button id="theme-toggle" onClick={toggleTheme(isDarkMode, setIsDarkMode)}> {isDarkMode ? '☀️' : '🌑'} </button>
    )
}
