import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const HeaderComp = (): JSX.Element => {
  const [menu, setMenu] = useState(false);

  const { asPath: path } = useRouter();

  // const [location] = useState(window?.location.href);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const b = location.split("/")[3];
  //     setPath(b);
  //   }
  // }, [path]);

  return (
    <Header className="navbar fixed-top flex-column py-2 top-header">
      <div className="_top-header container">
        <nav className="navbar justify-content-between">
          <Link href="/#">
            <a className="logo navbar-brand d-flex align-items-center">
              <img src="./images/logo.png" alt="" className="navbar-brand logo-img" />
              <div className="logo-txt d-flex flex-column">
                <span>
                  <code>
                    LOVE <span className="text-muted">VISION</span>
                  </code>
                </span>
                <kbd className="bg-transparent letter-spacing p-0">FOUNDATION</kbd>
              </div>
            </a>
          </Link>
          <ul className="nav d-none d-lg-flex">
            <li className={`nav-item ${path === "/#" ? "active" : ""}`}>
              <Link href="/#">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className={`nav-item ${path === "/#about" ? "active" : ""}`}>
              <Link href="/#about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className={`nav-item ${path === "/#team" ? "active" : ""}`}>
              <Link href="/#team">
                <a className="nav-link">Team</a>
              </Link>
            </li>
            <li className={`nav-item ${path === "/#contact" ? "active" : ""}`}>
              <Link href="/#contact">
                <a className="nav-link">Contact Us</a>
              </Link>
            </li>
            <li className={`nav-item ${path === "/partner" ? "active" : ""}`}>
              <Link href="/partner">
                <a className="nav-link">Join Us</a>
              </Link>
            </li>
          </ul>
          <div className="toggler  d-lg-none " role="button" onClick={() => setMenu(!menu)}>
            <div className="bar bg-primary"></div>
            <div className="bar bg-primary"></div>
            <div className="bar bg-primary"></div>
          </div>
        </nav>
      </div>
      {menu && (
        <div className="min d-lg-none mt-2 animate__animated animate__bounceInDown text-center">
          <div>Home</div>
          <div>About</div>
          <div>Contact us</div>
          <div>Join us</div>
        </div>
      )}
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header`
  .navbar {
    width: 100%;
  }
`;
