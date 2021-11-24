import React from 'react'
import FrontLayout from '../../layout/FrontLayout'

const teamPage = (): JSX.Element => {
  return (
    <FrontLayout>
      <main className="team">
        <section className="team-1">
          <div className="team-text d-flex align-items-end">
            <div className="container">
              <h1 className="fw-700 font-64 text-light mt-3">Our Team</h1>
              <p className="fw-400 font-24 pb-3 text-light">The best of of our team and volunteers around the world</p>
            </div>
          </div>
        </section>
        <section className="team-2 py-5">
          <div className="container">
            <p className="h1 fw-700 font-48 mb-3">The Team</p>
            <div className="row mb-5 row-cols-1 row-cols-md-2 row-cols-lg-3 team g-4">
              {teamCard.map((card) => (
                <div className="col team- " key={card.id}>
                  <div
                    className="card h-100 w-100 team--  border-0"
                    style={{
                      background: `url(/images/team-${card.image}.png) no-repeat`,
                    }}
                  >
                    <div className="team--layer d-flex align-items-center text-light justify-content-center p-0 m-0 ">
                      <i className="fab fa-2x fa-facebook"></i>
                      <i className="fab fa-2x fa-twitter"></i>
                      <i className="fab fa-2x fa-instagram"></i>
                    </div>
                    <div className="py-3 card team--bottom bg-warning text-light px-0">
                      {card.name}
                      {card.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="team-3">
          <div className="content">
            <div className="container text-light d-flex justify-content-center align-items-center">
              <div className="text me-5">
                <h2 className="fw-700 font-48 text-center">Join Our Volunteering Team.</h2>
              </div>
              <div className="button text-center">
                <button className="btn btn-primary text-light fw-600 font-20">Join Team</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </FrontLayout>
  )
}

export default teamPage

const teamCard = [
  {
    id: 1,
    name: <p className="h4 text-center fw-700 mb-3">Save Homeless</p>,
    title: <p className="h6 fw-500 text-center">Secretary</p>,
    image: 1,
  },
  {
    id: 2,
    name: <p className="h4 text-center  fw-700 mb-3">Save Homeless</p>,
    title: <p className="h6 fw-500  text-center">Secretary</p>,
    image: 2,
  },
  {
    id: 3,
    name: <p className="h4 text-center fw-700 mb-3">Chika Longjohn</p>,
    title: <p className="h6 fw-500 text-center">Secretary</p>,
    image: 3,
  },
  {
    id: 4,
    name: <p className="h4 text-center fw-700 mb-3">Chika Longjohn</p>,
    title: <p className="h6 fw-500 text-center">Secretary</p>,
    image: 3,
  },
  {
    id: 5,
    name: <p className="h4 text-center  fw-700 mb-3">Chika Longjohn</p>,
    title: <p className="h6 fw-500  text-center">Secretary</p>,
    image: 3,
  },
  {
    id: 6,
    name: <p className="h4 text-center fw-700 mb-3">Chika Longjohn</p>,
    title: <p className="h6 fw-500 text-center">Secretary</p>,
    image: 3,
  },
  {
    id: 7,
    name: <p className="h4 text-center fw-700 mb-3">Chika Longjohn</p>,
    title: <p className="h6 fw-500 text-center">Secretary</p>,
    image: 3,
  },
  {
    id: 8,
    name: <p className="h4 text-center  fw-700 mb-3">Chika Longjohn</p>,
    title: <p className="h6 fw-500  text-center">Secretary</p>,
    image: 3,
  },
  {
    id: 9,
    name: <p className="h4 text-center fw-700 mb-3">Chika Longjohn</p>,
    title: <p className="h6 fw-500 text-center">Secretary</p>,
    image: 3,
  },
  {
    id: 10,
    name: <p className="h4 text-center fw-700 mb-3">Chika Longjohn</p>,
    title: <p className="h6 fw-500 text-center">Secretary</p>,
    image: 3,
  },
  {
    id: 11,
    name: <p className="h4 text-center  fw-700 mb-3">Chika Longjohn</p>,
    title: <p className="h6 fw-500  text-center">Secretary</p>,
    image: 2,
  },
  {
    id: 12,
    name: <p className="h4 text-center fw-700 mb-3">Chika Longjohn</p>,
    title: <p className="h6 fw-500 text-center">Secretary</p>,
    image: 3,
  },
]
