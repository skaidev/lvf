/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

const HeaderComp = (): JSX.Element => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header fixed-top flex-column top-header">
      <div className="_top-header p-0 container">
        <nav className="navbar p-0">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center">
              <img
                src="/images/foundation_images/logo.png"
                alt="logo"
                className="navbar-brand logo-img"
              />
              <div className="logo-txt d-flex flex-column">
                <span>
                  <code>
                    LOVE <span className="text-muted">VISION</span>
                  </code>
                </span>
                <kbd className="bg-transparent letter-spacing p-0">
                  FOUNDATION
                </kbd>
              </div>
            </a>
          </Link>
          <ul className="nav d-none d-lg-flex">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Arms
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/home">
                    <a className="dropdown-item text-dark">Love Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/reform">
                    <a className="dropdown-item text-dark">Love Reform</a>
                  </Link>
                </li>
                <li>
                  <Link href="/revival">
                    <a className="dropdown-item text-dark">Love Revival</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/#contact">
                <a className="nav-link">Contact Us</a>
              </Link>
            </li>
            <li className="text-primary">
              <Link href="/partner">
                <a className="nav-link text-primary">Join Us</a>
              </Link>
            </li>
          </ul>
          <div
            className="toggler  d-lg-none "
            role="button"
            onClick={() => setMenu(!menu)}
          >
            <div className="bar bg-primary"></div>
            <div className="bar bg-primary"></div>
            <div className="bar bg-primary"></div>
          </div>
        </nav>
      </div>
      {menu && (
        <div className="min d-lg-none mt-2 animate__animated animate__bounceInDown text-center">
          <div>
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </div>
          <div>
            <Link href="/#about">
              <a className="nav-link">About</a>
            </Link>
          </div>
          <div>
            <Link href="/#contact">
              <a className="nav-link">Contact Us</a>
            </Link>
          </div>
          <div>
            <Link href="/partner">
              <a className="nav-link text-primary">Join Us</a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComp;
