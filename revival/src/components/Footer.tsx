import React from "react";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="f-cover">
        <div className="container py-2 text-white">
          <div className="top-sec align-items-md-center d-flex flex-column flex-md-row">
            <div className="d-flex one align-items-center">
              <img src="./images/logo.png" alt="" />
              <div className="logo-txt d-flex flex-column">
                <span className="fw-bold" style={{ color: "#7ca2b5" }}>
                  <span className="" style={{ color: "#af3d6e" }}>
                    LOVE&nbsp;
                  </span>
                  VISION
                </span>
                <kbd
                  className="bg-transparent  p-0 m-0 text-muted"
                  style={{ letterSpacing: ".15rem" }}
                >
                  FOUNDATION
                </kbd>
              </div>
            </div>
            <div className="two d-flex flex-column flex-md-row align-items-md-center">
              <h5 style={{ flex: 0.3 }} className=" fw-bold">
                Subscribe Newsletter
              </h5>
              <form style={{ flex: 0.7 }} className="d-flex">
                <input type="email" className="form-control rounded-0" />
                <button className="btn btn-primary rounded-0 text-white">
                  <i className="fas fa-arrow-circle-left"></i>
                </button>
              </form>
            </div>
            <div className="three d-flex align-items-md-end">
              <span>
                <i className="fas fa-2x text-primary fa-phone-volume"></i>
                <span className="fa-1x">09012624162</span>
              </span>
            </div>
          </div>
          <hr />
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
          <div className="list fw-bold w-75 mx-auto d-flex flex-column flex-md-row py-3 justify-content-md-between">
            <span>Home</span>
            <span>About</span>
            <span>Team</span>
            <span>Contact us</span>
            <span className="text-primary">Join us</span>
          </div>
        </div>
        <div className="layer text-white py-4 text-center">
          <span className="fw-bolder">Love Vision Foundation</span> 2021. All
          Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;