import React, { useEffect, useState, useContext } from "react";

import "./styles.css";
import { Context } from "../../containers/Dashboard";
export function ThemeSwitch() {
  return (
    <Context.Consumer>
      {({ theme, setTheme }) => (
        <button onClick={setTheme} data-theme={theme}>
          Dark Mode
        </button>
      )}
    </Context.Consumer>
  );
}
