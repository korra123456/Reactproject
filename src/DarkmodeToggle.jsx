import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  useEffect(() => {
    const hasDarkMode = localStorage.getItem('darkmode');

    if (hasDarkMode === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    } else if (hasDarkMode === 'on') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }, []);

  const enableDarkMode = () => {
    document.documentElement.classList.add('dark');
    setIsDarkMode(true);
    localStorage.setItem('darkmode', 'on');
  };

  const disableDarkMode = () => {
    document.documentElement.classList.remove('dark');
    setIsDarkMode(false);
    localStorage.setItem('darkmode', 'off');
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        id="darkmode-switch"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      Dark Mode
    </label>
  );
}

export default DarkModeToggle;
