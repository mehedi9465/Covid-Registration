import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import useAuth from '../../Custom hooks/useAuth';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { SignInWithGoogle, SignInWithGithub, SignInWithFacebook, loginWithEmailAndPass, setStatus, setError, Error } = useAuth();
    const history = useHistory();
    
    const getEmail = event => {
        setEmail(event.target.value);
    }

    const getPassword = event => {
        setPassword(event.target.value);
    }

    const googleSignIn = () => {
        SignInWithGoogle()
        .then(result => {
            console.log(result.user);
            setStatus(false);
            history.push('/');    
        })
    }

    const githubSignIn = () => {
        SignInWithGithub()
        .then(result => {
            console.log(result.user);
            setStatus(false);
            history.push('/');    
        })
    }

    const facebookSignIn = () => {
        SignInWithFacebook()
        .then(result => {
            console.log(result.user);
            setStatus(false);
            history.push('/');    
        })
    }

    const handleLoginProcess = event => {
        event.preventDefault();
        loginWithEmailAndPass(email, password).then(() => {
            setStatus(false);
            history.push('/'); 
        }).catch(e => {
            setError(e.message);
        });
    }

    return (
        <>
        <Row className='justify-content-center py-5 my-5'>
            <Col xs={6} sm={5} md={4} lg={3}>
            <Form className='bg-light p-5' onSubmit={handleLoginProcess}>
            <Form.Floating className="mb-3">
                <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                onBlur={getEmail}
                />
                <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                onBlur={getPassword}
                />
                <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <p className='mt-2 pb-2'>Create an <Link to='/register'>account</Link>?</p>
            <p className='text-danger'>{Error}</p>
            <div className='flex-wrap'>
            <p className='mt-4'> Or Sign In With</p>
                <Button className='me-2 danger' variant='outline-danger' onClick={googleSignIn}>Google <img src="https://cdn-icons-png.flaticon.com/16/2702/2702602.png" alt=""/></Button>
                <Button className='me-2' variant='outline-dark' onClick={githubSignIn}>GitHub <img src="https://cdn-icons-png.flaticon.com/16/733/733609.png" alt="" /></Button>
                <Button className='me-2' variant='outline-primary' onClick={facebookSignIn}>Facebook <img src="https://cdn-icons-png.flaticon.com/16/2111/2111393.png" alt="" /></Button>
            </div>
            </Form>
            </Col>
        </Row>
        </>
    );
};

export default Login;