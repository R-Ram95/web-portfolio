/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

function Navbar() {

    let textColour = 'has-text-black'

    return(
        <nav className="navbar is-fixed-top is-transparent" css={css`
            border-bottom: 2px solid black
        `}>
            <div className="container">
                <div className="navbar-brand">
                <figure className="image" css={
                    css`
                        width:300px
                    `
                    }>
                        <img className="is-rounded" src="logo.png" alt=""/>
                    </figure>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <a href="#about" className='navbar-item'{... + textColour}>
                            ABOUT
                        </a>
                        <a href="projects" className="navbar-item"{... + textColour}>
                            PROJECTS
                        </a>
                        <a href="education" className="navbar-item"{... + textColour}>
                            EDUCATION
                        </a>
                        <a href="experience" className="navbar-item"{... + textColour}>
                            EXPERIENCE
                        </a>
                        <a href="contact" className="navbar-item"{... + textColour}>
                            CONTACT
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;