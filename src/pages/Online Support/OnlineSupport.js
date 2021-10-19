import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const OnlineSupport = () => {
    const [status, setStatus] = useState(false);
    const { serviceID } = useParams();
    const history = useHistory();

    const checkStatus = e => {
        setStatus(e.target.checked);
    }

    const handleAcceptBTN = () => {
        history.push(`/service/${serviceID}/onlineSupport/confirmed`)
    }
    
    return (
        <div>
            <Form className='my-5 w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Skypee IdD</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Number" />
            </Form.Group>
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

export default OnlineSupport;