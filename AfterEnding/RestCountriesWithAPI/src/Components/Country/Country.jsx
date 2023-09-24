// import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);

    const {name, population, region, area, flags} = props.country;

    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p><code>Area: {area}</code></p>
        </div>
    );
};

export default Country;