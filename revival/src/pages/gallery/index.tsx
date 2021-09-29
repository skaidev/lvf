import React from "react";
import FrontLayout from "../../Layout/FrontLayout";

const galleryPage = () => {
  return (
    <FrontLayout>
      <main className="gallery">
        <section className="gallery-1">
          <div className="gallery-text d-flex justify-content-center align-items-center">
            <h1 className="fw-600 font-48 text-light mt-3">Our Gallery</h1>
          </div>
        </section>
        <section className="gallery-2 py-5">
          <div className="container">
            <div className="one mb-5">
              <p className="h1 fw-700 font-48">Love Revival Concert 2019</p>
              <div className="img-box">
                <div className="d-flex justify-content-between">
                  <div className="p-lg-3 img-1">
                    <img
                      src="/images/revivalA_1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="p-lg-3 img-2">
                    <img
                      src="/images/revivalA_2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="p-lg-3 img-3">
                    <img
                      src="/images/revivalA_3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="p-lg-3 img-4">
                    <img
                      src="/images/revivalA_4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="p-lg-3 img-5">
                    <img
                      src="/images/revivalA_5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="p-lg-3 img-6">
                    <img
                      src="/images/revivalA_6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="p-lg-3 img-7">
                    <img
                      src="/images/revivalA_7.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="two">
              <p className="h1 fw-700 font-48">Love Revival Concert 2020</p>
              <div className="img-box">
                <div className="d-flex justify-content-between">
                  <div className="p-lg-3 img-1">
                    <img
                      src="/images/revivalB_1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="p-lg-3 img-2">
                    <img
                      src="/images/revivalB_2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="p-lg-3 img-3">
                    <img
                      src="/images/revivalB_3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="p-lg-3 img-4">
                    <img
                      src="/images/revivalB_4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="p-lg-3 img-5">
                    <img
                      src="/images/revivalB_5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="p-lg-3 img-6">
                    <img
                      src="/images/revivalB_6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="p-lg-3 img-7">
                    <img
                      src="/images/revivalB_7.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="p-lg-3 img-8">
                    <img
                      src="/images/revivalB_8.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="p-lg-3 img-9">
                    <img
                      src="/images/revivalB_9.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery-3">
          <div className="content">
            <div className="container text-light d-lg-flex justify-content-center align-items-center">
              <div className="text me-5 ">
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
    </FrontLayout>
  );
};

export default galleryPage;
