import React from 'react';
import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Banner.css'

const Banner = () => {
    return (
        <div id='banner' className='banner d-flex flex-column justify-content-center align-items-center'>
            <h1 className='display-4 text-dark'>Stay Home Stay Safe</h1>
            <div>
                <Button as={HashLink} to='/#services' variant='outline-dark' className='m-3 rounded-pill'>Get Started</Button>
            </div>
        </div>
    );
};

export default Banner;