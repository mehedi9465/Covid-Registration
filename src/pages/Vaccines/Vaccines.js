import { React } from 'react';
import { Container, Row } from 'react-bootstrap';
import useVaccines from '../../Custom hooks/useVaccines';
import Vaccine from '../Vaccine/Vaccine';
import EffectState from '../EffectState/EffectState';

const Vaccines = () => {
    const vaccines = useVaccines();
    console.log(vaccines);

    return (
        <Container>
        <h1 className='text-center display-6 mb-3 mt-5'>Available Vaccines</h1>
            <Row className='justify-content-center'>
               {
                   vaccines.map(vaccine => <Vaccine vaccine={vaccine} key={vaccine.id} />)
               }
            </Row>
            <EffectState></EffectState>
        </Container>
    );
};

export default Vaccines;