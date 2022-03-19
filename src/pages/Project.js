import Slider, { SliderItem } from '../components/slider/Slider';
import { Container } from 'react-bootstrap';
import Text from '../components/Text';
import { ProjectsData } from '../data/projects';
import CardComponent from '../components/card/CardComponent';
import { motion } from 'framer-motion';

function Project() {
  return (
    <Container
      fluid
      className='d-flex flex-column justify-content-center pt-5'
      style={{ height: '100vh', backgroundColor: '#212121' }}
    >
      <Text
        style={{
          fontSize: '40px',
          fontWeight: 'bold',
          alignSelf: 'center',
          color: 'white',
        }}
      >
        My Projects
      </Text>
      <Slider>
        {ProjectsData.map((project, index) => {
          return (
            <SliderItem>
              <CardComponent {...project} key={index} />
            </SliderItem>
          );
        })}
      </Slider>
    </Container>
  );
}

export default Project;
