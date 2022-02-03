/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import { motion } from "framer-motion"

export default function ProjectCard(props) {

    let boxStyle = css` box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
                        background-color: rgb(255, 255, 255);
                        height:250px;
                        border-radius: 0px;
                        width:60%;
                        display: flex;
                        flex-direction: row;
                    `
    
    // open new tab to project location
    const handleClick = () => {
        window.open(props.url)
    }
    

    return (
        <motion.div className="card mt-6" 
            css={boxStyle}
            whileHover={{ 
                scale: 1.1,
                boxShadow: "10px 10px 10px rgb(0,0,0)"
            }}
        >
            <img src="" alt="" />
            <div className="card-content" onClick={handleClick}>
                <div className="content">
                    <h1 className="title is-family-monospace has-text-centered">{props.title}</h1>
                    <ul>
                        {props.description.map((bullet) => 
                            <li>
                                {bullet}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
