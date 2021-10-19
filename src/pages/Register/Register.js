import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import useAuth from '../../Custom hooks/useAuth';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { registerUser } = useAuth();
    const history = useHistory();
    
    const getName = event => {
        setName(event.target.value);
    }

    const getEmail = event => {
        setEmail(event.target.value);
    }

    const getPassword = event => {
        setPassword(event.target.value);
    }

    const handleRegisterProcess = event => {
        event.preventDefault();
        registerUser(email, password);
        history.push('/')
    }

    return(
        <Row className='justify-content-center py-5 my-5'>
            <Col xs={6} sm={5} md={4} lg={3}>
            <Form className='bg-light p-5' onSubmit={handleRegisterProcess}>
            <Form.Floating className="mb-3">
                <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="example: Mehedi Hasan"
                onBlur={getName}
                />
                <label htmlFor="floatingInputCustom">Name</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
                <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                onBlur={getEmail}
                required
                />
                <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
                <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                onBlur={getPassword}
                required
                />
                <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <p className='mt-3'>Already have an <Link to='/login'>account</Link>?</p>
            </Form>
            </Col>
        </Row>
    );
};

export default Register;