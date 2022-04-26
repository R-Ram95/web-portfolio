import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Text from '../Text';

const styles = {
  cardStyle: {
    minWidth: '90%',
    maxWidth: '90%',
    whiteSpace: 'normal',
    borderColor: 'black',
    borderRadius: '25px',
  },
};

const CardComponent = (props) => {
  let { title, description, url } = props;
  return (
    <Card style={styles.cardStyle}>
      <Card.Body style={{ maxWidth: '90%' }}>
        <Card.Title>
          <Text style={{ fontWeight: 'bold', fontSize: '30px' }}>{title}</Text>
        </Card.Title>
        <Card.Text>
          <ul>
            {description.map((bullet, index) => {
              return (
                <Text key={index} style={{ fontSize: '20px' }}>
                  <li>{bullet}</li>
                </Text>
              );
            })}
          </ul>
        </Card.Text>
        <Card.Footer
          className='d-flex justify-content-center'
          style={{ backgroundColor: 'white', width: '100%' }}
        >
          <Button
            style={{
              backgroundColor: 'black',
              borderColor: 'black',
              borderRadius: '20px',
            }}
            onClick={() => window.open(url)}
          >
            GitHub
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
