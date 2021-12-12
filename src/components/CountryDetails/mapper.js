export const countryDetails = (country) => {
  return [
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
};
