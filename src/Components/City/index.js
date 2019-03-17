import React from "react";
import css from "./City.module.css";

const owKey = "0c4d91745066d7d7ca0063db373fc131";
const owUrl = "https://api.openweathermap.org/data/2.5/weather?";

const grabFromUrl = ({ lat, lng }) =>
    fetch(`${owUrl}lat=${lat}&lon=${lng}&units=metric&APPID=${owKey}`).then(
        res => res.json()
    );

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        grabFromUrl(this.props).then(data =>
            this.setState({
                data
            })
        );
    }
    render() {
        //console.log(this.state.data);
        if (!this.state.data.main) {
            return <div className={css.loading}>Loading...</div>;
        }
        return (
            <li className={css.cityItem} onClick={this.props.onSelect}>
                <p className={css.cityName}>
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
                />
            </li>
        );
    }
}

export default City;
