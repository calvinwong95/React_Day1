import React from 'react';
import "./home.css";
import HomeImg from "../../assets/homepage.jpg";

class Home extends React.Component {
    render() {
        return (
        <div id="home" className="section home">
            <div className="home-text">
                <h1>Generating Sales With Ease</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className="home-img">
                <img src={HomeImg} alt="homepageimg"/>
            </div>
            
            
        </div>
        );
    }
};



export default Home;