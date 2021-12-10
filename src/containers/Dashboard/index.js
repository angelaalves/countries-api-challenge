import React, { useState, useEffect } from "react";
import axios from "axios";
import { uriGetAllCountries } from "../../api/endpoints";
import { CountryCard } from "../../components/CountryCard";
import { ThemeSwitch } from "../../components/ThemeSwitch";
import "./styles.css";

export function Dashboard(prop) {
  const [countriesList, setCountriesList] = useState([]);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [themeState, setThemeState] = useState("light");
  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    axios.get(uriGetAllCountries()).then((res) => {
      handleCountries(res.data);
    });
  };

  const handleCountries = (countries) => {
    let newCountriesArray = [];
    countries.map((country) =>
      newCountriesArray.push({
        flags: country.flags,
        name: country.name,
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital,
        currencies: country.currencies,
        languages: country.languages,
        tld: country.tld,
        borders: country.borders,
      })
    );
    setCountriesList(newCountriesArray);
  };
  const renderList = () => {
    countriesList?.map((country) => (
      <CountryCard country={country}></CountryCard>
    ));
  };

  return (
    <div className="app" data-theme={themeState}>
      <h1>Dashboard</h1>
      <ThemeSwitch />
      {renderList()}
    </div>
  );
}
