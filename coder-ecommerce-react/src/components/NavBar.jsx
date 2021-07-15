import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <div>
         <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="navLinkContainer p-3" >
            <Navbar.Brand href="#home">VIVERO TOKYO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="navbarItem" href="#">Plantas</Nav.Link>
                    <Nav.Link className="navbarItem" href="#">Macetas</Nav.Link>
                    <Nav.Link className="navbarItem" href="#">Semillas</Nav.Link>
                    <Nav.Link className="navbarItem" href="#">Sustratos</Nav.Link>
                    <Nav.Link className="navbarItem" href="#"><CartWidget /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>   
        </div>
    )
}

export default NavBar
