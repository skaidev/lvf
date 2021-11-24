import React from "react";

const Footer = (): JSX.Element => {
  return (
    <footer className="text-light footer">
      <div className="footer-cover">
        <div className="container">
          <div className="socials mb-3 py-2 d-flex justify-content-evenly w-75 mx-auto">
            <span>
              <i className="fab fa-facebook"></i>
            </span>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-youtube"></i>
            </span>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </div>
          <div className="list fw-600 w-75 mx-auto d-flex flex-column align-items-center flex-md-row py-3 justify-content-md-between">
            <span>Home</span>
            <span>About</span>
            <span>Team</span>
            <span>Contact us</span>
            <span className="text-primary">Join us</span>
          </div>
        </div>
        <div className="layer py-4 text-center">
          <span className="fw-bolder">Love Vision Foundation</span> 2021. All
          Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
