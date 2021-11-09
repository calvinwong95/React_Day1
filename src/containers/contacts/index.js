import React from 'react';
import "../contacts/contact.css";

class Contact extends React.Component {
    render() {
        return (
        <div id="contact" className="section contact">
            <div className="contact-text">
                <h1>Contact Us Here!</h1>
            </div>
            <div className="contact-form">
            <form>
                <label className="emailLabel" name="email">Input Your Email: </label>
                <input name="email" type="text"></input>
                <br/>
                <label className="messageLabel" name="message">Insert Your Message: </label>
                <input name="message" type="text"></input>
                <br/>
                <button name="submit" type="submit">Send</button>
            </form>
            </div>
            
        </div>
        );
    }
};

export default Contact;