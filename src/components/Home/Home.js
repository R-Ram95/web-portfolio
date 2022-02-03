/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import About from './About';
import TypeWriter from 'typewriter-effect'


function Home(){

    const style = css`
        background: url('https://images.pexels.com/photos/10622706/pexels-photo-10622706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        display: flex;
        border-bottom: 2px solid black
    `

    return(
        <div>
            <section className="hero is-fullheight"
                css={style}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="text has-text-dark-grey is-size-4 is-family-monospace">
                            <div className="text is-size-2 has-text-weight-bold">
                                Hello, my name is Roh.
                            </div>
                            <TypeWriter
                                onInit={(typewriter)=> 
                                    {
                                        typewriter
                                            .typeString("I am a Software Engineer and Developer.")
                                            .deleteAll()
                                            .typeString("I am a Mechanical Engineer.")
                                            .deleteAll()
                                            .typeString("Welcome to my website!")
                                            .start()
                                    }
                                }
                                options= {{
                                    loop: true
                                }}
                                css={css`font-family: ui-monospace;`}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <About/> 
        </div>
    );
}

export default Home;