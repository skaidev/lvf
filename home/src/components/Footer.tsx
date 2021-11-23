import React from "react";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="f-cover">
        <div className="container py-2 text-white">
          <div className="top-sec align-items-center d-flex flex-column flex-lg-row">
            <div className="d-flex one align-items-center">
              <img src="logo.png" alt="" />
              <div className="logo-txt d-flex mt-2 align-items-center flex-column">
                <span
                  className="fw-400"
                  style={{
                    color: "#7ca2b5",
                    fontSize: "0.6rem",
                    letterSpacing: ".10rem",
                  }}
                >
                  <span
                    className="fw-400"
                    style={{ color: "#af3d6e", fontSize: "0.6rem" }}
                  >
                    LOVE&nbsp;
                  </span>
                  VISION
                </span>
                <kbd
                  className="bg-transparent  p-0 m-0 text-muted"
                  style={{ fontSize: "0.5rem", letterSpacing: ".23rem" }}
                >
                  FOUNDATION
                </kbd>
              </div>
            </div>
            <div className="two d-flex flex-column flex-lg-row align-items-lg-center">
              <h4 className=" fw-700 me-2 me-lg-4 text-center">
                Subscribe Newsletter
              </h4>
              <form className="d-flex me-lg-5">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email Address"
                />
                <button className="btn btn-primary text-white">
                  <i className="far fa-lg fa-paper-plane"></i>
                </button>
              </form>
            </div>
            <div className="three d-flex align-items-md-end">
              <span>
                <i
                  className="fas fa-2x text-primary fa-phone-volume me-3"
                  style={{ transform: "rotate(310deg)" }}
                ></i>
                <span className="fa-1x">09012624162</span>
              </span>
            </div>
          </div>
          <hr />
          <div className="socials mb-3 py-2 d-flex justify-content-evenly w-75 mx-auto">
            <span>
              <i className="fab fa-facebook-f"></i>
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
          <div className="list w-75 mx-auto align-items-center d-flex flex-column flex-md-row py-3 justify-content-md-between">
            <span>Home</span>
            <span>About</span>
            <span>Team</span>
            <span>Contact us</span>
            <span className="text-primary">Join us</span>
          </div>
        </div>
        <div className="layer fw-300 text-muted py-4 text-center">
          <span className="fw-500 text-white ">Love Vision Foundation</span>{" "}
          2021. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
