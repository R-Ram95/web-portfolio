import { Container, Image, Stack, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TypeWriter from 'typewriter-effect';
import Text from '../../components/Text';
import TechStackColumn from '../../components/TechStackColumn';
import LogoImage from '../../components/LogoImage';
import './home.css';

// css styling
const styles = {
  homeStyle: {
    height: '100vh',
    width: '100%',
    backgroundImage: `url("https://images.pexels.com/photos/10622706/pexels-photo-10622706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
    backgroundSize: '100% 100%',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    borderBottom: '4px solid #000000',
  },
  imageStyle: {
    borderStyle: 'solid',
    borderColor: '#3D3D3D',
    borderWidth: '3px',
  },
  techStackHeaderStyle: {
    fontColor: '##FFFFFF',
  },
};

function Home() {
  return (
    <>
      <Container
        fluid
        id='home'
        className='d-flex flex-column justify-content-center align-items-center'
        style={styles.homeStyle}
      >
        <Text style={{ fontSize: '50px', fontWeight: 'bold' }}>
          Hello, my name is Roh.
        </Text>
        <Text style={{ fontSize: '30px' }}>
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .typeString('I am a Software Engineer and Developer.')
                .deleteAll()
                .typeString('I am a Mechanical Engineer.')
                .deleteAll()
                .typeString('Welcome to my site!')
                .start();
            }}
            options={{ loop: true }}
          />
        </Text>
      </Container>

      <Container className='pt-5 pb-5' id='about'>
        <Stack direction='horizontal' gap={5}>
          <Image
            className='rounded-circle'
            src={process.env.PUBLIC_URL + '/profilepicnb1.png'}
            style={styles.imageStyle}
          />
          <div>
            <Text style={{ fontSize: '40px', fontWeight: 'bold' }}>
              About Me
            </Text>
            <Text style={{ fontSize: '20px' }}>
              I am a <strong> hard working</strong> and{' '}
              <strong> passionate </strong> developer set to graduate from an
              M.Eng in Software Engineer at the University of Calgary in May
              2022. I did my undergrad in Mechanical Engineering at the
              University of Alberta where I graduated with distinction. I love
              all things tech related and frequently participate in hackathons
              and pursue extracurricular projects. My interests include full
              stack development, devops, and machine learning. Thank you so much
              for browsing my website, and please make sure to checkout my
              projects!
            </Text>
          </div>
        </Stack>
      </Container>

      <section className='section-tech'>
        <section-header>
          <Text
            style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}
          >
            My Tech Stack
          </Text>
        </section-header>

        <Container className='pt-2'>
          <Row>
            <TechStackColumn title='Front End'>
              <LogoImage src={'/react.png'} />
              <LogoImage src={'/html.png'} />
              <LogoImage src={'/css.png'} />
              <LogoImage src={'/bootstrap.png'} />
              <LogoImage src={'/redux.png'} />
            </TechStackColumn>
            <TechStackColumn title='Back End'>
              <LogoImage src={'/django.png'} />
              <LogoImage src={'/express.png'} />
              <LogoImage src={'/spring.png'} />
              <LogoImage src={'/node.png'} />
            </TechStackColumn>
            <TechStackColumn title='Data Bases'>
              <LogoImage src={'/sql.png'} />
              <LogoImage src={'/mongo.png'} />
            </TechStackColumn>
            <TechStackColumn title='Infrastructure'>
              <LogoImage src={'/docker.png'} />
              <LogoImage src={'/heroku.png'} />
            </TechStackColumn>
            <TechStackColumn title='Languages'>
              <LogoImage src={'/python.png'} />
              <LogoImage src={'/java.png'} />
              <LogoImage src={'/javascript.png'} />
              <LogoImage src={'/cpp.png'} />
            </TechStackColumn>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
