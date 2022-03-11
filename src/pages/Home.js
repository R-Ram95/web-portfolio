import { Container, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import TypeWriter from 'typewriter-effect'

// css styling
const styles = {
    containerStyle: {
        height: "100vh",
        width: "100%",
        backgroundImage: `url("https://images.pexels.com/photos/10622706/pexels-photo-10622706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
    },
    titleStyle: {
        fontFamily: "monospace",
        fontSize: "50px",
        color:"#3D3D3D",
        fontWeight: "bold"

    },
    typeStyle: {
        fontFamily: "monospace",
        fontSize: "30px",
        color:"#3D3D3D"
    }
}

function Home() {
    return (
        <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={styles.containerStyle}>
            <div style={styles.titleStyle}> Hello, my name is Roh.</div>
            <div style={styles.typeStyle}>
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
            </div>
        </Container>
    )
}

export default Home;