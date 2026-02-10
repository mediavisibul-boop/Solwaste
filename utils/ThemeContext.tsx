import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // TEMPORARILY DISABLED: Dark mode forced to light until fixes are complete
  const [theme, setTheme] = useState<Theme>(() => {
    // Force light mode for now
    return 'light';
    
    /* ORIGINAL CODE - Re-enable when dark mode is ready
    // Safe check for browser environment
    if (typeof window === 'undefined') {
      return 'light';
    }
    
    try {
      // Check localStorage first
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      if (savedTheme) {
        // Apply immediately to reduce FOUC
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        }
        return savedTheme;
      }
      
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        return 'dark';
      }
    } catch (error) {
      console.error('Error reading theme from localStorage:', error);
    }
    
    return 'light';
    */
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // TEMPORARILY DISABLED: Force remove dark class
    root.classList.remove('dark');
    
    /* ORIGINAL CODE - Re-enable when dark mode is ready
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Error saving theme to localStorage:', error);
    }
    */
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
