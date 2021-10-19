import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const EffectStatus = () => {
    return (
        <div id='effectStatus' className='bg-info text-light py-5'>
            <Container className='py-5'>
                <Row className='justify-content-center'>
                <Col xs={12} sm={6} md={4} className='text-center my-2'>
                    <h1 className='fisplay-6'>241,933,023</h1>
                    <p>Total Cases</p>
                </Col>
                <Col xs={12} sm={6} md={4} className='text-center my-2'>
                    <h1 className='fisplay-6'>4,921,673</h1>
                    <p>Total Death</p>
                </Col>
                <Col xs={12} sm={6} md={4} className='text-center my-2'>
                    <h1 className='fisplay-6'>219,267,916</h1>
                    <p>Total Recovered</p>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EffectStatus;