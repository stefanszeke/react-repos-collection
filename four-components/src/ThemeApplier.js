import React, { useEffect } from 'react';
import { useTheme } from './context/ThemeContext';

const ThemeApplier = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return null;
};

export default ThemeApplier;