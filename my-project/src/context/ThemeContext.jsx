/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('darkMode');
        if(saved) {
            setIsDark(JSON.parse(saved))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDark));
        if(isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}