import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Custom hooks/useAuth';

const Ambulance = () => {
    const [status, setStatus] = useState(false);
    const { serviceID } = useParams();
    const history = useHistory();
    const { user } = useAuth();

    const checkStatus = e => {
        setStatus(e.target.checked);
    }

    const handleAcceptBTN = () => {
        history.push(`/service/${serviceID}/ambulance/confirmed`)
    }
    return (
        <div>
            <Form className='my-5'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={user.displayName} required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Number</Form.Label>
                <Form.Control type="number" placeholder="Enter phone number" required/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" required/>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose..." required>
                    <option>Choose...</option>
                    <option>Barisal</option>
                    <option>Chittagong</option>
                    <option>Khulna</option>
                    <option>MymenSingh</option>
                    <option>Rajshahi</option>
                    <option>Rangpur</option>
                    <option>Sylhet</option>
                </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to the Terms of Services and Privacy policy" onClick={checkStatus}/>
            </Form.Group>
                {
                    status ? <Button onClick={handleAcceptBTN} className='w-25' variant='outline-primary' >Accept</Button> : <Button className='w-25' variant='outline-primary' disabled>Accept</Button>
                }
            </Form>
        </div>
    );
};

export default Ambulance;