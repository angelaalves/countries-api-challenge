import React from "react";
import "./styles.css";
import { Context } from "../../containers/Dashboard";
import { useNavigate } from "react-router-dom";
export function CountryCard({ country }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/detail");
  };
  return (
    <div className="card" onClick={handleClick}>
      <div className="flag-container">
        <img className="flag" src={country.flags.png} alt="Flag" />
      </div>
      <div className="card-info">
        <text className="country-name">{country.name.common} </text>
        <div className="card-details">
          <text className="label">
            Population: <text className="detail">{country.population}</text>
          </text>
          <text className="label">
            Region:<text className="detail"> {country.region}</text>
          </text>
          <text className="label">
            Capital: <text className="detail">{country.capital}</text>
          </text>
        </div>
      </div>
    </div>
  );
}
