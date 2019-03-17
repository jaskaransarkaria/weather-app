import React from "react";
import GeoLoc from "../GeoLoc";
import City from "../City";
import css from "./CitiesList.module.css";

const CitiesList = ({ cities, onSelect }) => {
    //console.log(cities);
    return (
        <ul className={css.listContainer}>
            <GeoLoc />
            {cities.map((city, index) => (
                <City
                    lat={city.lat}
                    lng={city.lng}
                    key={index}
                    onSelect={() => onSelect(index)}
                />
            ))}
        </ul>
    );
};

export default CitiesList;
