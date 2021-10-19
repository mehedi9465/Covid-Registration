import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../../images/header/3353700.png';

const Footer = () => {
    return (
        <div className='sticky-bottom bg-dark text-light p-5'>
            <Container>
            <Row>
                <Col>
                    <Row>
                        <div>
                            <Image className='me-2' src={logo} width='40'/>
                            Covid Registration
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <small className='w-75 d-block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam maiores quo velit dolores odio commodi sequi cumque voluptatem modi corporis officia maxime! Nemo, neque.</small>
                        </div>
                        <div className='d-flex w-25 justify-content-between mt-2'>
                            <a href=""><Image src='https://cdn-icons-png.flaticon.com/32/145/145802.png'/></a>
                            <a className='mx-2' href=""><Image src='https://cdn-icons-png.flaticon.com/32/145/145812.png'/></a>
                            <a className='mx-2' href=""><Image src='https://cdn-icons-png.flaticon.com/32/145/145807.png'/></a>
                            <a href=""><Image src='https://cdn-icons-png.flaticon.com/32/270/270798.png'/></a>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <p className='text-end'>Address</p>
                    <small className='text-end d-block'>375 Mirhajirbag, Jatrabari, <br /> Dhaka, Bangladesh</small>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Footer;