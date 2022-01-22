/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

let i = 0;
let txt = "My name is Roh and I am a Software Engineer.";
let speed = 50;

function typeWriter(){
    if(i < txt.length){
        document.getElementById("intro").innerHTML += txt.charAt(i)
        i++
        setTimeout(typeWriter,speed);
    }
}

window.addEventListener("load", typeWriter)

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
        <section className="hero is-fullheight"
            css={style}>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="text has-text-dark-grey is-size-2 has-text-weight-bold" id="intro" css={
                        css`
                            font-family:courier
                        `
                    }/>
                </div>
            </div>
            
        </section>
    );
}

export default Home;