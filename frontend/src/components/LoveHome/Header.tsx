/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import WorkWithUs from "components/icon/WorkWithUs";

const Header = (): JSX.Element => {
  const [menu, setMenu] = useState(false);
  const [sec, setSec] = useState(false);
  setTimeout(() => {
    setSec(true);
  }, 2000);

  const router = useRouter();
  return (
    <header className="love-home-header">
      <nav className="main-top bg-dark ">
        <div className="container align-items-center d-flex flex-md-column flex-xl-row justify-content-between text-light py-1">
          <div className="left d-flex">
            <div>
              <i
                className="fas fa-phone-volume"
                style={{ transform: "rotate(310deg)" }}
              ></i>
              &nbsp;+234 9012624162&nbsp;
            </div>
            |
            <div>
              &nbsp;<i className="fas fa-envelope"></i>
              &nbsp;info@yourcompany.com&nbsp;
            </div>
            |
            <div className="social-top d-flex flex-row">
              &nbsp;
              <i className="soc fab fa-xs fa-facebook-f d-flex bg-light text-dark justify-content-center align-items-center"></i>
              &nbsp;
              <i className="soc fab fa-xs fa-instagram text-dark bg-light d-flex justify-content-center align-items-center"></i>
              &nbsp;
              <i className="soc fab fa-xs fa-twitter d-flex text-dark bg-light justify-content-center align-items-center"></i>
              &nbsp;
            </div>
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
        <div className="container justify-content-between align-items-center d-flex ">
          <Link href="/">
            <a className="logo-sec text-decoration-none d-flex align-items-center">
              <img src="/images/home_images/logo.png" alt="" />
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
            </a>
          </Link>
          <ul className="nav fw-bold d-none d-lg-flex">
            <li className="nav-item">
              <Link href="/home">
                <a
                  className={`nav-link ${
                    router.pathname == "/home" ? "active" : ""
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#about">
                <a
                  className={`nav-link ${
                    router.pathname == "/about" ? "active" : ""
                  }`}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/home/team">
                <a
                  className={`nav-link ${
                    router.pathname == "/home/team" ? "active" : ""
                  }`}
                >
                  Team
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/home/gallery">
                <a
                  className={`nav-link ${
                    router.pathname == "/home/gallery" ? "active" : ""
                  }`}
                >
                  Gallery
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/home/#Contactus">
                <a className="nav-link">Contact us</a>
              </Link>
            </li>
            <li className="text-primary fw-600 font-18">
              <Link href="/partner">
                <a className="nav-link">Join Us</a>
              </Link>
            </li>
          </ul>
          <i
            className="fas fa-2x fa-bars d-lg-none"
            role="button"
            onClick={() => setMenu(true)}
          ></i>
        </div>
      </nav>
      {menu && (
        <div className="min-menu d-lg-none">
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
                <li className="text-center py-4 border-bottom">
                  <Link href="/home">
                    <a className="text-decoration-none">Home</a>
                  </Link>
                </li>
                <li className="text-center py-4 border-bottom">
                  <Link href="/#about">
                    <a className="text-decoration-none">About</a>
                  </Link>
                </li>
                <li className="text-center py-4 border-bottom">
                  <Link href="/home/team">
                    <a className="text-decoration-none">Team</a>
                  </Link>
                </li>
                <li className="text-center py-4 border-bottom">
                  <Link href="/home/gallery">
                    <a className="text-decoration-none">Gallery</a>
                  </Link>
                </li>
                <li className="text-center py-4 border-bottom">
                  <Link href="/home/#Contactus">
                    <a className="text-decoration-none">Contact us</a>
                  </Link>
                </li>
                <li className="text-center text-primary py-4 border-bottom">
                  <Link href="/partner">
                    <a className="nav-link">Join Us</a>
                  </Link>
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
