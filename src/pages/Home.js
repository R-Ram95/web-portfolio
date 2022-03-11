import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import TypeWriter from 'typewriter-effect'
import Text from '../components/Text';

// css styling
const styles = {
    containerStyle: {
        height: "100vh",
        width: "100%",
        backgroundImage: `url("https://images.pexels.com/photos/10622706/pexels-photo-10622706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
    }
}

function Home() {
    return (
        <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={styles.containerStyle}>
            <Text style={{fontSize: "50px", fontWeight: "bold"}}>Hello, my name is Roh.</Text>
            <Text style={{fontSize: "30px"}}>
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
    )
}

export default Home;