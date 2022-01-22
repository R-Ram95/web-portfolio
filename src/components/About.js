/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'


function About(){

    return(
        <div id="about" className="hero is-fullheight"
            css={css`
                background-color: rgb(29, 28, 26); 
            `}
        >
        <div className="columns is-centered py-6">
                <div className="column has-text-centered is-one-quarter mr-6">
                    <div className="figure">
                        <img className="is-rounded" src="profilepicnb.png" alt="" />
                    </div>
                </div>
                <div className="column has-text-left is-half">
                    <div className="box">
                    <div className="content">
                        <h1 className="title is-family-monospace">ABOUT ME</h1>
                        <p className='is-size-4 is-family-monospace is-1'>
                            I am a Software Engineering graduate student at the University of Calgary 
                            and I have a Mechanical Engineering degree from the University of Alberta.
                            I have three years of experience designing equipment and
                            managing projects in the manufacturing industry. My passions include full stack development,
                            machine learning, and embedded systems. I am currently seeking full stack development positions.
                            Thank you for browsing my portfolio.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;