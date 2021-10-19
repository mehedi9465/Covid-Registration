import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Custom hooks/useAuth';

const DeliverMedicine = () => {
    const [status, setStatus] = useState(false);
    const { serviceID } = useParams();
    const history = useHistory();
    const { user } = useAuth();

    const checkStatus = e => {
        setStatus(e.target.checked);
    }

    const handleAcceptBTN = () => {
        history.push(`/service/${serviceID}/devliverMedicine/confirmed`)
    }

    return (
        <div>
            <Form className='my-5 w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={user.displayName}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Loaction</Form.Label>
                <Form.Control type="text" placeholder="Enter Location" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Paracetamol" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                <Form.Check type="checkbox" label="Remdesivir" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                <Form.Check type="checkbox" label=" hydroxychloroquine" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox3">
                <Form.Check type="checkbox" label="Lopinavir" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox4">
                <Form.Check type="checkbox" label="Tocilizumab" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckboxMain">
                    <Form.Check type="checkbox" label="I agree to the Terms of Services and Privacy policy" onClick={checkStatus}/>
            </Form.Group>
                {
                    status ? <Button onClick={handleAcceptBTN} className='w-25' variant='outline-primary' >Accept</Button> : <Button className='w-25' variant='outline-primary' disabled>Accept</Button>
                }
            </Form>
        </div>
    );
};

export default DeliverMedicine;