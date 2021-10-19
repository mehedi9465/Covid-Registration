import React from 'react';
import { Card, Col, Button, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Vaccine = ({ vaccine }) => {
    const { id, name, vaccine_type, trade_name, CAS_number, drug_bank, img } = vaccine;
    const { serviceID } = useParams();
    return (
        <Col xs={12} sm={6} md={6} lg={4} className='mb-4 '>
            <Card style={{ width: '18rem' }} className='my-4 gx-4 w-100'>
            <Card.Img variant="top" src={img} height='250'/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <ListGroup variant="flush">
                <ListGroup.Item><small>Type: <b>{ vaccine_type }</b></small></ListGroup.Item>
                <ListGroup.Item>Trade Name: {trade_name}</ListGroup.Item>
                <ListGroup.Item>CAS Number: {CAS_number}</ListGroup.Item>
                <ListGroup.Item>Drug Bank: {drug_bank}</ListGroup.Item>
            </ListGroup>
                </Card.Text>
                <Link to={`/service/${serviceID}/vaccine/${id}`}><Button variant="outline-primary">Consume</Button></Link>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Vaccine;