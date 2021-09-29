import React from "react";
import FrontLayout from "../../layout/FrontLayout";

const galleryPage = (): JSX.Element => {
  return (
    <FrontLayout>
      <main className="gallery">
        <section className="gallery-1">
          <div className="gallery-text-1 d-flex align-items-end">
            <div className="container">
              <h1 className="fw-700 font-64 text-light mt-3">Our Gallery</h1>
              <p className="fw-400 font-24 pb-3 text-light">
                Our Successful Cases
              </p>
            </div>
          </div>
        </section>
        <section className="gallery-2 py-5">
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
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 image-box  g-3">
                {imageOne.map((card) => (
                  <div className="col" key={card.id}>
                    <div className="card me-auto ms-auto img-box">
                      <img
                        src={`/images/visitation_${card.image}.png`}
                        alt=""
                        className="card-img"
                      />
                      <div className="img-lay card-img-overlay d-flex flex-column justify-content-end">
                        <div className="container items text-light d-flex flex-column ">
                          <div>
                            <p>
                              <i className="fas fa-map-marker-alt me-3"></i>
                              No 6 Mission Road
                            </p>
                          </div>
                          <div>
                            <p>
                              <i className="fas fa-calendar-week me-3"></i>5th
                              june 2020
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="pt-5 fw-500 font-18">
                visitation to Mr Harolds Family
              </p>
              <div className="row row-cols-1 row-cols-lg-2 image-box  g-3">
                {imageTwo.map((card) => (
                  <div className="col" key={card.id}>
                    <div className="card ms-auto me-auto img-box-2">
                      <img
                        src={`/images/visitation_1.png`}
                        alt=""
                        className="card-img"
                      />
                      <div className="img-lay card-img-overlay d-flex flex-column justify-content-end">
                        <div className="container items text-light d-lg-flex ">
                          <div className="me-3">
                            <p>
                              <i className="fas fa-map-marker-alt me-3"></i>
                              No 6 Mission Road
                            </p>
                          </div>
                          <div>
                            <p>
                              <i className="fas fa-calendar-week me-3"></i>5th
                              june 2020
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* end of 2020 typography */}

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
              <div className="row row-cols-1 row-cols-lg-2 image-box-2  g-3">
                {imageThree.map((card) => (
                  <div className="col" key={card.id}>
                    <div className="card img-box-3">
                      <img
                        src={`/images/visitationb_${card.image}.png`}
                        alt=""
                        className="card-img"
                      />
                      <div className="img-lay card-img-overlay d-flex flex-column justify-content-end ">
                        <div className="container items text-light d-lg-flex ">
                          <div className="me-3">
                            <p>
                              <i className="fas fa-map-marker-alt me-3"></i>
                              No 6 Mission Road
                            </p>
                          </div>
                          <div>
                            <p>
                              <i className="fas fa-calendar-week me-3"></i>5th
                              june 2020
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* end of 2021 typography */}
        </section>
        <section className="gallery-3">
          <div className="content">
            <div className="container text-light d-flex justify-content-center align-items-center">
              <div className="text me-5">
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
    </FrontLayout>
  );
};

export default galleryPage;

const imageOne = [
  {
    id: 1,
    image: 1,
  },
  {
    id: 2,
    image: 2,
  },
  {
    id: 3,
    image: 3,
  },
  {
    id: 4,
    image: 4,
  },
  {
    id: 5,
    image: 5,
  },
];

const imageTwo = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const imageThree = [
  {
    id: 1,
    image: 1,
  },
  {
    id: 2,
    image: 2,
  },
];
