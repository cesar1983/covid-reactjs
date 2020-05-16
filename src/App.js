import React, { Component } from "react";
import classes from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";

import { fetchData } from "./api";

import covidImage from "./images/covid.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData(this.state.country);
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ country, data: fetchedData });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={classes.container}>
        <img className={classes.image} src={covidImage} alt="Covid 19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
