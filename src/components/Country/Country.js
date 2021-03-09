
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const {name, flag} = props.countryInfo;
    return (
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={flag} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                A country is a distinct territorial body or political entity. It is often referred to as the land of an individual's birth, residence or citizenship.
                </Card.Text>
                <Link to={'/country/'+name}><Button variant="primary">Show Detail</Button></Link>
            </Card.Body>
            </Card>
    );
};

export default Country;