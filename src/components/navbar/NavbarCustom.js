import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss'
import Text from '../Text';
import { Link } from 'react-router-dom';

const styles = {
    textStyle: {
        fontSize: "20px"
    }
}

function NavbarCustom() {
    return (
        <Navbar bg='light' sticky='top' expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='justify-content-center'>
                <Nav variant="pills" defaultActiveKey="/">
                    <Nav.Link as={ Link } to="/" eventKey="/" className="me-3" >
                        <Text style={styles.textStyle}> Home </Text>
                    </Nav.Link >
                    <Nav.Link as={ Link } to="/about" className="me-3" eventKey="about">
                        <Text style={styles.textStyle}> About </Text>
                    </Nav.Link>
                    <Nav.Link as={ Link } to="/projects" className="me-3" eventKey="projects">
                        <Text style={styles.textStyle}> Projects </Text>
                    </Nav.Link>
                    <Nav.Link as={ Link } to="/education" className="me-3" eventKey="education">
                        <Text style={styles.textStyle}> Education </Text>
                    </Nav.Link>
                    <Nav.Link as={ Link } to="/contact" className="me-3" eventKey="contact">
                        <Text style={styles.textStyle}> Contact </Text>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavbarCustom;