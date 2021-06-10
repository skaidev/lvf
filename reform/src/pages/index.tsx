import React from "react";
import Awarding from "../components/icon/Awarding";
import Cases from "../components/icon/Cases";
import Donate from "../components/icon/Donate";
import Empowering from "../components/icon/Empowering";
import Join from "../components/icon/Join";
import Lvolunteer from "../components/icon/Lvolunteer";
import Members from "../components/icon/Members";
import Volunteers from "../components/icon/Volunteers";
import FrontLayout from "../layout/FrontLayout";

const index = (): JSX.Element => {
  return (
    <FrontLayout>
      <main>
        <section className="first">
          <div className="first-cover">
            <div className="first-content py-3 d-flex align-items-center">
              <div className="container text-white">
                <h1 className="rochester p-0 mb-3 fa-5x">Love Reform</h1>
                <p className="p-0 fa-3x mb-3">
                  <b className="fw-bolder">Empowerment</b> &nbsp;
                  <span>
                    for Startups
                    <br />
                    Awarding &nbsp;
                  </span>
                  <b>Scholarships</b>
                </p>
                <p className="p-0 mb-4">
                  Economic empowerment is central to women’s ability to overcome
                  poverty, cope with shocks <br /> and improve their well-being.
                  When women realize their economic goals, whether it’s growing
                  <br />a business
                </p>
                <div
                  className="btn-holder d-flex flex-wrap"
                  style={{ gap: "1rem" }}
                >
                  <button className="btn  mb-md-0 fw-bold btn-primary text-white px-4 py-2">
                    Join Us
                  </button>
                  <button className="btn  bg-transparent border fw-bold border-white text-white px-4 py-2">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="second py-5">
          <div className="container">
            <div className="row blur py-1 mb-4 row-cols-1 justify-content-center justify-content-sm-between row-cols-sm-2 row-cols-md-3 g-3">
              {secondSec.map((item) => (
                <div className="col " key={item.id}>
                  <div
                    className="card border-0 bg-transparent d-flex flex-row align-items-center h-100"
                    style={{ gap: "1rem" }}
                  >
                    {item.icon}
                    <div className="txt">
                      <h2 className="fw-bold p-0 m-0 mb-1">{item.num}</h2>
                      <h6>{item.txt}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-center text-warning p-0 m-0 mb-3">About Us</h3>
            <h1 className="text-center fw-bold p-0 m-0 mb-3">
              Be Part of a Change
            </h1>
            <p className="text-center text-muted p-0">
              How all this mistaken idea of denouncing pleasure and praising
              pain was born and I will give you a complete account of the system
              expound the actually teachings of the great explorer of the truth
              pursues.
            </p>
          </div>
        </section>
        <section className="py-5 third">
          <div className="container align-items-md-center d-flex flex-column flex-md-row third-wrap">
            <div className="left">
              <p className="text-light fa-2x fw-bold position-relative">
                Is Working Towards Helping the <br /> Lesspriviledged/
                Underpriviledge <br />
                people
                <span
                  className="position-absolute fw-lighter cursive text-secondary top-0 fa-4x"
                  style={{ transform: "translateY(-30%)" }}
                >
                  love homes
                </span>
              </p>
            </div>
            <div className="right">
              <div className=" right-circle rounded-circle border">
                <i className="fas fa-5x fa-play-circle text-secondary"></i>
              </div>
            </div>
          </div>
        </section>
        <section className="fourth py-5">
          <div className="container d-flex fourth-wrap flex-column flex-md-row">
            <div className="left d-flex align-items-center border-end border-secondary border-0 border-1 px-md-4">
              <div className="icon">
                <Empowering />
              </div>
              <div className="txt text-white">
                <p className="p-0 fw-bold mb-3 ">
                  Empowering Startups, Youth and Women
                </p>
                <span>
                  We are a non-profit organisation in USA that works towards
                  supporting underprivileged children.
                </span>
              </div>
            </div>
            <div className="right d-flex align-items-center border-start border-0  border-secondary border-1 px-md-4">
              <div className="icon">
                <Awarding />
              </div>
              <div className="txt text-white">
                <p className="p-0 fw-bold mb-3 ">
                  Awarding Scholarships to Deserivng Youths
                </p>
                <span>
                  We are a non-profit organisation in USA that works towards
                  supporting underprivileged children.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="fifth py-5">
          <div className="container">
            <h3 className="text-center text-warning p-0 m-0 mb-3">
              How You Can Help
            </h3>
            <h1 className="text-center mb-4 fw-bold">
              Join the Love <br /> Reformation Family
            </h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-3">
              {help.map((card) => (
                <div className="col" key={card.id}>
                  <div className="card bg-light h-100 py-5">
                    <div className="card-img mb-3 d-flex justify-content-center">
                      {card.ico}
                    </div>
                    <p className="text-center mb-3 fw-bold">{card.title}</p>
                    <p className="text-center container">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="sixth py-5">
          <div className="container">
            <h1 className="text-center fw-bold mb-4">FundRaise</h1>
            <p className="p-0 text-center mb-4">
              We connects nonprofits, donors, and companies in nearly every
              country around the world.
            </p>
            <div className="row row-cols-1 mb-3 row-cols-sm-2 row-cols-md-3 g-3">
              {card.map((card) => (
                <div className="col" key={card}>
                  <div className="card fundbox border-0 position-relative">
                    <img src="./images/fund.png" alt="" className="card-img" />
                    <div
                      className="card-body bg-transparent position-relative"
                      style={{ overflow: "hidden" }}
                    >
                      <p className="p-0 mb-1 fw-bold">Lady Evans</p>
                      <p className="p-0 mb-3">Financial Empowerment</p>
                      <p className="p-0 mb-2 text-muted">
                        Needs help to start up a business in Digital Marketing
                        but has no idea about this course
                      </p>
                      <p className="text-muted mb-4">
                        Aim: Raise 50,000 for training
                      </p>
                      <div
                        className="d-flex text-muted align-items-center"
                        style={{ gap: "1rem" }}
                      >
                        <i className="fas fa-calendar-alt"></i>
                        <span>5th june 2020</span>
                      </div>
                      <div className="side bg-info px-5 fw-bold text-center text-white position-absolute">
                        Ongoing
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="fund-end text-primary d-flex flex-column align-items-center">
              <span className="fw-bold">See All</span>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </section>
        <section className="seventh ">
          <div className="seventh-cover py-5 d-flex align-items-center">
            <div className="container text-white">
              <h1 className="text-center fw-bold m-0 mb-2 p-0">
                How do you end global poverty? <br /> You start with Empowerment
              </h1>
              <p className="text-center mb-4 ">
                4 proven areas of focus help needy children escape
                poverty.proven areas of focus help needy <br /> children escape
                poverty.proven areas needy children escape poverty.
              </p>
              <button className="btn mx-auto d-block btn-primary text-white px-4 py-2 fw-bold">
                Donate Now
              </button>
            </div>
          </div>
        </section>
        <section className="eight d-flex align-items-center justify-content-center py-5">
          <div className="tri"></div>
        </section>
      </main>
    </FrontLayout>
  );
};

export default index;

const secondSec = [
  { id: 1, icon: <Cases />, num: "24,000+", txt: "Donations Complete" },
  { id: 2, icon: <Volunteers />, num: "24,000+", txt: "Total Volunteers" },
  { id: 3, icon: <Members />, num: "88,706 ", txt: "Community Members" },
];

const help = [
  {
    id: 1,
    title: "Joim our Community",
    ico: <Join />,
    body: " We are a non-profit organisation in USA that works towardssupporting underprivileged children.",
  },
  {
    id: 2,
    title: "Be a Volunteer",
    ico: <Lvolunteer />,
    body: " We are a non-profit organisation in USA that works towardssupporting underprivileged children.",
  },
  {
    id: 3,
    title: "Start Donating",
    ico: <Donate />,
    body: " We are a non-profit organisation in USA that works towardssupporting underprivileged children.",
  },
];

const card = [1, 2, 3, 4, 5, 6];
