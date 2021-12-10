import React from "react";

export function CountryCard({ country }) {
  return (
    <div>
      <text>{country.name}</text>
      <text>Population:{country.population}</text>
      <text>region:{country.region}</text>
      <text>capital:{country.capital}</text>
    </div>
  );
}
