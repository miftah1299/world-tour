import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
    // console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };

    return (
        <div className="country">
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="flag" />
            <p>Population: {population}</p>
            <p>Area: {area} km²</p>
            <p>
                <small>Code: {cca3}</small>
            </p>
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
