import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useVaccines from '../../Custom hooks/useVaccines';

const VaccineDetails = () => {
    const [matchedVaccine, setMatchedVaccine] = useState([]);
    const [status, setStatus] = useState(false);
    const { vaccineID, serviceID } = useParams();
    const history = useHistory();
    const vaccines = useVaccines();
    useEffect(() => {
        const matched = vaccines.find(vaccine => vaccine.id === vaccineID)
        setMatchedVaccine(matched);
    }, [vaccines])

    const checkStatus = event => {
        setStatus(event.target.checked)
    }

    const handleAcceptButton =  () => {
        history.push(`/service/${serviceID}/vaccine/${vaccineID}/accept`);
    }

    console.log(matchedVaccine);
    return (
        <div className='pb-5'>
        <Container>
            <Row className='justify-content-center mt-5 text-center'>
                <Col lg={8}>
                <Image src={matchedVaccine?.img} thumbnail fluid/>
                <p className='display-6'>{matchedVaccine?.name}</p>
                <p><b>{matchedVaccine?.name}</b> is <b>{matchedVaccine?.vaccine_type}</b> typed vaccine. It's basically developed by <b>{matchedVaccine?.developed}</b>. It's Success rate is <b>{matchedVaccine?.effectiveness}</b>. <br /> <br />
                <b>Some more Details about {matchedVaccine?.name}</b>
                <br />
                Trade Name: {matchedVaccine?.trade_name} <br />
                CAS Number: {matchedVaccine?.CAS_number} <br />
                Drug Bank: {matchedVaccine?.drug_bank} <br />
                Total Received: {matchedVaccine?.total_received} million</p>
                </Col>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to the Terms of Services and Privacy Policy" onClick={checkStatus}/>
                    </Form.Group>
                {
                    status ? <Button onClick={handleAcceptButton} className='w-25' variant='outline-primary' >Accept</Button> : <Button className='w-25' variant='outline-primary' disabled>Accept</Button>
                }
                </div>
            </Row>
        </Container>
        </div>
    );
};

export default VaccineDetails;