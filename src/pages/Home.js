import { Container, Image, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import TypeWriter from 'typewriter-effect'
import Text from '../components/Text';

// css styling
const styles = {
    homeStyle: {
        height: "100vh",
        width: "100%",
        backgroundImage: `url("https://images.pexels.com/photos/10622706/pexels-photo-10622706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        borderBottom: "4px solid black"
    },
    aboutStyle: {

    },
    imageStyle: {
        borderStyle: "solid",
        borderColor: "#3D3D3D",
        borderWidth: "3px"
    }
}

function Home() {
    return (
        <>
            <Container fluid 
                id='home' 
                className="d-flex flex-column justify-content-center align-items-center" 
                style={styles.homeStyle}
            >
                <Text style={{ fontSize: "50px", fontWeight: "bold" }}>Hello, my name is Roh.</Text>
                <Text style={{ fontSize: "30px" }}>
                    <TypeWriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("I am a Software Engineer and Developer.")
                                .deleteAll()
                                .typeString("I am a Mechanical Engineer.")
                                .deleteAll()
                                .typeString("Welcome to my site!")
                                .start()
                        }}
                        options={{ loop: true }}
                    />
                </Text>
            </Container>

            <Container className="mt-5 mb-5" id='about'>
                <Stack direction='horizontal' gap={5}>
                    <Image 
                        className='rounded-circle' 
                        src={process.env.PUBLIC_URL + '/profilepicnb1.png'} 
                        style={styles.imageStyle} 
                    />
                    <div>
                        <Text style={{ fontSize: '40px', fontWeight: 'bold' }}>About Me</Text>
                        <Text style={{ fontSize: '20px' }}>
                            I am a <strong> hard working</strong> and <strong> passionate </strong> developer set to graduate from an M.Eng in Software Engineer
                            at the University of Calgary in May 2022. I did my undergrad in Mechanical Engineering
                            at the University of Alberta where I graduated with distinction. I love all things
                            tech related and frequently participate in hackathons and pursue extracurricular projects. My interests include
                            full stack development, devops, and machine learning. Thank you so much for browsing my website, and please make sure
                            to checkout my projects!
                        </Text>
                    </div>
                </Stack>
            </Container>
        </>
    )
}

export default Home;