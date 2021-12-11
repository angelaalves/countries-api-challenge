import React, { useState, useEffect, createContext } from "react";
import useLocalStorage from "use-local-storage";
import { Header } from "../Header";
import "./styles.css";
export const themes = {
  light: "light",
  dark: "dark",
};

//I choose to use Context because I think Redux is a bit overkill for what was needed, this was my first time using context, I usualy work with redux.
export const Context = createContext({
  theme: themes.dark,
  setTheme: () => {},
});

//Created this Wrapper To pass Context to All app and to prevent repeating the Header code
export function ThemeContext({ child }) {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [themeState, setThemeState] = useLocalStorage(
    "theme",
    defaultDark ? themes.dark : themes.light
  );

  const setTheme = () => {
    setThemeState(themeState === themes.dark ? themes.light : themes.dark);
  };

  return (
    <Context.Provider className="wrapper" value={{ themeState, setTheme }}>
      <div className="App" data-theme={themeState}>
        <Header />
        {child}
      </div>
    </Context.Provider>
  );
}
