import React, { useState } from "react";
import WorkWithUs from "./icon/WorkWithUs";

const Header = (): JSX.Element => {
  const [menu, setMenu] = useState(false);
  const [sec, setSec] = useState(false);
  setTimeout(() => {
    setSec(true);
  }, 2000);
  return (
    <header>
      <nav className="main-top bg-dark ">
        <div className="container align-items-center d-flex text-light py-1">
          <div className="left">
            <span>
              <i className="fas fa-phone-volume"></i>&nbsp;+234 9012624162&nbsp;
            </span>
            |
            <span>
              &nbsp;<i className="fas fa-envelope"></i>
              &nbsp;info@yourcompany.com&nbsp;
            </span>
            |
            <span>
              &nbsp;
              <i className="fab fa-facebook"></i>
              &nbsp; <i className="fab fa-instagram"></i>&nbsp; &nbsp;
              <i className="fab fa-twitter"></i> &nbsp;
            </span>
          </div>
          <div className="right d-none d-md-flex justify-content-end ">
            <WorkWithUs />
            <p className="p-0 m-0 ">
              <span className="fw-lighter">
                &nbsp;&nbsp; Want to work with us ? &nbsp;&nbsp;
              </span>
              <span>Become a Volunteer</span>
            </p>
          </div>
        </div>
      </nav>
      <nav className="main-bottom py-2">
        <div className="container justify-content-between  justify-content-md-start align-items-center d-flex ">
          <div className="logo-sec d-flex align-items-center">
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
          <ul className="items-sec jc p-0 m-0 fw-bold d-none d-md-flex">
            <li>
              <a className="active">Home</a>
            </li>
            <li>About</li>
            <li>Team</li>
            <li>Gallery</li>
            <li>Contact us</li>
            <li className="text-primary">Join us</li>
          </ul>
          <i
            className="fas fa-2x fa-bars d-md-none"
            role="button"
            onClick={() => setMenu(true)}
          ></i>
        </div>
      </nav>
      {menu && (
        <div className="min-menu d-md-none">
          {sec && (
            <div className={`min-menu-cover`}>
              <div className=" p-2 d-flex justify-content-end">
                <i
                  className="fas fa-2x fa-times me-3"
                  role="button"
                  onClick={() => {
                    setMenu(false);
                    setSec(false);
                  }}
                ></i>
              </div>
              <ul className="p-0 fw-bold m-0">
                <li className="text-center py-4 border-bottom">Home</li>
                <li className="text-center py-4 border-bottom">About</li>
                <li className="text-center py-4 border-bottom">Team</li>
                <li className="text-center py-4 border-bottom">Gallery</li>
                <li className="text-center py-4 border-bottom">Contact us</li>
                <li className="text-center text-primary py-4 border-bottom">
                  Join Us
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
