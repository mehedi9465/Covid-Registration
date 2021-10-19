import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import Ambulance from '../../Ambulance/Ambulance';
import DeliverMedicine from '../../Deliver Medicine/DeliverMedicine';
import Isolation from '../../Isolation/Isolation';
import OnlineSupport from '../../Online Support/OnlineSupport';
import Sanitization from '../../Sanitization/Sanitization';
import Vaccines from '../../Vaccines/Vaccines';

const ServiceDetails = () => {
    const { serviceID } = useParams();
    console.log(serviceID);
    if(serviceID == 1){
        return (
            <div>
                <Container>
                  <Vaccines></Vaccines>
                </Container>
            </div>
        );
    }

     else if(serviceID == 2){
        return (
            <div>
                <Container>
                  <Isolation></Isolation>
                </Container>
            </div>
        );
    }

    else if(serviceID == 3){
        return (
            <div>
                <Container>
                  <OnlineSupport></OnlineSupport>
                </Container>
            </div>
        );
    }

    else if(serviceID == 4){
        return (
            <div>
                <Container>
                  <DeliverMedicine></DeliverMedicine>
                </Container>
            </div>
        );
    }

    else if(serviceID == 5){
        return (
            <div>
                <Container>
                  <Ambulance></Ambulance>
                </Container>
            </div>
        );
    }

    else if(serviceID == 6){
        return (
            <div>
                <Container>
                  <Sanitization></Sanitization>
                </Container>
            </div>
        );
    }
};

export default ServiceDetails;