import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const TotalCases = () => {
    return (
        <div id='effectStatus' className=''>
            <div  className='bg-light text-dark '>
            <h1 className='text-center py-5 mx-auto my-3 border w-25 display-6'>Vaccine Effects on Human</h1>
           <div className='bg-info text-white'>
           <Container className='py-5'>
                <Row className='justify-content-center'>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                <h1><CountUp start={0} end={63} suffix='%' duration={2} delay={2}/></h1>
                    <p>Oxford-AstraZeneca</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                <h1><CountUp start={0} end={92} suffix='%' duration={2} delay={2}/></h1>
                    <p>Spuntik-V</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                <h1><CountUp start={0} end={79} suffix='%' duration={2} delay={2}/></h1>
                    <p>Sinopharm BIBP</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                <h1><CountUp start={0} end={95} suffix='%' duration={2} delay={2}/></h1>
                    <p>Pfizer–BioNTech</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                <h1><CountUp start={0} end={50} suffix='%' duration={2} delay={2}/></h1>
                    <p>CoronaVac</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                <h1><CountUp start={0} end={66} suffix='%' duration={2} delay={2}/></h1>
                    <p>Janssen</p>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} className='text-center my-2'>
                    <h1><CountUp start={0} end={94} suffix='%' duration={2} delay={2}/></h1>
                    <p>Moderna</p>
                </Col>
                </Row>
            </Container>
           </div>
        </div>
        </div>
    );
};

export default TotalCases;