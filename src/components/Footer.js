import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";



function Footer() {
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-left">
          Madalina Zamfira
        </div>
        <div className="footer-right">
          <a href="mailto:madalina.zamfira@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.linkedin.com/in/madalina-zamfira/">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/zamfiram">
          <FontAwesomeIcon icon={faGithub} />
          </a>
          <p>Last updated on November 29th, 2020</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
