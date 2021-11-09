import React from 'react';
import "./about.css";
import AboutImg from "../../assets/about.jpg";

class About extends React.Component {
    render() {
        return (
        <div id="about" className="section about">
            <div className="about-img">
                <img src={AboutImg} alt="aboutimg"/>
            </div>
            <div className="about-text">
                <h1>About Us</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            
            
            
        </div>
        );
    }
};

export default About;