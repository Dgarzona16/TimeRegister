import React, { createContext, useContext, useEffect, useState } from "react"
import { LOCAL_THEME } from "./Constants.ts"

interface ThemeContextType {
    theme: string
    toggleTheme: (newTheme: string) => void
}

const themeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>("light")

    useEffect(() => {
        const savedTheme = localStorage.getItem(LOCAL_THEME) || "light"
        setTheme(savedTheme)
    }, [])

    const toggleTheme = (newTheme: string) => {
        localStorage.setItem(LOCAL_THEME, newTheme)
        setTheme(newTheme)
    }

    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
    const context = useContext(themeContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
