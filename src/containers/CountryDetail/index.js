import React, { useEffect, useState } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import { FaArrowLeft } from "react-icons/fa";
import { uriGetCountryBorders } from "../../api/endpoints";
import axios from "axios";

export function CountryDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  const [borders, setBorders] = useState([]);
  const [country, setCountry] = useState(state.country);
  useEffect(() => {
    getCountryBorders();
  }, [country]);
  const renderBackButton = () => {
    return (
      <div className="button-country-detail" onClick={handleGoBack}>
        <FaArrowLeft className="button-icon-country-detail" />
        <text className="button-text-country-detail"> Back</text>
      </div>
    );
  };
  const renderFlag = () => {
    return (
      <img className="flag-country-detail" src={country.flags.png} alt="Flag" />
    );
  };

  const renderDetailLine = (label, detail) => {
    return (
      <text className="label-country-detail">
        {label}
        <text className="detail-country-detail">{detail}</text>
      </text>
    );
  };
  const renderBorders = () => {
    return (
      <div className="borders-row">
        <text className="label-country-detail">Border Countries:</text>
        {borders.map((border) => (
          <div
            className="border-container"
            onClick={() => {
              setCountry(border);
            }}
          >
            <text className="border-text">{border.name.common}</text>
          </div>
        ))}
      </div>
    );
  };
  const getCountryBorders = () => {
    if (country.borders && country.borders.length > 0) {
      axios
        .get(uriGetCountryBorders(country.borders))
        .then((res) => {
          setBorders(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const renderDetails = () => {
    return (
      <div className="detail-wrapper">
        <text className="country-name-detail">{country.name.common} </text>
        <div className="country-detail-page-wrapper">
          <div className="country-detail">
            {renderDetailLine(
              "Native Name:",
              Object.values(country.name.nativeName)[0].common
            )}
            {renderDetailLine("Population:", country.population)}
            {renderDetailLine("Region:", country.region)}
            {renderDetailLine("Sub Region:", country.subregion)}
            {renderDetailLine("Capital:", country.capital)}
          </div>
          <div className="country-detail">
            {renderDetailLine("Top Level Domain:", country.tld[0])}
            {renderDetailLine(
              "Currencies:",
              Object.values(country.currencies)[0].name
            )}
            {renderDetailLine(
              "Languages:",
              Object.values(country.languages).map((language) => {
                return Object.values(country.languages).indexOf(language) +
                  1 ===
                  Object.values(country.languages).length ? (
                  <text>{language}</text>
                ) : (
                  <text>{language}, </text>
                );
              })
            )}
          </div>
        </div>
        {borders.length > 0 && renderBorders()}
      </div>
    );
  };
  return (
    <ThemeContext
      child={
        <>
          {renderBackButton()}
          <div className="country-page-wrapper">
            {renderFlag()}
            {renderDetails()}
          </div>
        </>
      }
    />
  );
}
