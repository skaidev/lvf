import React, { useState } from "react";

const Header = (): JSX.Element => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="navbar fixed-top flex-column py-2 top-header">
      <div className="_top-header container">
        <nav className="logo  navbar-brand d-flex align-items-center">
          <img
            src="./images/logo.png"
            alt=""
            className="navbar-brand logo-img"
          />
          <div className="logo-txt d-flex flex-column">
            <span>
              <code>
                LOVE <span className="text-muted">VISION</span>
              </code>
            </span>
            <kbd className="bg-transparent p-0">Foundation</kbd>
          </div>
        </nav>
        <ul className="nav d-none d-sm-flex">
          <li className="nav-item active">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact us</li>
          <li className="text-primary">Join us</li>
        </ul>
        <div
          className="toggler  d-sm-none "
          role="button"
          onClick={() => setMenu(!menu)}
        >
          <div className="bar bg-primary"></div>
          <div className="bar bg-primary"></div>
          <div className="bar bg-primary"></div>
        </div>
      </div>
      {menu && (
        <div className="min d-sm-none mt-2 animate__animated animate__bounceInDown text-center">
          <div>Home</div>
          <div>About</div>
          <div>Contact us</div>
          <div>Join us</div>
        </div>
      )}
    </header>
  );
};

export default Header;
