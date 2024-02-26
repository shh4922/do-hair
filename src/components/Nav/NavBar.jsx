import React from "react";
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
function NavBar() {
    return (
        <nav className="navbar">
            <h1>D.o Hair</h1>
            <ul className="links">
                <li>
                    <a href="https://www.instagram.com/d.o__hair/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="link-insta" />
                    </a>
                </li>
                <li>
                    <a href="https://booking.naver.com/booking/13/bizes/919089/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCalendar} className="link-insta" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
