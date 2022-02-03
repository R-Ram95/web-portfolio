/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import {HashLink as Link} from 'react-router-hash-link'
import { useNavigate } from 'react-router' 

function Navbar() {

    
    let buttonStyle = css`
                            border: none;
                            background-color: #FFFFFF;
                            font-size: 17px;
                            padding:15px;
                        `
    let textStyle = css`
                            color:black;
                        `
    
    // navigate back to home page
    let navigate = useNavigate()
    const handleClick = () => {
        navigate('/web-portfolio/')
    }

    return(
        <nav className="navbar is-fixed-top" css={css`border-bottom: 3px solid black`}>
            <div className="container">
                <div className="navbar-brand" onClick={handleClick}>
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
                        <button css={buttonStyle}>
                            <Link smooth to='web-portfolio/#about'css={textStyle}>
                                ABOUT
                            </Link>
                        </button>
                        <button css={buttonStyle}>
                            <Link to="web-portfolio/projects" css={textStyle}>
                                PROJECTS
                            </Link>
                        </button>
                        <button css={buttonStyle}>
                            <Link to="education" css={textStyle}>
                                EDUCATION
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;