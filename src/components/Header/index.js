import React, { useEffect, useState, useContext } from "react";
import "./styles.css";
import { Context } from "../../containers/Dashboard";
import { ThemeSwitch } from "../ThemeSwitch";
export function Header() {
  return (
    <Context.Consumer>
      {({ theme }) => (
        <div className="headerWrapper" data-theme={theme}>
          <text className="title" data-theme={theme}>
            Where in the world?
          </text>
          <ThemeSwitch />
        </div>
      )}
    </Context.Consumer>
  );
}
