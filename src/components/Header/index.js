import React from "react";
import "./styles.css";
import { ThemeSwitch } from "../ThemeSwitch";
export function Header() {
  return (
    <div className="header-wrapper">
      <text className="title">Where in the world?</text>
      <ThemeSwitch />
    </div>
  );
}
