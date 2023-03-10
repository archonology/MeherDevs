import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <>
            <Navbar bg="transparent" variant="dark" className="p-2 mb-3 footer" sticky="bottom">
                <Container fluid >

                    <Nav className="justify-content-center flex-grow-1 pe-3">

                        <Nav.Link href="#top" className="meherdevs">MeherDevs | 2023</Nav.Link>

                    </Nav>

                </Container>
            </Navbar>
        </>
    );
}

export default Footer;