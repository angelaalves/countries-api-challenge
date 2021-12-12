import React, { useEffect, useState } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import { Button } from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import { FaArrowLeft } from "react-icons/fa";

import axios from "axios";
import { CountryDetails } from "../../components/CountryDetails";

export function CountryDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <ThemeContext
      child={
        <div className="country-detail-wrapper">
          <div className="back-button-wrapper">
            <Button
              text={"Back"}
              onClick={handleGoBack}
              iconLeft={<FaArrowLeft className="button-icon-country-detail" />}
            />
          </div>
          <div className="country-content-wrapper">
            <img
              className="flag-country-detail"
              src={state.country.flags.png}
              alt="Flag"
            />
            <CountryDetails countryProps={state.country} />
          </div>
        </div>
      }
    />
  );
}
