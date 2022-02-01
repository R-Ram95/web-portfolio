/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import About from './About';
import TypeWriter from 'typewriter-effect'


// let i = 0;
// let txt = "My name is Roh and I am a Software Engineer.";
// let speed = 50;

// // type writer effect
// function typeWriter(){
//     if(i < txt.length){
//         document.getElementById("intro").innerHTML += txt.charAt(i)
//         i++
//         setTimeout(typeWriter,speed);
//     }
// }
// // 
// window.addEventListener("load", typeWriter)

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
                        <div className="text has-text-dark-grey is-size-2 has-text-weight-bold">
                            <TypeWriter className="text has-text-dark-grey is-size-2 is-family-monospace"
                                onInit={(typewriter)=> 
                                    {
                                        typewriter
                                            .typeString("Hello, my name is Roh.")
                                            .deleteAll()
                                            .typeString("I am a Software Engineer.")
                                            .deleteAll()
                                            .typeString("Welcome to my Portfolio!")
                                            .start()
                                    }
                                }
                                options= {{
                                    loop: true
                                }}
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