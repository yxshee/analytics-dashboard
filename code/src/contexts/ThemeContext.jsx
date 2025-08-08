import React, { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
    } catch (e) {
      console.warn('Failed to read theme from storage', e);
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.body.classList.toggle('dark-theme', dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) {
      console.warn('Failed to persist theme', e);
    }
  }, [dark]);

  const toggleTheme = () => setDark((prev) => !prev);
  const setTheme = (isDark) => setDark(!!isDark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
