import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link,} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.jpg'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top rounded-circle"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand className="fs-3 logo-tittle" href="#home">Travel <span>World</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-light" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#team">Our Team</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#about">About Us</Nav.Link>
                        {
                            user?.email&&<Nav.Link className="text-light" as={Link} to="/myOrders">My Orders</Nav.Link>
                        }
                        {
                            user?.email&&<Nav.Link className="text-light" as={Link} to="/manageOrders">Manage All Orders</Nav.Link>
                        }
                        {
                            user?.email&&<Nav.Link className="text-light" as={Link} to="/addService">Add Service</Nav.Link>
                        }
                        
                        {
                            user?.email ? <Button onClick={logOut} variant="outline-light">Logout</Button> :
                                <Nav.Link className="text-light" as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            <a href="#login" className="ms-2">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;