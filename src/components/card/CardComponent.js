import React from 'react';
import { Card } from 'react-bootstrap';
import Text from '../Text';

const styles = {
  cardStyle: {
    minWidth: '75%',
    maxWidth: '100%',
    minHeight: '75%',
    whiteSpace: 'normal',
    borderColor: 'black',
    borderRadius: '25px',
  },
};

const CardComponent = (props) => {
  let { title, description, url } = props;
  return (
    <Card style={styles.cardStyle} onClick={() => window.open(url)}>
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
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
