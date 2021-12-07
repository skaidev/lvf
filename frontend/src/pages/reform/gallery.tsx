/* eslint-disable @next/next/no-img-element */
import ReformLayout from "layout/ReformLayout";
import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const reformGallery = (): JSX.Element => {
  return (
    <ReformLayout>
      <main className="reform-gallery">
        <section className="reform-gallery-1">
          <div className="gallery-text d-flex justify-content-center align-items-center ">
            <div className="container">
              <h1 className="fw-700 font-64 text-light mt-3">Our Gallery</h1>
              <p className="fw-400 font-24 text-light">
                The best of our teams and volunteers
                <br /> around the world
              </p>
            </div>
          </div>
        </section>
        <section className="reform-gallery-2 py-5 mb-3">
          <div className="container">
            <p className="h1 pt-5 text-center text-lg-start">Empowerment</p>
            <div className="wrapper row g-2">
              <SimpleReactLightbox>
                <SRLWrapper>
                  {Image?.map((e, i) => (
                    <div className="box d-flex flex-column col" key={i}>
                      <img
                        className=""
                        style={{ maxHeight: "325px" }}
                        src={e}
                        alt=""
                      />
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
              </SimpleReactLightbox>
            </div>
          </div>
        </section>
        <section className="reform-gallery-3">
          <div className="content">
            <div className="container text-light d-flex flex-lg-row flex-column justify-content-center align-items-center">
              <div className="text text-center me-lg-5 ">
                <h2 className="fw-700 font-48 ">
                  Volunteer to Help us help others
                </h2>
              </div>
              <div className="button text-center">
                <button className="btn btn-primary text-light fw-600 font-20 mb-2">
                  Join Team
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="gallery-4">
          
        </section> */}
      </main>
    </ReformLayout>
  );
};

export default reformGallery;

const Image = [
  "/images/reform_images/gallery_1.png",
  "/images/reform_images/gallery_2.png",
  "/images/reform_images/gallery_3.png",
  "/images/reform_images/gallery_4.png",
  "/images/reform_images/gallery_5.png",
];
