import { Col } from 'react-bootstrap'
import Text from './Text';


function TechStackColumn(props){
    return(
        
        <Col 
            className='d-flex flex-column align-items-center mx-2' 
            style={{border:'2px solid white', borderRadius:'10px'}}
        >
            <Text style={{
                fontSize:'25px',
                color:"#FFFFFF",
                marginBottom:'10px',
                fontWeight: 'bold'
            }}>
                {props.title}
            </Text>
            {props.children}
        </Col>
    )
};

export default TechStackColumn;