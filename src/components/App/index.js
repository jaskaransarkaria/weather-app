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
            search: ""
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
                .then(data =>
                    console.log({ ...data[0].adminArea5, ...data[0].latLng })
                )
        );
    };

    selectCity() {
        this.setState({
            selectedCity: ""
        });
    }

    render() {
        return (
            <div className="App">
                Weather
                <CitiesList
                    cities={this.state.favourites.map(city =>
                        this.getLatLongOfCity("Manchester,UK")
                    )}
                />
            </div>
        );
    }
}

export default App;
