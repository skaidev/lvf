import React from "react";
import Donate from "../components/icon/Donate";
import Gift from "../components/icon/Gift";
import Save from "../components/icon/Save";
import Slider from "../components/Slider";
import FrontLayout from "../layout/FrontLayout";

const index = (): JSX.Element => {
  return (
    <FrontLayout>
      <main className="home">
        <Slider />
        <section className="home-1 py-5">
          <div className="container">
            <h1 className="text-center text-secondary mb-4">
              About Love Vision <br /> Foundation
            </h1>
            <div className="home-1-first mb-5 d-flex flex-column align-items-md-center flex-md-row">
              <div className="left">
                <h2 className="mb-3">
                  Progressively maintain centered information whereas
                  information.
                </h2>
                <p className="text-muted mb-4">
                  See how we view God, Jesus, the Bible, man, and many
                  significant aspects of our faith.Progressively maintain
                  client-centered information whereas reliable information.
                  Efficiently restore wireless intermandated mindshare cross
                  -platform partnerships. <br /> Assertively improvements.
                  Energistically myocardinate plagiarize market-driven ovements.
                  Energistically.
                </p>
                <button className="btn border-primary text-primary px-5 py-3">
                  Learn More
                </button>
              </div>
              <div className="right">
                <div className="right-content py-5">
                  <img
                    src="./images/pexels-keira-burton-6624356 1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h2 className=" text-center mb-2"> How you can help</h2>
            <p className="text-center text-muted mb-3">
              Want to help the local community? There are different ways to get
              involved.
            </p>
            <div className="home-1-second row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {helpCard.map((e) => (
                <div className="col home-1-second-card" key={e.id}>
                  <div className="card _home-1-second-card border-0">
                    <div className="card-img _home-1-second-card-img bg-light py-5 d-flex flex-column justify-content-center align-items-center">
                      <i className="mb-4">{e.icon}</i>
                      <h3 className="fw-bold">{e.title}</h3>
                    </div>
                    <div className="card-body py-5">
                      <p className="text-center text-muted">{e.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="home-2">
          <figure className="p-0 m-0 position-relative">
            <video
              controls={false}
              autoPlay
              className="w-100 m-0 p-0"
              poster="./images/poster.png"
            >
              <source src="" />
            </video>
            <figcaption className="position-absolute py-3 text-light">
              <h1 className="mb-3 text-center">LOVE VISION FOUNDATION</h1>
              <p className="mb-3 text-center">
                See how we view God, Jesus, the Bible, man, and many significant
                aspects of our faith. Firmly rooted in Scripture, the beliefs of
                Joint Heirs Assembly guide our decisions as a church.
              </p>
              <div className="d-flex justify-content-center">
                <i className="fas fa-play  fa-3x text-primary "></i>
              </div>
            </figcaption>
          </figure>
        </section>
        <section className="home-3 py-5">
          <div className="container">
            <h1 className="text-center mb-4">Fund Raisers</h1>
            <p className="text-center text-muted mb-4">
              Help us transform lives – from crisis to sustainably. There is no
              limit to what you can do, from a bake sale to a 10k run your
              efforts will help give a local person in crisis much more than
              food, but hope for the future.
            </p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {raiseFund.map((one) => (
                <div className="col" key={one.id}>
                  <div className="card fund-card border-0 h-100">
                    <img
                      src={`./images/fund-${one.id}.png`}
                      alt=""
                      className="card-img"
                    />
                    <div className="card-body">
                      <button
                        className={`btn ${one.btncolor} mb-3 text-light px-5 py-3`}
                        style={{ background: `${one.btncolor}` }}
                      >
                        {one.btnTxt}
                      </button>
                      <h5 className="fw-bold mb-3">{one.title}</h5>
                      <p className="text-muted mb-4">{one.body}</p>
                      <div className="progress rounded-pill mb-4">
                        <div
                          className={`progress-bar ${one.btncolor} rounded-pill`}
                          role="progressbar "
                          style={{
                            width: `${one.barWidth}%`,
                            background: `${one.btncolor}`,
                          }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                      <button className="btn border-light text-muted px-5 py-3">
                        {one.type}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </FrontLayout>
  );
};

export default index;

const helpCard = [
  {
    id: 1,
    title: "Donate Money",
    icon: <Save />,
    body: "We know that not everyone has the time to volunteer with us or organise a food collection. You can help us support people in crisis by donating money today.",
  },
  {
    id: 2,
    title: "Donate Time",
    icon: <Donate />,
    body: "We are often looking for new warehouse volunteers and drivers to help pack and deliver our emergency food parcels.We also look office volunteers to help with a variety of needs.<br />If you would like to support our work in this way, please fill out this form and we will get in touch with you as soon as possible to discuss!",
  },
  {
    id: 3,
    title: "Give Gifts",
    icon: <Gift />,
    body: "We always need donations of non-perishable foods and toiletries. From a few cans to an office food collection, we appreciate every donation and it goes a long way to make a difference.",
  },
];

const raiseFund = [
  {
    id: 1,
    btncolor: " #9E4023",
    title: "Fund Business women",
    body: "Caompletely deliver resource-leveling oppor tunities before interop erable Help us transform lives – from crisis to sustainably.",
    barWidth: 70,
    btnTxt: "Contribute",
    type: "Love Reform",
  },
  {
    id: 2,
    btncolor: "bg-secondary",
    title: "Save Homeless people",
    body: "Caompletely deliver resource-leveling oppor tunities before interop erable Help us transform lives – from crisis to sustainably.",
    barWidth: 50,
    btnTxt: "Partner",
    type: "Love Homes",
  },
  {
    id: 3,
    btncolor: " #9E4023",
    title: "Sponsor our Revival Programmes",
    body: "Caompletely deliver resource-leveling oppor tunities before interop erable Help us transform lives – from crisis to sustainably.",
    barWidth: 90,
    btnTxt: "Sponsor",
    type: "Love Revival",
  },
];
