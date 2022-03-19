/**
 * Main controller to control which item is displayed
 */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Slider.css';
import Text from '../Text';

export const SliderItem = ({ children, width }) => {
  return (
    <div className='slider-item' style={{ width: width }}>
      {children}
    </div>
  );
};

const styles = {
  btn: {
    backgroundColor: 'black',
    marginLeft: '30px',
    minWidth: '5vw',
    borderColor: 'black',
    borderRadius: '25px',
  },
};

const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className='slider'>
      <div
        className='slider-inner'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>

      <div className='indicators'>
        <Button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          style={styles.btn}
        >
          <Text style={{ color: 'white', fontSize: '20px' }}>Previous</Text>
        </Button>
        <Button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          style={styles.btn}
        >
          <Text style={{ color: 'white', fontSize: '20px' }}>Next</Text>
        </Button>
      </div>
    </div>
  );
};

export default Slider;
