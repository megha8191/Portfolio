import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="bx bx-menu" id="menu-icon"></div>
            <ul className="navbar">
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                {/* <li><a href="#education">Education</a></li> */}
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header