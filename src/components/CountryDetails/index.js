import React, { useEffect, useState, useContext } from "react";
import styles from "./styles.css";
import { Button } from "../Button";
import axios from "axios";
import { uriGetCountryBorders } from "../../api/endpoints";
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

  const countryDetails = [
    {
      label: "Native Name:",
      data: Object.values(country.name.nativeName)[0].common,
    },
    { label: "Population:", data: country.population },
    { label: "Region:", data: country.region },
    { label: "Sub Region:", data: country.subregion },
    { label: "Capital:", data: country.capital },
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
    <div className="detail-wrapper">
      <text className="country-name-detail">{country.name.common} </text>
      {renderDetails(countryDetails, 5)}
      {borders.length > 0 && renderBorders()}
    </div>
  );
}
