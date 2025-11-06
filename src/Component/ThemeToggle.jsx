import React, { useEffect, useState } from "react";


const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center py-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleToggle}
          className="sr-only peer"
        />
        <div className="w-14 h-8 bg-yellow-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-gray-700 transition-colors duration-300"></div>
        <span
          className={`
            absolute left-1 top-1 w-6 h-6 bg-white rounded-full
            flex items-center justify-center
            transition-transform duration-300
            ${theme === "dark" ? "translate-x-6 bg-gray-900" : ""}
          `}
        >
          {theme === "dark" ? (
            // Moon icon
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            // Sun icon
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="4" />
              <g>
                <line x1="10" y1="2" x2="10" y2="4" stroke="currentColor" strokeWidth="2"/>
                <line x1="10" y1="16" x2="10" y2="18" stroke="currentColor" strokeWidth="2"/>
                <line x1="4" y1="10" x2="2" y2="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="18" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="5.64" y1="5.64" x2="4.22" y2="4.22" stroke="currentColor" strokeWidth="2"/>
                <line x1="14.36" y1="14.36" x2="15.78" y2="15.78" stroke="currentColor" strokeWidth="2"/>
                <line x1="5.64" y1="14.36" x2="4.22" y2="15.78" stroke="currentColor" strokeWidth="2"/>
                <line x1="14.36" y1="5.64" x2="15.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
              </g>
            </svg>
          )}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;