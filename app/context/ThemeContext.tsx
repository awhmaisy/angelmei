'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Apply theme class to document
    document.documentElement.classList.remove('light-mode', 'dark-mode');
    document.documentElement.classList.add(`${theme}-mode`);
    
    // Store the preference in localStorage for persistence
    localStorage.setItem('theme', theme);
    
    // Force a repaint to ensure all elements update their styles
    document.body.style.display = 'none';
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    document.body.offsetHeight; // Trigger a reflow
    document.body.style.display = '';
  }, [theme]);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
