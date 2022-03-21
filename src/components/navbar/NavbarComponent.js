import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss';
import Text from '../Text';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

const styles = {
  textStyle: {
    fontSize: '20px',
  },
};

function NavbarComponent() {
  return (
    <Navbar
      bg='light'
      sticky='top'
      expand='lg'
      style={{ borderBottom: '2px solid black' }}
    >
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse className='justify-content-center'>
        <Nav variant='pills' defaultActiveKey='/'>
          <Nav.Link
            as={Link}
            to='/'
            eventKey='/'
            className='me-3'
            onClick={() => {
              scroller.scrollTo('home');
            }}
          >
            <Text style={styles.textStyle}> Home </Text>
          </Nav.Link>

          <Nav.Link
            className='me-3'
            eventKey='about'
            onClick={() => {
              scroller.scrollTo('about', {
                offset: -70,
              });
            }}
          >
            <Text style={styles.textStyle}> About </Text>
          </Nav.Link>

          <Nav.Link
            as={Link}
            to='/projects'
            className='me-3'
            eventKey='projects'
          >
            <Text style={styles.textStyle}> Projects </Text>
          </Nav.Link>

          <Nav.Link as={Link} to='/contact' className='me-3' eventKey='contact'>
            <Text style={styles.textStyle}> Contact </Text>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
