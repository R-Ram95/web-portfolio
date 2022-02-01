/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'


function About(){

    return(
        <div className="hero is-fullheight"
            css={css`
                background-color: rgb(29, 28, 26); 
            `}
        >
        <div className="columns is-centered is-vcentered py-6" id="about">
                <div className="column has-text-centered is-one-quarter mr-6">
                    <figure className="image">
                        <img className="" src="profilepicnb.png" alt=""/>
                    </figure>
                </div>
                <div className="column has-text-left is-half">
                    <div className="box">
                    <div className="content">
                        <h1 className="title is-family-monospace">ABOUT ME</h1>
                        <p className='is-size-4 is-family-monospace is-1 has-text-justified'>
                            I am a Software Engineering graduate student at the University of Calgary 
                            and I have a Mechanical Engineering degree from the University of Alberta.
                            I have three years of experience designing equipment and
                            managing projects in the manufacturing industry. I love all things tech with a particularly keen
                            interest in full stack development. Checkout my projects to learn more about my work.
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