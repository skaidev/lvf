import React from "react";
import FrontLayout from "../../layout/FrontLayout";

const galleryPage = (): JSX.Element => {
  return (
    <FrontLayout>
      <main className="gallery">
        <section className="gallery-1">
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
        <section className="gallery-2 py-5 mb-3">
          <div className="container">
            <p className="h1 pt-5 text-center text-lg-start">Empowerment</p>
            <div className="row row-cols-1 row-cols-lg-3 image-box g-3">
              {empowermentImage.map((card) => (
                <div className="col" key={card.id}>
                  <div className="card me-auto ms-auto me-lg-0 ms-lg-0 img-box">
                    <img
                      src={`/images/gallery_${card.image}.png`}
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

const empowermentImage = [
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
