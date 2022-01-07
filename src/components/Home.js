/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

let i = 0;
let txt = "Hello! My name is Rohinesh and I am a Software and Mechanical Engineer";
let speed = 100;

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
    `

    return(
        <section className="hero is-large"
            css={style}>
            <div className="py-2 hero-head">
                <div className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                        <figure className="image" css={
                            css`
                                width:300px
                            `
                            }>
                                <img className="is-rounded" src="logow.png" alt=""/>
                            </figure>
                        </div>
                        <div className="navbar-menu">
                            <div className="navbar-end">
                                <a href="" className="navbar-item has-text-white">
                                    HOME
                                </a>
                                <a href="" className='navbar-item has-text-white'>
                                    ABOUT
                                </a>
                                <a href="" className="navbar-item has-text-white">
                                    EDUCATION
                                </a>
                                <a href="" className="navbar-item has-text-white">
                                    PROJECTS
                                </a>
                                <a href="" className="navbar-item has-text-white">
                                    EXPERIENCE
                                </a>
                                <a href="" className="navbar-item has-text-white">
                                    CONTACT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="text has-text-white is-size-3" id="intro" css={
                        css`
                            font-family:serif
                        `
                    }/>
                </div>
            </div>
            
        </section>
    );
}

export default Home;