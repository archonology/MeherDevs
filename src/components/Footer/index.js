import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <>
            <Navbar  variant="dark" className="p-2 pb-3 footer" fixed="bottom">
                <Container fluid >

                    <Nav className="justify-content-center flex-grow-1 pe-3">

                        <Nav.Link href="#top">Return to Top</Nav.Link>
                        <Nav.Link href="/" className="meherdevs">Reed Meher | 2023</Nav.Link>

                    </Nav>

                </Container>
            </Navbar>
        </>
    );
}

export default Footer;