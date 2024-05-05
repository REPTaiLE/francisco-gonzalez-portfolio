import { createContext, useEffect, useState } from 'react';

// Main dark mode user
const themes = {
    dark: {
        backgroundColor: '#0A192F', 
        color: '#FFF'
    },
    light: {
        backgroundColor: '#FFF',
        color: '#0A192F'
    }
}

export const DarkModeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);
    const theme = isDark ? themes.dark : themes.light;

    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark));
        setIsDark(!isDark);
    };

    useEffect(() => {
        const isDark = localStorage.getItem('isDark') === 'true';
        setIsDark(isDark);
    }, []);

    return (
        <DarkModeContext.Provider value={[{
            theme,
            isDark
        }, toggleTheme]}>
            {children}
        </DarkModeContext.Provider>
    );
}