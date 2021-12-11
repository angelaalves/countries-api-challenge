import React, { useEffect, useState } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import { Button } from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import { FaArrowLeft } from "react-icons/fa";
import { uriGetCountryBorders } from "../../api/endpoints";
import axios from "axios";

export function CountryDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [borders, setBorders] = useState([]);
  const [country, setCountry] = useState(state.country);

  useEffect(() => {
    getCountryBorders();
  }, [country]);

  const handleGoBack = () => {
    navigate("/");
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
      <div className="borders">
        <text className="label-country-detail">Border Countries:</text>
        <div className="borders-row">
          {borders.map((border) => (
            <Button
              text={border.name.common}
              onClick={() => {
                setCountry(border);
              }}
            />
          ))}
        </div>
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

  const countryDetailsFirst = [
    {
      label: "Native Name:",
      data: Object.values(country.name.nativeName)[0].common,
    },
    { label: "Population:", data: country.population },
    { label: "Region:", data: country.region },
    { label: "Sub Region:", data: country.subregion },
    { label: "Capital:", data: country.capital },
  ];

  const countryDetailsSecond = [
    {
      label: "Top Level Domain:",
      data: country.tld[0],
    },
    { label: "Currencies:", data: Object.values(country.currencies)[0].name },
    {
      label: "Languages:",
      data: Object.values(country.languages).map((language) => {
        return Object.values(country.languages).indexOf(language) + 1 ===
          Object.values(country.languages).length ? (
          <text>{language}</text>
        ) : (
          <text>{language}, </text>
        );
      }),
    },
  ];

  const renderDetails = () => {
    return (
      <div className="detail-wrapper">
        <text className="country-name-detail">{country.name.common} </text>
        <div className="country-detail-page-wrapper">
          <div className="country-detail">
            {countryDetailsFirst.map((detail) =>
              renderDetailLine(detail.label, detail.data)
            )}
          </div>
          <div className="country-detail">
            {countryDetailsSecond.map((detail) =>
              renderDetailLine(detail.label, detail.data)
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
          <Button
            text={"Back"}
            onClick={handleGoBack}
            iconLeft={<FaArrowLeft className="button-icon-country-detail" />}
          />
          <div className="country-page-wrapper">
            {renderFlag()}
            {renderDetails()}
          </div>
        </>
      }
    />
  );
}
