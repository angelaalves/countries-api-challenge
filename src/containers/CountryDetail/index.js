import React from "react";
import { ThemeContext } from "../../components/ThemeContext";
import { Button } from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import { FaArrowLeft } from "react-icons/fa";
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
            <CountryDetails countryProps={state.country} />
          </div>
        </div>
      }
    />
  );
}
