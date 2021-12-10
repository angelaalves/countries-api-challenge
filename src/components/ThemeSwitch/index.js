import React, { useEffect, useState, useContext } from "react";
import styles from "./styles.css";
import { FaRegMoon } from "react-icons/fa";
import { Context } from "../../containers/Dashboard";
export function ThemeSwitch() {
  return (
    <Context.Consumer className="wrapper">
      {({ theme, setTheme }) => (
        <text className="button" onClick={setTheme} data-theme={theme}>
          <FaRegMoon className="icon" />
          <text>Dark Mode</text>
        </text>
      )}
    </Context.Consumer>
  );
}
