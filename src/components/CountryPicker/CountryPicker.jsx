import React, { useState, useEffect } from "react";

import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";

import classes from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApiCountries = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchApiCountries();
  }, [setFetchedCountries]);

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
        variant="filled"
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
