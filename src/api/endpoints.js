export const uriGetAllCountries = () => `https://restcountries.com/v3.1/all`;

export const uriGetCountryByName = (name) =>
  `https://restcountries.com/v3.1/name/${name}`;

export const uriGetCountriesByRegion = (region) =>
  `https://restcountries.com/v3.1/region/${region}`;
