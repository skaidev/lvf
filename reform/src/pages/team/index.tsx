import React from "react";
import FrontLayout from "../../layout/FrontLayout";

const teamPage = (): JSX.Element => {
  return (
    <FrontLayout>
      <main className="team">
        <section className="team-1">
          <div className="team-text d-flex justify-content-center align-items-center">
            <div className="container">
              <h1 className="fw-600 font-48 text-light mt-3">Our Team</h1>
              <p className="fw-400 font-24 text-light">
                The best of our teams and volunteers
                <br /> around the world
              </p>
            </div>
          </div>
        </section>
        <section className="team-2 py-5">
          <div className="container team-2-wrap">
            <p className="h1 fw-700 font-48">Founders</p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
              {teamCard.map((card) => (
                <div className="col team-card mb-5" key={card.id}>
                  <div className="card border-primary me-auto ms-auto position-relative team-card-wrap border-0 h-100">
                    <img
                      className="card-img team-card-img"
                      src={`./images/founder_${card.img}.png`}
                    />
                    <div className="card-body team-card-body bg-white">
                      <p className="h3 text-warning text-center mb-2 fw-500 ">
                        Maria Anahonda
                      </p>
                      {card.title}
                      <div
                        className="d-flex team-socials text-muted align-items-center justify-content-center"
                        style={{ gap: "1rem" }}
                      >
                        <i className="fab fa-facebook-f"></i>|
                        <i className="fab fa-instagram"></i>|
                        <i className="fab fa-twitter"></i>|
                        <i className="fab fa-linkedin-in"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="team-3">
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

export default teamPage;

const teamCard = [
  {
    id: 1,
    img: 1,
    title: (
      <p className="text-muted fw-500 text-center p-0 mb-5 mb-md-4">Founder</p>
    ),
  },
  {
    id: 2,
    img: 2,
    title: (
      <p className="text-muted fw-500 text-center p-0 mb-5 mb-md-4">
        Co Founder
      </p>
    ),
  },
  {
    id: 3,
    img: 3,
    title: (
      <p className="text-muted fw-500 text-center p-0 mb-5 mb-md-4">Founder</p>
    ),
  },
  {
    id: 4,
    img: 2,
    title: (
      <p className="text-muted fw-500 text-center p-0 mb-5 mb-md-4">
        Co Founder
      </p>
    ),
  },
  {
    id: 5,
    img: 3,
    title: (
      <p className="text-muted fw-500 text-center p-0 mb-5 mb-md-4">Founder</p>
    ),
  },
  {
    id: 6,
    img: 3,
    title: (
      <p className="text-muted fw-500 text-center p-0 mb-5 mb-md-4">Founder</p>
    ),
  },
  {
    id: 7,
    img: 2,
    title: (
      <p className="text-muted fw-500 text-center p-0 mb-5 mb-md-4">
        Co Founder
      </p>
    ),
  },
  {
    id: 8,
    img: 3,
    title: (
      <p className="text-muted fw-500 text-center p-0 mb-5 mb-md-4">Founder</p>
    ),
  },
  {
    id: 9,
    img: 3,
    title: (
      <p className="text-muted fw-500 text-center p-0 mb-5 mb-md-4">Founder</p>
    ),
  },
];
