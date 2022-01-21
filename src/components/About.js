/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'


function About(){

    return(
        <div className="hero is-halfheight"
            css={css`
                background-color: rgb(29, 28, 26); 
            `}
        >
        <div className="columns is-centered py-6">
                <div className="column has-text-centered is-one-quarter mr-6">
                    <div className="figure">
                        <img src="profilepicnb.png" alt="" />
                    </div>
                </div>
                <div className="column has-text-left is-half">
                    <div className="content">
                        <h1 className="title has-text-white is-family-monospace">ABOUT ME</h1>
                        <p className='has-text-white has-text-justified is-family-monospace is-1'>
                            Hello! My name is Rohinesh and I am currently pursuing a Masters in Software Engineering at the University of Calgary.
                            I graduated with a Bachelors in Mechanical Engineering with distinction from the University of Alberta in 2018.
                            After graduating, I worked in the manufacturing industry designing equipment, managing projects, and troubleshooting issues during time-sensitive, multi-million dollar projects.
                            I enjoyed my role as a design engineer, however, I've always had a passion for software and the innovative medium it provides. During my free time after work, I would tinker 
                            with embedded programming projects until I decided to pivot and pursue a career in software. Aside from coding, I also enjoy playing soccer and video games.
                            <br /><br/>
                            My experience in the manufacturing industry taught me to pay attention to details, how to work under pressure, and above all else, how to problem solve under pressure.
                            I subscribe to the First Principles approach to problem solving in which complicated problems are broken down into basic, fundamental elements, and then reassembled from the ground up.
                            This problem solving technique has allowed me to present fundamentally sound and creative solutions to my clients and colleagues.
                            <br /><br />
                            The source of my motivation is my pursuit of knowledge and desire to deliver functional, well designed products that exceed expectations. I am passionate about Machine Learning, Big Data,
                            and DevOps, and my current goal is to join a fast-paced company that enables me to learn and grow in these fields.

                            Thank you so much for browsing my website and feel free to contact me.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default About;