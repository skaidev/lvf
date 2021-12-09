/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import WorkWithUs from "components/icon/WorkWithUs";

const RevivalHeader = (): JSX.Element => {
  const [menu, setMenu] = useState(false);
  const [sec, setSec] = useState(false);
  setTimeout(() => {
    setSec(true);
  }, 2000);

  const router = useRouter();
  return (
    <header className="revival-header">
      <nav className="main-top">
        <div className="container align-items-center d-flex flex-md-column flex-xl-row text-light justify-content-between py-1">
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
              <i className="soc fab fa-xs fa-facebook-f d-flex bg-light text-warning justify-content-center align-items-center"></i>
              &nbsp;
              <i className="soc fab fa-xs fa-instagram text-warning bg-light d-flex justify-content-center align-items-center"></i>
              &nbsp;
              <i className="soc fab fa-xs fa-twitter d-flex text-warning bg-light justify-content-center align-items-center"></i>
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
            <a className="logo-sec d-flex align-items-center text-decoration-none">
              <img src="/images/revival_images/logo.png" alt="" />
              <div className="logo-txt d-flex flex-column">
                <span className="fw-bold font-16 " style={{ color: "#7ca2b5" }}>
                  <span className="font-16" style={{ color: "#af3d6e" }}>
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
            <li className="nav-item active">
              <Link href="/revival">
                <a
                  className={`nav-link ${
                    router.pathname == "/revival" ? "active" : ""
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
                    router.pathname == "/#about" ? "active" : ""
                  }`}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/revival/team">
                <a
                  className={`nav-link ${
                    router.pathname == "/revival/team" ? "active" : ""
                  }`}
                >
                  Team
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/revival/gallery">
                <a
                  className={`nav-link ${
                    router.pathname == "/revival/gallery" ? "active" : ""
                  }`}
                >
                  Gallery
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#contact">
                <a className="nav-link">Contact us</a>
              </Link>
            </li>
            <li className="text-primary">
              <Link href="/">
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
                  <Link href="/">
                    <a className="text-decoration-none">Home</a>
                  </Link>
                </li>
                <li className="text-center py-4 border-bottom">About</li>
                <li className="text-center py-4 border-bottom">
                  <Link href="/revival/team">
                    <a className="text-decoration-none">Team</a>
                  </Link>
                </li>
                <li className="text-center py-4 border-bottom">
                  <Link href="/revival/gallery">
                    <a className="text-decoration-none">Gallery</a>
                  </Link>
                </li>
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

export default RevivalHeader;
