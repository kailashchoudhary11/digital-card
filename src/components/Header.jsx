import React from "react";
import profile from "../assets/dp.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <img src={profile} alt="Profile Picture" />
            <h2>Kailash Choudhary</h2>  
            <h3>Django Developer</h3>
            <p>kai.website</p>
            <div id="contact-btn">
                <a href="mailto:kainewhere@gmail.com" target="_blank">
                <button id="email"> <img src={mail} alt="Mail" /> Email </button>
                </a>
                <a href="https://www.linkedin.com/in/kailash-choudhary-9b0859218/" target="_blank">
                <button id="linkedin"> <img src={linkedin} alt="LinkedIn" /> LinkedIn </button>
                </a>
            </div>
        </header>     
    );
}