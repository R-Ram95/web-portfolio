/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

export default function ProjectCard(props) {
    let title = props.title;
    let description = props.description;
    console.log(description)

    let boxStyle = css` box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
                        background-color: rgb(255, 255, 255);
                        height:100%;
                        border-radius: 25px;
                        width:75%
                    `
    
    // open new tab to project location
    const handleClick = () => {
        window.open(props.url)
    }

    return (
        <div className="card mt-6" 
            css={boxStyle}
        >
            <div className="card-content" onClick={handleClick}>
                <div className="content">
                    <h1 className="title is-family-monospace has-text-centered">{title}</h1>
                    <ul>
                        {description.map((bullet) => 
                            <li>
                                {bullet}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
