import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

// Reads the class the anti-flash script (see index.html) already set on <html>,
// so this never causes a flash or a mismatch on first render.
const getInitialIsDark = () => {
  if (typeof document === 'undefined') return true;
  return document.documentElement.classList.contains('dark');
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialIsDark);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Usage: const { isDark, toggleTheme } = useTheme();
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
};