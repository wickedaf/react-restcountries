import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [countryInfo, setCountryInfo] = useState([]);
    
    
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/name/'+countryName;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountryInfo(data[0]))
    }, [countryName]);

    if(countryInfo.length === 0){
        return <h2 className="App">Data Loading...</h2>
    }
    
    const {name, area, population} = countryInfo;
    const currency = countryInfo.currencies[0].name;
    console.log(countryInfo);
    
    
    return (
        <div className="App">
            <h1>Country Detail</h1>
            <h3>Name: {name}</h3>
            <h3>Currency: {currency}</h3>
            <h3>Area: {area}</h3>
            <h3>Population: {population}</h3>
        </div>
    );
};

export default CountryDetail;