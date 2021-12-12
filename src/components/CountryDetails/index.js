import React, { useEffect, useState } from "react";
import "./styles.css";
import { Button } from "../Button";
import axios from "axios";
import { uriGetCountryBorders } from "../../api/endpoints";
import { countryDetails } from "./mapper.js";
export function CountryDetails({ countryProps }) {
  const [borders, setBorders] = useState([]);
  const [country, setCountry] = useState(countryProps);

  useEffect(() => {
    getCountryBorders();
  }, [country]);

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

  const renderDetails = (details, separator) => {
    const countryDetailsFirst = details.slice(0, separator);
    const countryDetailsSecond = details.slice(separator);
    return (
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

  return (
    <>
      <img className="flag-country-detail" src={country.flags.png} alt="Flag" />
      <div className="detail-wrapper">
        <text className="country-name-detail">{country.name.common} </text>
        {renderDetails(countryDetails(country), 5)}
        {borders.length > 0 && renderBorders()}
      </div>
    </>
  );
}
