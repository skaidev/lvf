/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const FooterComp = (): JSX.Element => {
  return (
    <Footer className="reform-footer">
      <div className="f-cover">
        <div className="container py-2 text-white">
          <div className="top-sec align-items-md-center d-flex flex-column flex-md-row">
            <div className="d-flex one justify-content-center align-items-center">
              <img src="./images/logo.png" alt="" />
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
            <div className="two d-flex flex-column justify-content-center flex-lg-row align-items-lg-center">
              <h4 className=" fw-700 me-2 me-lg-4 text-center">
                Subscribe Newsletter
              </h4>
              <form className="d-flex justify-content-center me-lg-5">
                <input
                  type="email"
                  className="form-control rounded-0"
                  placeholder="Your Email Address"
                />
                <button className="btn btn-primary text-white">
                  <i className="far fa-lg fa-paper-plane"></i>
                </button>
              </form>
            </div>
            <div className="three d-flex justify-content-center align-items-md-end">
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
          <div className="list w-75 mx-auto align-items-center d-flex flex-column flex-md-row py-3 justify-content-md-between">
            <span>Home</span>
            <span>About</span>
            <span>Team</span>
            <span>Contact us</span>
            <span className="text-primary">Join us</span>
          </div>
        </div>
        <div className="layer fw-300 text-muted py-4 text-center">
          <span className="fw-500 text-white">Love Vision Foundation</span>{" "}
          2021. All Rights Reserved
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;

const Footer = styled.div`
  background: url("./img/slide1.png");
  background-size: cover;
  min-height: 5.6rem;
  .f-cover {
    min-height: inherit;
    background: rgba(117, 0, 0, 0.8);
    .top-sec {
      gap: 1rem;
      .one {
        flex: 1.4;
      }
      .two {
        flex: 6;
        h4 {
          white-space: nowrap;
        }
        form {
          input {
            max-width: 387px;
            min-height: 49px;
            border-radius: 5px 0px 0px 5px;
          }
          .form-control:focus {
            box-shadow: none;
            outline: none !important;
            -webkit-box-shadow: none;
          }
          .form-control::placeholder {
            font-size: 0.8rem;
            font-weight: 500;
          }
          .btn {
            border-radius: 0px 5px 5px 0px !important;
          }
        }
      }
      .three {
        flex: 1.6;
      }
    }
    .socials {
      span {
        width: 40px;
        height: 40px;
        border: 1px solid white;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        transition: all 0.5s linear;
        &:hover {
          background: white;
          transform: rotateX(360deg);
          i {
            color: #50ebb2;
          }
        }
      }
    }
    .list {
      span {
        font-weight: 600;
        font-size: 1rem;
      }
    }
    .layer {
      background: rgba(118, 118, 118, 0.31);
      backdrop-filter: blur(33px);
    }
  }
`;
