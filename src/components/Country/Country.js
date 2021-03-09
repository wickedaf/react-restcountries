import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const {name, flag} = props.countryInfo;
    return (
        <div>
            <img src={flag} alt=""/>
            <h4>Name: {name}</h4>
            <Link to={'/country/'+name}><button>Show Detail</button></Link>
        </div>
    );
};

export default Country;