import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext.js';

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? JSON.parse(savedTheme) : false;
    } catch (e) {
      console.error('Error parsing theme from localStorage:', e);
      return false;
    }
  });

  useEffect(() => {
    const rootElement = document.getElementById('rootElement');
    if (rootElement) {
      if (isDark) {
        rootElement.classList.add('dark');
      } else {
        rootElement.classList.remove('dark');
      }
    }
    localStorage.setItem('theme', JSON.stringify(isDark));
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
