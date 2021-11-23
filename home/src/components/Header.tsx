import React, { useState } from 'react'
import WorkWithUs from './icon/WorkWithUs'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = (): JSX.Element => {
  const [menu, setMenu] = useState(false)
  const [sec, setSec] = useState(false)
  setTimeout(() => {
    setSec(true)
  }, 2000)

  const router = useRouter()
  return (
    <header>
      <nav className="main-top bg-dark ">
        <div className="container align-items-center d-flex flex-md-column flex-xl-row justify-content-between text-light py-1">
          <div className="left d-flex">
            <div>
              <i className="fas fa-phone-volume" style={{ transform: 'rotate(310deg)' }}></i>
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
              <span className="fw-lighter">&nbsp;&nbsp; Want to work with us ? &nbsp;&nbsp;</span>
              <span>Become a Volunteer</span>
            </p>
          </div>
        </div>
      </nav>
      <nav className="main-bottom py-2">
        <div className="container justify-content-between align-items-center d-flex ">
          <div className="logo-sec d-flex align-items-center">
            <img src="./images/logo.png" alt="" />
            <div className="logo-txt d-flex flex-column">
              <span className="fw-bold" style={{ color: '#7ca2b5' }}>
                <span className="" style={{ color: '#af3d6e' }}>
                  LOVE&nbsp;
                </span>
                VISION
              </span>
              <kbd className="bg-transparent  p-0 m-0 text-muted" style={{ letterSpacing: '.15rem' }}>
                FOUNDATION
              </kbd>
            </div>
          </div>
          <ul className="nav fw-bold d-none d-lg-flex">
            <li className="nav-item">
              <Link href="/">
                <a className={`nav-link ${router.pathname == '/' ? 'active' : ''}`}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#about">
                <a className={`nav-link ${router.pathname == '/about' ? 'active' : ''}`}>About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/team">
                <a className={`nav-link ${router.pathname == '/team' ? 'active' : ''}`}>Team</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/gallery">
                <a className={`nav-link ${router.pathname == '/gallery' ? 'active' : ''}`}>Gallery</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#contact">
                <a className="nav-link">Contact us</a>
              </Link>
            </li>
            <li className="text-primary fw-600 font-18">
              <Link href="/">
                <a className="nav-link">Join Us</a>
              </Link>
            </li>
          </ul>
          <i className="fas fa-2x fa-bars d-lg-none" role="button" onClick={() => setMenu(true)}></i>
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
                    setMenu(false)
                    setSec(false)
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
                  <Link href="/team">
                    <a className="text-decoration-none">Team</a>
                  </Link>
                </li>
                <li className="text-center py-4 border-bottom">
                  <Link href="/gallery">
                    <a className="text-decoration-none">Gallery</a>
                  </Link>
                </li>
                <li className="text-center py-4 border-bottom">Contact us</li>
                <li className="text-center text-primary py-4 border-bottom">Join Us</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </header>
  )
}

export default Header
