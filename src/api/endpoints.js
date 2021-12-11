const baseApi = "https://restcountries.com/v3.1";
export const uriGetAllCountries = () => `${baseApi}/all`;

export const uriGetCountryByName = (name) => `${baseApi}/name/${name}`;

export const uriGetCountriesByRegion = (region) =>
  `${baseApi}/region/${region}`;

export const uriGetCountryBorders = (codes) => {
  let appends = "";
  codes.forEach((code, index) => {
    appends = appends.concat(
      (code + (index + 1 !== codes.length ? "," : "")).toString()
    );
  });

  return `${baseApi}/alpha?codes=${appends}`;
};
