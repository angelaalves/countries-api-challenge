import React, { useEffect, useState } from "react";
import "./styles.css";
export function Button({ text, onClick, iconLeft, iconRight }) {
  return (
    <div className="button" onClick={onClick}>
      <text className="button-text">
        {iconLeft && iconLeft}
        {text} {iconRight && iconRight}
      </text>
    </div>
  );
}
