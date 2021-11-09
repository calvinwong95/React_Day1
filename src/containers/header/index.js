import React from 'react';
import Rlogo from "../../logo.svg";
import "./header.css";

class Header extends React.Component {
    render() {
        return (
        <header>
            <img id="logo" src={Rlogo} alt="logo" />
            <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#work">Work</a></li>
            </ul>
            </nav>
        </header>
        
            


        
        );
    }
};


export default Header;