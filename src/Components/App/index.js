import React, { Component } from "react";
import Input from "../Input";
import CitiesList from "../CitiesList";
import css from "./App.module.css";

const mqUrl = "http://www.mapquestapi.com/geocoding/v1/address?";
const mqKey = "nGPQAMrpbsk44Ulzl9Y1XEkBiDtKX7bV";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourites: [
                "London,UK",
                "Birmingham,UK",
                "Manchester,UK",
                "Edinburgh,UK"
            ],
            selectedCity: "",
            search: null,
            latLongs: []
        };
    }

    getLatLongOfCity(city) {
        fetch(`${mqUrl}key=${mqKey}&location=${city}`)
            .then(res => res.json())
            .then(data => data.results[0].locations)
            .then(matches =>
                matches.filter(item => item.geocodeQuality === "CITY")
            )
            .then(info =>
                this.setState({
                    latLongs: [...this.state.latLongs, info[0].latLng]
                })
            );
    }

    selectCity = index => {
        this.setState(() => ({
            selectedCity: index
        }));
    };

    onSearch = search => {
        this.setState(() => ({
            search: search
        }));
        this.getLatLongOfCity(`${search},UK`);
        this.setState(() => ({
            search: null
        }));
    };

    componentDidMount() {
        this.state.favourites.map(city => this.getLatLongOfCity(city));
    }

    render() {
        return (
            <div className={css.app}>
                <h1>Can I Wear Shorts Today?</h1>
                {/* {!this.state.search ? ( */}
                <>
                    <Input onSearch={this.onSearch} />
                    <CitiesList
                        cities={this.state.latLongs}
                        onSelect={() => this.selectCity}
                    />
                </>
                {/* ) : (
                    <Details seachCoords={this.state.search} />
                )} */}
            </div>
        );
    }
}

export default App;
