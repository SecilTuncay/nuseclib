import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container d-md-flex p-1 justify-content-between align-items-center">
        <div className="me-md-auto text-center text-md-start">
          <div>
            <span>NuSEC Library </span>&copy; All Rights Reserved.
          </div>
        </div>
        <a>
          <div className="d-flex pt-3 pt-md-0 justify-content-center">
            <div className="text-white m-2">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="text-white m-2">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="text-white m-2">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </a>

      </div>
    </footer>
  );
}

export default Footer;