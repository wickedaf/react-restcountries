import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css';

const Home = () => {
    const [countries,  setCountries] = useState([]);
    
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h1 className="App">Country List</h1> 
            <h3 className="App">Total Country {countries.length}</h3> 
            <div className="country-container">
            {
                countries.map(country => <Country key={country.alpha3Code} countryInfo={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Home;