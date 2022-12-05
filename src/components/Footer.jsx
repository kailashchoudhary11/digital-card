import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import "./Footer.css";


function Footer() {
    return (
        <footer>
            <div className="footer-img" id="twitter-png">
                <a href="https://twitter.com/codewithkai" target="_blank">
                    <img src={twitter} alt="Twitter" />
                </a>
            </div>
            <div className="footer-img">
                <a href="https://.com" target="_blank">
                <img src={facebook} alt="Facebook" />
                </a>
            </div>
            <div className="footer-img">
                <a href="https://instagram.com/_kailash.11" target="_blank">
                <img src={instagram} alt="Instagram" />
                </a>
            </div>
            <div className="footer-img" id="github-png">
                <a href="https://github.com/kailashchoudhary11" target="_blank">
                    <img  src={github} alt="GitHub" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;