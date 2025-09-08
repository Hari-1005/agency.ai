import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);
  
  return (
    <button className="p-1.5 border border-gray-500 rounded-full cursor-pointer">
      <img
        className=""
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        alt="theme-icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </button>
  );
};

export default ThemeToggleBtn;
