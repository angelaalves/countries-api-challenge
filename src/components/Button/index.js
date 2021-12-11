import React, { useEffect, useState } from "react";
import "./styles.css";
export function Button({ text, onClick, iconLeft, iconRight }) {
  return (
    <div className="button" onClick={onClick}>
      {iconLeft && iconLeft}
      <text className="button-text"> {text}</text>
      {iconRight && iconRight}
    </div>
  );
}
