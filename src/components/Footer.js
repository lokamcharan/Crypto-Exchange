import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const FooterName = () => {
  return (
    <footer className="footer">
      <div>
        <h2>Crypto-Exchange-View</h2>
        <div className="contact">
          <h3>Contact Us</h3>
          <h5>Name: Charan</h5>
          <h5>Phone: 9573469756</h5>
          <h5>Email: lokamcharan@gmail.com</h5>
        </div>
        <div className="links">
          <h2 className="follow"><span>Follow</span></h2>
          <a
            href="https://github.com/lokamcharan/crypto-exchange"
            className="fa fa-github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Cryptocurrency"
            className="fa fa-google"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a
            href="https://www.linkedin.com/in/lokam-charan/"
            className="fa fa-linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterName;
