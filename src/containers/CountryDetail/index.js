import React, { useState } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

export function CountryDetail() {
  const { state } = useLocation();
  const { country } = state;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const renderBackButton = () => {
    return <button onClick={handleClick}>Back</button>;
  };
  const renderFlag = () => {
    console.log("country", country);
    // return <img className="flag" src={country.flags.png} alt="Flag" />;
  };
  return (
    <ThemeContext
      child={
        <>
          {renderBackButton()}
          {renderFlag()}
        </>
      }
    />
  );
}
