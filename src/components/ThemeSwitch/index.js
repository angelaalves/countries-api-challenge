import React from "react";
import useLocalStorage from "use-local-storage";
export function SwitchTheme() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  return <div></div>;
}
