import React from 'react';
import { Image } from 'react-bootstrap';

const ReceiveAmbulance = () => {
    return (
        <div>
            <h1 className='text-center display-6 mt-4'>We will be there within 10 min</h1>
            <video className='my-5 py-5 d-block mx-auto' src='https://i.imgur.com/n3fU9pS.mp4' autoPlay loop/>
        </div>
    );
};

export default ReceiveAmbulance;