import { Image } from 'react-bootstrap'

function LogoImage(props){

    return(
        <Image
            src={process.env.PUBLIC_URL + props.src}
            style={{width: '50%', maxWidth:'10vw', paddingBottom:'10px'}}
        />
    )
};

export default LogoImage;