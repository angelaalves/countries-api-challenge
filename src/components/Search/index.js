import React, { useState, useEffect } from "react";
import "./styles.css";
import { FaSearch } from "react-icons/fa";
export function Search({ handleSearch }) {
  const [countryName, setCountryName] = useState("");

  //Needs to run everytime the country name changes so it doenst get stuck with the initial value
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        handleSearch(countryName);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [countryName]);

  return (
    <div className="search-container">
      <FaSearch className="icon-search" />
      <input
        className="input"
        value={countryName}
        placeholder={"Search for a country..."}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
        type="text"
        name="country"
      ></input>
    </div>
  );
}
