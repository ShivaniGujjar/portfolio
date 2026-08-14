import React from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-[36px] h-[36px] rounded-full text-black/50 dark:text-white/60 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.09] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20 hover:text-black dark:hover:text-white transition-colors duration-200"
    >
      {isDark ? <HiOutlineSun size={16} /> : <HiOutlineMoon size={16} />}
    </button>
  );
};

export default ThemeToggle;