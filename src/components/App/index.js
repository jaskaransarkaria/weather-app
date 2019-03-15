import React, { Component } from "react";
//import { Route, Redirect, Link } from "react-router-dom";
import CitiesList from "../CitiesList";
import "./App.css";

const mqUrl = "http://www.mapquestapi.com/geocoding/v1/address?";
const mqKey = "nGPQAMrpbsk44Ulzl9Y1XEkBiDtKX7bV";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourites: [
                "Birmingham,UK",
                "Edinburgh,UK",
                "London,UK",
                "Manchester,UK"
            ],
            selectedCity: "",
            search: "",
            latLongs: []
        };
    }

    getLatLongOfCity = city => {
        fetch(`${mqUrl}key=${mqKey}&location=${city}`).then(res =>
            res
                .json()
                .then(data => data.results[0].locations)
                .then(matches =>
                    matches.filter(item => item.geocodeQuality === "CITY")
                )
                .then(info => info[0].latLng)
                .then(latLong =>
                    this.setState({
                        latLongs: [...this.state.latLongs, latLong]
                    })
                )
        );
    };

    selectCity() {
        this.setState({
            selectedCity: ""
        });
    }

    componentDidMount() {
        this.state.favourites.map(city => this.getLatLongOfCity(city));
    }

    render() {
        return (
            <div className="App">
                Weather
                <CitiesList cities={this.state.cities} />
            </div>
        );
    }
}

export default App;
