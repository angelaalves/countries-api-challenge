import React, { useEffect, useState } from "react";

import "./styles.css";
export function ThemeSwitch() {
  const [theme, setTheme] = useState("light");
 
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("hey", newTheme);
    setTheme(newTheme);
  };
  return (
    <div>
      <button onClick={switchTheme}>
        <text>Dark Mode</text>
      </button>
    </div>
  );
}
