/**
 * Generic text element with monospace font and dark gray colour
 */
import React from "react";


const styles = {
    text: {
        fontFamily: "monospace",
        color:"#3D3D3D",
    }
}

function Text(props){

    return (
        <div style={{...styles.text, ...props.style}}> {props.children}</div>
    )
}

export default Text;
