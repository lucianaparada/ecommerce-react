import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
    return (
        <div>
         <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="p-3" >
            <Navbar.Brand href="#home">VIVERO TOKYO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Plantas</Nav.Link>
                    <Nav.Link href="#">Macetas</Nav.Link>
                    <Nav.Link href="#">Semillas</Nav.Link>
                    <Nav.Link eventKey={2} href="#">Sustratos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>   
        </div>
    )
}

export default NavBar
