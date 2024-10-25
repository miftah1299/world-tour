import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry }) => {
    // console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };
    console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited && "visited"}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="flag" />
            <p>Population: {population}</p>
            <p>Area: {area} km²</p>
            <p>
                <small>Code: {cca3}</small>
            </p>

            <button>Mark Visited</button>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Going"}
            </button>

            {visited ? (
                <p>I have visited {name?.common}</p>
            ) : (
                "I will visit soon"
            )}
        </div>
    );
};

export default Country;
