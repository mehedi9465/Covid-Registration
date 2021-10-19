import React from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const Service = ({ service }) => {
    const { id, service_Name, img, description } = service;
    return (
        <Col xs={12} sm={6} md={4} lg={4} className='text-center'>
            <Card style={{ width: '18rem' }} className='my-5 w-100'>
            <Card.Img variant="top" src={img} height='250'/>
            <Card.Body>
                <Card.Title>{service_Name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/service/${id}`}><Button variant="outline-primary">Select</Button></Link>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;