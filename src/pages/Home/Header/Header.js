import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Custom hooks/useAuth';
import logo from '../../../images/header/3353700.png';
import logOutLogo from '../../../images/header/4034536.png'

const Header = () => {

    const { user, logOut } = useAuth();
    console.log(user);
    return (
            <>
            <Navbar bg="light" variant="light" expand='sm' sticky='top'>
                <Container>
                <Navbar.Brand href="#home"><Link to='/' className='text-decoration-none text-dark fs-5'><img className='me-2' src={logo} alt="" width='40'/>Covid Registration</Link></Navbar.Brand>
                <NavbarToggle aria-controls='responsiveNav'/>
                <NavbarCollapse id='responsiveNav'>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/#effectStatus">Vaccine Effect</Nav.Link>
                    <Nav.Link as={HashLink} to="/#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/#totalCases">Total Cases</Nav.Link>
                    <Nav.Link as={HashLink} to="/#about">About</Nav.Link>
                    {
                    user.email &&
                    <div>
                        {
                        user?.photoURL ?
                        <Nav.Link><Image className='rounded-circle' src={user?.photoURL} height='28'/></Nav.Link> 
                        :
                        <Nav.Link><Image className='rounded-circle' src='https://cdn-icons-png.flaticon.com/512/236/236831.png' height='28'/></Nav.Link>
                        
                        }
                    </div>
                    }
                    {
                    user?.email && 
                        <Nav.Link onClick={logOut}><Image src={logOutLogo} height='20'/></Nav.Link>
                    }
                    { 
                    !user?.email &&
                    <>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                    </>
                    }
                
                </Nav>
                </NavbarCollapse>
                </Container>
            </Navbar>   
            </>
    );
};

export default Header;