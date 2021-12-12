import React, { useEffect, useState } from "react";
import "./styles.css";
export function Button({ text, onClick, icon }) {
  return (
    <div className="button" onClick={onClick}>
      <text className="button-text">
        {icon && icon}
        {text}
      </text>
    </div>
  );
}
