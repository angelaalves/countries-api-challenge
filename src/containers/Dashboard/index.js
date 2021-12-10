import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { uriGetAllCountries, uriGetCountryByName } from "../../api/endpoints";
import { CountryCard } from "../../components/CountryCard";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import useLocalStorage from "use-local-storage";
import "./styles.css";
export const themes = {
  light: "light",
  dark: "dark",
};

//I choose to use Context because I think Redux is a bit overkill for what was needed, this was my first time using context, I usualy work with redux.
export const Context = createContext({
  theme: themes.dark,
  setTheme: () => {},
});

export function Dashboard() {
  const [countriesList, setCountriesList] = useState([]);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [themeState, setThemeState] = useLocalStorage(
    "theme",
    defaultDark ? themes.dark : themes.light
  );

  const setTheme = () => {
    setThemeState(themeState === themes.dark ? themes.light : themes.dark);
  };

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
    <Context.Provider className="wrapper" value={{ themeState, setTheme }}>
      <div className="App" data-theme={themeState}>
        <Header />
        <Search handleSearch={handleSearch} />
        <div className="cards-container">{renderList()}</div>
      </div>
    </Context.Provider>
  );
}
