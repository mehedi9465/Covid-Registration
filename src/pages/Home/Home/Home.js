import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import EffectState from '../../EffectState/EffectState';
import About from '../About/About';
import Banner from '../Banner/Banner';
import EffectStatus from '../Effect Status/EffectStatus';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import TotalCases from '../Total Cases/TotalCases';
import './Home.css'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <EffectStatus></EffectStatus>
            <TotalCases></TotalCases>
            <About></About>
            {/* <EffectState></EffectState> */}
            <Footer></Footer>
            <HashLink id='float-btn' to='/#banner'><Image src='https://cdn-icons-png.flaticon.com/64/892/892692.png'/></HashLink>
        </div>
    );
};

export default Home;