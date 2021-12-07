/* eslint-disable @next/next/no-img-element */
import RevivalLayout from "layout/RevivalLayout";
import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const RevivalGallery = () => {
  return (
    <RevivalLayout>
      <main className="revival-gallery">
        <section className="revival-gallery-1">
          <div className="gallery-text d-flex justify-content-center align-items-center">
            <h1 className="fw-600 font-48 text-light mt-3">Our Gallery</h1>
          </div>
        </section>
        <section className="revival-gallery-2 py-5">
          <div className="container ">
            <div className="one mb-5">
              <p className="h1 fw-700 font-48">Love Revival Concert 2019</p>
              <div className="wrapper">
                <SimpleReactLightbox>
                  <SRLWrapper>
                    {Image?.map((e, i) => (
                      <div className="box" key={i}>
                        <img src={e} alt="" className="" />
                      </div>
                    ))}
                  </SRLWrapper>
                </SimpleReactLightbox>
              </div>
            </div>
          </div>
        </section>
        <section className="revival-gallery-2b py-3">
          <div className="container">
            <div className="two">
              <p className="h1 fw-700 font-48">Love Revival Concert 2020</p>
              <div className="wrapper row gy-4">
                <SimpleReactLightbox>
                  <SRLWrapper>
                    {ImageTwo?.map((card, i) => (
                      <div className="box d-flex flex-column col" key={i}>
                        <img src={card} alt="" style={{ maxHeight: "325px" }} />
                      </div>
                    ))}
                  </SRLWrapper>
                </SimpleReactLightbox>
              </div>
            </div>
          </div>
        </section>
        <section className="revival-gallery-3">
          <div className="content">
            <div className="content-box text-light d-lg-flex justify-content-center align-items-center">
              <div className="text me-lg-3 ">
                <h2 className="fw-700 font-48 text-center ">
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
      </main>
    </RevivalLayout>
  );
};

export default RevivalGallery;

const Image = [
  "/images/revival_images/revivalA_1.png",
  "/images/revival_images/revivalA_2.png",
  "/images/revival_images/revivalA_3.png",
  "/images/revival_images/revivalA_4.png",
  "/images/revival_images/revivalA_5.png",
  "/images/revival_images/revivalA_6.png",
  "/images/revival_images/revivalA_7.png",
];

const ImageTwo = [
  "/images/revival_images/revivalB_1.png",
  "/images/revival_images/revivalB_2.png",
  "/images/revival_images/revivalB_3.png",
  "/images/revival_images/revivalB_4.png",
  "/images/revival_images/revivalB_5.png",
  "/images/revival_images/revivalB_6.png",
  "/images/revival_images/revivalB_7.png",
  "/images/revival_images/revivalB_8.png",
  "/images/revival_images/revivalB_9.png",
];
