import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { uriGetAllCountries, uriGetCountryByName } from "../../api/endpoints";
import { CountryCard } from "../../components/CountryCard";
import { Search } from "../../components/Search";
import "./styles.css";
import { ThemeContext } from "../../components/ThemeContext";

export function Dashboard() {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    axios.get(uriGetAllCountries()).then((res) => {
      handleCountries(res.data);
    });
  };

  const handleSearch = (name) => {
    //Does this verification so you can get all the results again
    if (name.length === 0) {
      getAllCountries();
    } else {
      axios.get(uriGetCountryByName(name)).then((res) => {
        handleCountries(res.data);
      });
    }
  };
  //I choose to deconstruct the array elements because we don't need all the information. And this way is more efficient
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
  const renderList = () =>
    countriesList?.map((country, index) => (
      <CountryCard key={index} country={country} />
    ));

  return (
    <ThemeContext
      child={
        <>
          <Search handleSearch={handleSearch} />
          <div className="cards-container">{renderList()}</div>
        </>
      }
    />
  );
}
