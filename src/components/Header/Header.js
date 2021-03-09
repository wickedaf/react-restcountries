import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="App-header">
            <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}><h1>React RestCountries</h1></Link>
        </div>
    );
};

export default Header;