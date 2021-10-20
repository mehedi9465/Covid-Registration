import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const EffectStatus = () => {
    return (
        <div id='totalCases' >
        <h1 className='text-center py-5 mx-auto my-3 border w-25 display-6'>Total Cases</h1>
           <div className='bg-info text-light '>
           <Container className='py-5'>
                <Row className='justify-content-center'>
                <Col xs={12} sm={6} md={4} className='text-center my-2'>
                    <h1><CountUp start={0} end={241933023} separator=',' duration={3} delay={2}/></h1>
                    <p>Total Cases</p>
                </Col>
                <Col xs={12} sm={6} md={4} className='text-center my-2'>
                    <h1><CountUp start={0} end={4921673} separator=',' duration={3} delay={2}/></h1>
                    <p>Total Death</p>
                </Col>
                <Col xs={12} sm={6} md={4} className='text-center my-2'>
                    <h1><CountUp start={0} end={219267916} separator=',' duration={3} delay={2}/></h1>
                    <p>Total Recovered</p>
                </Col>
                </Row>
            </Container>
           </div>
        </div>
    );
};

export default EffectStatus;