import React, { useState } from 'react';
import { Container, Form, Card, Button, Alert } from 'react-bootstrap';
import Text from '../components/Text';

function Contact() {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    setShow(true);
  };

  const SubmitAlert = () => {
    return (
      <Alert variant='success' onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          <Text>Message Submitted!</Text>
        </Alert.Heading>
        <p>
          <Text>
            Thank you for your message, I will get back to you as soon as I can!
          </Text>
        </p>
      </Alert>
    );
  };

  return (
    <Container
      fluid
      className='d-flex flex-column justify-content-center align-items-center'
      style={{ height: '100vh', backgroundColor: '#212121' }}
    >
      <Text style={{ fontSize: '30px', color: 'white', fontWeight: 'bold' }}>
        Contact Me
      </Text>
      <Card
        className='mb-2'
        style={{ width: '25%', padding: '1rem', borderRadius: '20px' }}
      >
        <Form>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Enter Name' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter Email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicMessage'>
            <Form.Label>Message</Form.Label>
            <Form.Control as='textarea' placeholder='Enter your message' />
          </Form.Group>
          <div className='d-flex justify-content-center'>
            <Button
              style={{
                backgroundColor: 'black',
                borderColor: 'black',
                borderRadius: '20px',
              }}
              onClick={handleSubmit}
            >
              Send
            </Button>
          </div>
        </Form>
      </Card>
      {show && <SubmitAlert />}
    </Container>
  );
}

export default Contact;
