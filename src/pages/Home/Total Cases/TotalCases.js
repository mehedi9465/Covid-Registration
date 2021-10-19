import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TotalCases = () => {
    return (
        <div>
            <div id='totalCases' className='bg-light text-dark py-5'>
            <Container className='py-5'>
                <Row className='justify-content-center'>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                    <h1 className='fisplay-6'>63%</h1>
                    <p>Oxford-AstraZeneca</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                    <h1 className='fisplay-6'>92%</h1>
                    <p>Spuntik-V</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                    <h1 className='fisplay-6'>79%</h1>
                    <p>Sinopharm BIBP</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                    <h1 className='fisplay-6'>95%</h1>
                    <p>Pfizer–BioNTech</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                    <h1 className='fisplay-6'>50%</h1>
                    <p>CoronaVac</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                    <h1 className='fisplay-6'>66%</h1>
                    <p>Janssen</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                    <h1 className='fisplay-6'>94%</h1>
                    <p>Moderna</p>
                </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default TotalCases;