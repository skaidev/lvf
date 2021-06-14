import React from "react";
import Marquee from "react-fast-marquee";
import Awarding from "../components/icon/Awarding";
import Cases from "../components/icon/Cases";
import Donate from "../components/icon/Donate";
import Empowering from "../components/icon/Empowering";
import Join from "../components/icon/Join";
import Lvolunteer from "../components/icon/Lvolunteer";
import Members from "../components/icon/Members";
import Volunteers from "../components/icon/Volunteers";
import Slide from "../components/slider/Slide";
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
        <section className="eight  py-5">
          <div className="container">
            <h3 className="text-center text-warning mb-3">Testimonials</h3>
            <h1 className="text-center fw-bold mb-4">Why people love us</h1>
            <Slide />
          </div>
        </section>
        <section className="nine py-5">
          <div className="container nine-wrap">
            <h3 className="text-center text-warning mb-3 p-0">
              Team behind Love Reform
            </h3>
            <h1 className="fw-bold text-center m-0 p-0 mb-3">
              Our Amazing Team
            </h1>
            <h5 className="p-0 mb-4 text-center fw-lighter ">
              Our work would not be possible without the work of our dedicated
              volunteers.
            </h5>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {teamCard.map((card) => (
                <div className="col team-card" key={card}>
                  <div className="card position-relative team-card-wrap border-0 h-100">
                    <img
                      className="card-img team-card-img"
                      src="./images/founder.png"
                    />
                    <div className="card-body team-card-body bg-white">
                      <h2 className="text-warning text-center mb-2 fw-lighter ">
                        Maria Anahonda
                      </h2>
                      <p className="text-muted text-center p-0 mb-3">Founder</p>
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
        <section className="ten py-5">
          <div className="container">
            <h3 className="text-center m-0 p-0 mb-3 fw-lighter text-warning">
              Our Successful Cases
            </h3>
            <h1 className="fw-bold text-center m-0 p-0 mb-4">Gallery</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {teamCard.map((card) => (
                <div className="col bg-transparent" key={card}>
                  <div className="card h-100 gallery-card position-relative rounded rounded-3 border-0">
                    <img src="./images/fund.png" alt="" className="card-img" />
                    <div className="card-body">
                      <p className="card-title fw-bold ">Lady Evans</p>
                      <p className="mb-3">Financial Empowerment</p>
                      <p className="text-muted m-0 p-0">
                        Now a Certified Hacker
                      </p>
                      <p
                        className="d-flex text-muted align-items-center"
                        style={{ gap: "1rem" }}
                      >
                        <i className="fas fa-calendar-alt"> </i>
                        <span>5th june 2020</span>
                      </p>
                      <div className="gallery-card-right bg-primary text-white px-5  fw-bold">
                        Success
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="eleven py-5 position-relative">
          <div className=" container-fluid ">
            <span className="abs position-absolute fw-bolder p-0 m-0">
              Sponsors
            </span>
            <Marquee
              pauseOnHover={true}
              speed={50}
              delay={3}
              className="d-flex align-items-center"
            >
              <img src="./images/spon1.png" alt="" />
              <img src="./images/spon2.png" alt="" />
              <img src="./images/spon1.png" alt="" />
              <img src="./images/spon2.png" alt="" />
              <img src="./images/spon1.png" alt="" />
              <img src="./images/spon2.png" alt="" />
              <img src="./images/spon1.png" alt="" />
              <img src="./images/spon2.png" alt="" />
            </Marquee>
          </div>
        </section>
        <section className="bg-white py-5">
          <div className="container">
            <h1 className="text-center fw-bold mb-3">Contact Us</h1>
            <p
              className="text-muted text-center mb-5"
              style={{ fontSize: "1.3rem" }}
            >
              We cant do it alone – from crisis to sustainably. There is no
              limit to what you can do, from a bake sale to a 10k run your help
              give food, but hope for the future.
            </p>
            <div className="contact-icon d-flex mb-5 flex-column flex-sm-row justify-content-around">
              <div className="mail d-flex flex-column align-items-center">
                <i className="fas fa-2x fa-map-marker-alt px-4 py-3 text-light mb-3 bg-primary rounded"></i>
                <span className="text-center">jointheirs5@gmail.com</span>
              </div>
              <div className="address d-flex flex-column align-items-center">
                <i className="fas fa-2x fa-envelope px-4 py-3 text-light mb-3 bg-primary rounded"></i>
                <span className="text-center">
                  No 6 Green Tower, Street Rumuodara
                </span>
              </div>
              <div className="tel d-flex flex-column align-items-center">
                <i className="fas fa-2x fa-tty px-4 py-3 text-light mb-3 bg-primary rounded"></i>
                <span className="text-center">+234 9012624162</span>
              </div>
            </div>
            <form>
              <div
                className="d-flex mb-4 flex-column flex-md-row"
                style={{ gap: "2rem" }}
              >
                <input
                  type="text"
                  className="form-control py-3"
                  required
                  placeholder="Charles Cliff"
                  spellCheck={true}
                />
                <input
                  type="email"
                  multiple
                  className="form-control py-3"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <input
                type="text"
                className=" form-control py-3 mb-4"
                placeholder="Subject"
                spellCheck
              />

              <textarea
                className="form-control form-control-lg mb-4"
                id=""
                cols={30}
                rows={10}
                spellCheck
                placeholder="Type your Message"
              ></textarea>
              <button className="btn btn-outline-primary bg-primary text-white fw-bold px-4 py-2">
                Send Message
              </button>
            </form>
          </div>
        </section>
        <section className="map ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.444085232075!2d7.032735314762972!3d4.86501199646747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d27198c56a95%3A0x4bf2d3ebd3c1a2dd!2sJoint%20Heirs%20Assembly%20Int&#39;l%20Inc.!5e0!3m2!1sen!2sng!4v1621608305779!5m2!1sen!2sng"
            height="450"
            allowFullScreen={false}
            loading="lazy"
            style={{ width: "100%", border: 0, margin: 0, padding: 0 }}
          ></iframe>
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
const teamCard = [1, 2, 3];
