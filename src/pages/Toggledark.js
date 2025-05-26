// src/pages/Toggledark.js
import React, { useState, useEffect } from 'react';

const Toggledark = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode === 'true';
  });

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <button
      id="dark-mode-toggle"
      className="fixed bottom-4 right-4 z-60 p-2 bg-gray-900 text-white dark:text-black rounded-full hover:bg-gray-700 transition duration-300 dark:bg-slate-200"
      onClick={toggleDarkMode} >
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-10"
        fill="none"
        viewBox="0 0 24 23"
        stroke="currentColor" >
        
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
};

export default Toggledark;