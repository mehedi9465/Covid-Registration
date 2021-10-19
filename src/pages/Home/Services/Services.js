import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../Custom hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const services = useServices();

    return (
        <div id='services'>
        <h1 className='text-center py-5 mx-auto my-3 border w-25 display-6'>More Services</h1>
                <div className='services'>
                <Container>
                    <Row className='justify-content-center'>
                        {
                            services.map(service => <Service service={service} key={service.id}></Service>)
                        }
                    </Row>
                </Container>
                </div>
        </div>
    );
};

export default Services;