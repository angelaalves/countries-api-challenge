import React, { useEffect, useState, useContext } from "react";
import styles from "./styles.css";
import { FaRegMoon } from "react-icons/fa";
import { Context } from "../ThemeContext";
export function ThemeSwitch() {
  return (
    <Context.Consumer className="wrapper">
      {({ theme, setTheme }) => (
        <text className="switch" onClick={setTheme} data-theme={theme}>
          <FaRegMoon className="icon" />
          <text>Dark Mode</text>
        </text>
      )}
    </Context.Consumer>
  );
}
