/* eslint-disable @next/next/no-img-element */
import LoveHomeLayout from "layout/HomeLayout";
import React from "react";
import SimpleReactlightbox, { SRLWrapper } from "simple-react-lightbox";

const galleryPage = (): JSX.Element => {
  return (
    <LoveHomeLayout>
      <main className="home-gallery">
        <section className="home-gallery-1">
          <div className="gallery-text-1 d-flex align-items-end">
            <div className="container">
              <h1 className="fw-700 font-64 text-light mt-3">Our Gallery</h1>
              <p className="fw-400 font-24 pb-3 text-light">
                Our Successful Cases
              </p>
            </div>
          </div>
        </section>
        <section className="home-gallery-2 py-5">
          {/* visitation 2020 box typography */}
          <div className="visitation-heading-1 pt-4 mt-5">
            <div className="container">
              <p className="fw-700 font-48">visitation for 2020</p>
            </div>
          </div>
          <div className="visitation-box-1 ">
            <div className="container ">
              <p className="pt-5 fw-500 font-18 text-center text-md-start">
                Visitation to Mr & Mrs Okenes Family
              </p>
              <div className="wrapper">
                <SimpleReactlightbox>
                  <SRLWrapper>
                    {images.map((image, i) => (
                      <div className="image-gallery" key={i}>
                        <img src={image} alt="" className="img-fluid" />
                      </div>
                    ))}
                  </SRLWrapper>{" "}
                </SimpleReactlightbox>
              </div>
            </div>
          </div>
          {/* end of 2020 typography */}
        </section>
        <section className="home-gallery-2a">
          <div className="container">
            <p className="pt-5 fw-500 font-18">
              visitation to Mr Harolds Family
            </p>

            <div className="wrapper row">
              <SimpleReactlightbox>
                <SRLWrapper>
                  {imageTwo.map((image, i) => (
                    <div className="box" key={i}>
                      <img className="" src={image} alt="" />
                      {/* <div className="img-overlay">
                    <div className="img-text">
                      <div>
                        <p>
                          <i className="text-light fas fa-map-marker-alt me-3"></i>
                          No 6 Mission Road
                        </p>
                      </div>
                      <div>
                        <p>
                          <i className="text-light fas fa-calendar-week me-3"></i>5th june 2020
                        </p>
                      </div>
                    </div>
                  </div> */}
                    </div>
                  ))}
                </SRLWrapper>
              </SimpleReactlightbox>
            </div>
          </div>
        </section>
        <section className="home-gallery-2b py-5">
          {/* 2021 visitation typography */}
          <div className="visitation-heading-2 pt-4 mt-5">
            <div className="container">
              <p className="fw-700 font-48">visitation for 2021</p>
            </div>
          </div>
          <div className="visitation-box-2">
            <div className="container">
              <p className="pt-5 fw-500 font-18">
                Visitation to Mr & Mrs Okenes Family
              </p>
              <div className="wrapper row g-2">
                <SimpleReactlightbox>
                  <SRLWrapper>
                    {imageThree.map((image, e) => (
                      <div className="box d-flex flex-column col" key={e}>
                        <img className="" src={image} alt="" />
                        {/* <div className="img-overlay">
                    <div className="img-text">
                      <div>
                        <p>
                          <i className="text-light fas fa-map-marker-alt me-3"></i>
                          No 6 Mission Road
                        </p>
                      </div>
                      <div>
                        <p>
                          <i className="text-light fas fa-calendar-week me-3"></i>5th june 2020
                        </p>
                      </div>
                    </div>
                  </div> */}
                      </div>
                    ))}
                  </SRLWrapper>
                </SimpleReactlightbox>
              </div>
            </div>
          </div>
          {/* end of 2021 typography */}
        </section>
        <section className="home-gallery-3">
          <div className="content pb-3">
            <div className="container text-light d-flex flex-lg-row flex-column justify-content-center align-items-center">
              <div className="text me-lg-5">
                <h2 className="fw-700 font-48 text-center">
                  Join Our Volunteer Team.
                </h2>
              </div>
              <div className="button text-center">
                <button className="btn btn-primary text-light fw-600 font-20">
                  Join Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </LoveHomeLayout>
  );
};

export default galleryPage;

const images = [
  "/images/home_images/visitation_1.png",
  "/images/home_images/visitation_2.png",
  "/images/home_images/visitation_3.png",
  "/images/home_images/visitation_4.png",
  "/images/home_images/visitation_5.png",
];
const imageTwo = [
  "/images/home_images/visitation_1.png",
  "/images/home_images/visitation_1.png",
];
const imageThree = [
  "/images/home_images/visitationb_1.png",
  "/images/home_images/visitationb_2.png",
];
