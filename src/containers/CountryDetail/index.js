import React, { useState } from "react";
import { Header } from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

export function CountryDetail() {
  const { state } = useLocation();
  const { country, theme } = state;
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
    <div className="App" data-theme={theme}>
      <Header />
      {renderBackButton()}
      {renderFlag()}
    </div>
  );
}
