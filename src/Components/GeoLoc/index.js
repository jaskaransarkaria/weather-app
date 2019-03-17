import React from "react";
import css from "./GeoLoc.module.css";

//const owKey = "0c4d91745066d7d7ca0063db373fc131";
//const owUrl = "https://api.openweathermap.org/data/2.5/weather?";

class GeoLoc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            geoPerms: "",
            geoLoc: {},
            data: {}
        };
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                geoLoc: {
                    lat: position.coords.latitude.toFixed(5),
                    lng: position.coords.longitude.toFixed(5)
                }
            });
        });
    }

    // componentDidMount() {
    //     fetch(
    //         `${owUrl}lat=${this.state.geoLoc.lat}&lon=${
    //             this.state.geoLoc.lng
    //         }&units=metric&APPID=${owKey}`
    //     ).then(res =>
    //         res.json().then(data =>
    //             this.setState({
    //                 data
    //             })
    //         )
    //     );
    // }

    render() {
        if (!this.state.data.main) {
            return (
                <li className={css.cityItem} onClick={this.queryLocation}>
                    <p className={css.cityName}>Get Location</p>
                    <p className={css.mainDesc} />
                    <p className={css.temp} />
                    <span role="img" aria-label="pin" className={css.icon}>
                        📍
                    </span>
                </li>
            );
        }
        return (
            <li className={css.cityItem} onClick={this.props.onSelect}>
                {/* <p className={css.cityName}>
                    {this.state.data.name.split(" ").slice(-1)[0]}
                </p>
                <p className={css.mainDesc}>
                    {this.state.data.weather[0].main}
                </p>
                <p className={css.temp}>
                    {Math.round(this.state.data.main.temp)}*C
                </p>
                <img
                    src={`http://openweathermap.org/img/w/${
                        this.state.data.weather[0].icon
                    }.png`}
                    alt={this.state.data.weather[0].main}
                    className={css.icon}
                /> */}
            </li>
        );
    }
}

export default GeoLoc;
