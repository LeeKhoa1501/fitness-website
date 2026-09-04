import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
  {
    id: 'crimson',
    name: '🔥 Rực Lửa (California / Citigym)',
    primaryColor: '#FF1E4E',
    secondaryColor: '#00F0FF',
    badgeText: 'Fiery Crimson'
  },
  {
    id: 'volt',
    name: '⚡ Volt Neon (Nike Pro / Gymshark)',
    primaryColor: '#CCFF00',
    secondaryColor: '#00F0FF',
    badgeText: 'Electric Volt'
  },
  {
    id: 'cobalt',
    name: '🌊 Hyper Cobalt (Luxury Ocean Blue)',
    primaryColor: '#0066FF',
    secondaryColor: '#00F0FF',
    badgeText: 'Hyper Cobalt'
  }
];

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('crimson');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
