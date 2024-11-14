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
            <img className="country-flag" src={flags.png} alt="flag" />
            <div className="country-details">
                <p>Population: {population}</p>
                <p>Area: {area} km²</p>
                <p>
                    <small>Code: {cca3}</small>
                </p>

                <div className="btn-container">
                    <button className="btn">Mark Visited</button>
                    <button className="btn" onClick={handleVisited}>
                        {visited ? "Visited" : "Going"}
                    </button>
                </div>

                {visited ? (
                    <p>I have visited {name?.common}</p>
                ) : (
                    <p>I will visit soon</p>
                )}
            </div>
        </div>
    );
};

export default Country;
