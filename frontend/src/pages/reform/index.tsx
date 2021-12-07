/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Awarding from "components/icon/Awarding";
import Cases from "components/icon/Cases";
import Empowering from "components/icon/Empowering";
import Lvolunteer from "components/icon/Lvolunteer";
import Refdonate from "components/icon/Refdonate";
import Refjoin from "components/icon/Refjoin";
import Refmembers from "components/icon/Refmembers";
import Volunteers from "components/icon/Volunteers";
import Refslider from "components/slide/Refslide";
import ReformLayout from "layout/ReformLayout";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const ReformPage = (): JSX.Element => {
  return (
    <ReformLayout>
      <main>
        <section className="first">
          <div className="first-cover">
            <div className="first-content py-3 d-flex align-items-center">
              <div className="container text-white">
                <h1 className="rochester fw-400 font-96 p-0 mb-3">
                  Love Reform
                </h1>
                <p className="p-0 font-64 mb-3">
                  <b className="fw-700 font-64">Empowerment</b> &nbsp;
                  <span className="fw-300 font-64">
                    for Startups
                    <br />
                    Awarding &nbsp;
                  </span>
                  <b className="fw-700 font-64">Scholarships</b>
                </p>
                <p className="p-0 fw-400 mb-4">
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
                  <button className="btn  bg-transparent border-3 fw-bold border-white text-white px-4 py-2">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="second py-5">
          <div className="container">
            <div className="row blur py-1 row-cols-1 justify-content-center justify-content-md-between row-cols-md-3 g-3">
              {secondSec.map((item) => (
                <div className="col " key={item.id}>
                  <div
                    className="card border-0 bg-transparent d-flex flex-row justify-content-center align-items-center h-100"
                    style={{ gap: "1rem", height: "162px !important" }}
                  >
                    {item.icon}
                    <div className="txt">
                      <p className="h2 fw-bold p-0 m-0 mb-1">{item.num}</p>
                      <p className="h6">{item.txt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="h3 text-center text-danger fw-500 font-24 p-0 m-0 mb-3">
              About Us
            </p>
            <p className="h1 text-center fw-700 font-48 p-0 m-0 mb-3">
              Be Part of a Change
            </p>
            <p className="text-center fw-400 text-muted p-0">
              How all this mistaken idea of denouncing pleasure and praising
              pain was born and I will give you a complete account of the system
              expound the actually teachings of the great explorer of the truth
              pursues.
            </p>
          </div>
        </section>
        <section className="py-5 third d-flex">
          <div className="container align-items-md-center d-flex flex-column flex-md-row third-wrap">
            <div className="left d-flex align-items-center">
              <p className="text-light fa-2x fw-bold position-relative">
                Is Working Towards Helping the <br /> Lesspriviledged/
                Underpriviledge <br />
                people
                <span
                  className="position-absolute fw-400 cursive text-secondary  mt-5 mt-md-0 font-288 font-400"
                  style={{
                    transform: "translateY(-45%)",
                    left: "0",
                    top: "0",
                    whiteSpace: "nowrap",
                  }}
                >
                  love Reform
                </span>
              </p>
            </div>
            <div className="right me-auto ms-auto">
              <div className=" right-circle rounded-circle border">
                <i className="fas fa-5x fa-play-circle text-secondary"></i>
              </div>
            </div>
          </div>
        </section>
        <section className="fourth py-5">
          <div className="container d-flex fourth-wrap flex-column flex-md-row">
            <div className="left d-md-flex flex-md-column flex-lg-row text-center text-md-start align-items-center border-end border-secondary border-0 border-1 px-md-4">
              <div className="icon ">
                <Empowering />
              </div>
              <div className="txt text-center text-lg-start text-white">
                <p className="p-0 fw-600 font-16 mb-2 ">
                  Empowering Startups,
                  <br /> Youth and Women
                </p>
                <span className="fw-400">
                  We are a non-profit organisation <br /> in USA that works
                  towards
                  <br />
                  supporting underprivileged <br /> children.
                </span>
              </div>
            </div>
            <div className="right d-md-flex flex-md-column flex-lg-row text-center text-md-start align-items-center border-start border-0  border-secondary border-1 px-md-4">
              <div className="icon">
                <Awarding />
              </div>
              <div className="txt text-center text-lg-start text-white">
                <p className="p-0 fw-600 mb-2 ">
                  Awarding Scholarships to <br /> Deserivng Youths
                </p>
                <span className="fw-400 font-16">
                  We are a non-profit organisation <br /> in USA that works
                  towards <br />
                  supporting underprivileged <br /> children.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="fifth py-5">
          <div className="container">
            <p className="h4 text-center text-warning p-0 m-0 mb-3">
              How You Can Help
            </p>
            <p className=" h1 text-center mb-4 fw-700 font-48">
              Join the Love <br /> Reformation Family
            </p>
            <div className="row row-cols-1 row-cols-md-3 g-3">
              {help.map((card) => (
                <div className="col mb-5" key={card.id}>
                  <div className="card  bg-light border-0 h-100 py-5">
                    <div className="card-img mb-3 d-flex justify-content-center">
                      {card.ico}
                    </div>
                    <p className="text-center mb-3 fw-bold">{card.title}</p>
                    {card.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="seventh ">
          <div className="seventh-cover py-5 d-flex align-items-center">
            <div className="container text-white">
              <p className="h1 text-center fw-bold m-0 mb-2 p-0">
                How do you end global poverty? <br /> You start with Empowerment
              </p>
              <p className="text-center mb-4 ">
                4 proven areas of focus help needy children escape
                poverty.proven areas of focus help needy <br /> children escape
                poverty.proven areas needy children escape poverty.
              </p>
              <Link href="/donate">
                <button className="btn mx-auto d-block btn-primary text-white px-4 py-2 fw-bold">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="eight  py-5">
          <div className="container mb-5">
            <p className="h2 text-center text-warning mb-3">Testimonials</p>
            <p className="h1 text-center fw-bold mb-5">Why people love us</p>
            <Refslider />
          </div>
        </section>
        <section className="nine py-5">
          <div className="container nine-wrap">
            <p className="h2 text-center text-warning mb-3 p-0">
              Team behind Love Reform
            </p>
            <p className="h1 fw-700 font-48 text-center m-0 p-0 mb-5">
              Our Amazing Team
            </p>
            <p className="h5 p-0 mb-5 text-center fw-400 ">
              Our work would not be possible without the work of our dedicated
              volunteers.
            </p>
            <div className="row row-cols-1 row-cols-md-3 g-3">
              {teamCard.map((card) => (
                <div className="col team-card mb-5" key={card.id}>
                  <div className="card border-primary me-auto ms-auto position-relative team-card-wrap border-0 h-100">
                    <img
                      className="card-img team-card-img"
                      src={`/images/reform_images/founder_${card.id}.png`}
                      alt=""
                    />
                    <div className="card-body team-card-body bg-white">
                      <p className="h3 text-warning text-center mb-2 fw-500 ">
                        Maria Anahonda
                      </p>
                      <p className="text-muted fw-500 text-center p-0 mb-5 mb-md-4">
                        Founder
                      </p>
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
            <div className="text-center">
              <button className="btn text-light">
                See All <br />
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>
        </section>
        <section className="ten py-5">
          <div className="container">
            <p className="h2 text-center m-0 p-0 mb-3 fw-500 text-warning">
              Our Successful Cases
            </p>
            <p className="h1 fw-700 font-48 text-center m-0 p-0 mb-4">
              Gallery
            </p>
            <div className="row row-cols-1 row-cols-md-3 g-3">
              {teamCard.map((card) => (
                <div className="col mb-3 bg-transparent" key={card.id}>
                  <div className="card h-100 gallery-card position-relative rounded rounded-3 border-0">
                    <img
                      src="/images/reform_images/fund.png"
                      alt=""
                      className="card-img"
                    />
                    <div className="card-body">
                      <p className="card-title fw-500 ">Lady Evans</p>
                      <p className="mb-3 fw-400">Financial Empowerment</p>
                      <p className="text-muted fw-500 m-0 p-0">
                        Now a Certified Hacker
                      </p>
                      <p
                        className="d-flex text-muted align-items-center"
                        style={{ gap: "1rem" }}
                      >
                        <i className="fas fa-calendar-alt fw-500"> </i>
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
            <div className="text-center">
              <button className="btn text-primary">
                See All <br />
                <i className="fas fa-chevron-down"></i>
              </button>
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
              <img src="/images/reform_images/spon1.png" alt="" />
              <img src="/images/reform_images/spon2.png" alt="" />
              <img src="/images/reform_images/spon1.png" alt="" />
              <img src="/images/reform_images/spon2.png" alt="" />
              <img src="/images/reform_images/spon1.png" alt="" />
              <img src="/images/reform_images/spon2.png" alt="" />
              <img src="/images/reform_images/spon1.png" alt="" />
              <img src="/images/reform_images/spon2.png" alt="" />
            </Marquee>
          </div>
        </section>
        <section className="twelve bg-white py-5">
          <div className="container">
            <p className="h1 text-center font-48 fw-bold mb-3">Contact Us</p>
            <p
              className="text-muted font-500 text-center mb-5"
              style={{ fontSize: "1.3rem" }}
            >
              We cant do it alone – from crisis to sustainably. There is no
              limit to what you can do, from a bake sale to a 10k run your help
              give food, but hope for the future.
            </p>
            <div className="contact-icon d-flex mb-5 flex-column flex-sm-row justify-content-around">
              <div className="mail d-flex flex-column align-items-center">
                <i className="fas fa-2x fa-map-marker-alt px-4 py-3 text-light mb-3 bg-secondary rounded"></i>
                <span className="text-center poppins fw-600">
                  jointheirs5@gmail.com
                </span>
              </div>
              <div className="address d-flex flex-column align-items-center">
                <i className="fas fa-2x fa-envelope px-4 py-3 text-light mb-3 bg-secondary rounded"></i>
                <span className="text-center poppins fw-600">
                  No 6 Green Tower, Street Rumuodara
                </span>
              </div>
              <div className="tel d-flex flex-column align-items-center">
                <i className="fas fa-2x fa-tty px-4 py-3 text-light mb-3 bg-secondary rounded"></i>
                <span className="text-center poppins fw-600">
                  +234 9012624162
                </span>
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
                  placeholder="Cliff"
                  spellCheck={true}
                />
                <input
                  type="email"
                  multiple
                  className="form-control py-3"
                  placeholder="Email"
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
    </ReformLayout>
  );
};

export default ReformPage;

const secondSec = [
  { id: 1, icon: <Cases />, num: "24,000+", txt: "Donations Complete" },
  { id: 2, icon: <Volunteers />, num: "24,000+", txt: "Total Volunteers" },
  { id: 3, icon: <Refmembers />, num: "88,706 ", txt: "Community Members" },
];

const help = [
  {
    id: 1,
    title: "Join our Community",
    ico: <Refjoin />,
    body: (
      <p className="text-center container">
        We are a non-profit organisation in <br /> USA that works towards <br />{" "}
        supporting underprivileged <br /> children.
      </p>
    ),
  },
  {
    id: 2,
    title: "Be a Volunteer",
    ico: <Lvolunteer />,
    body: (
      <p className="text-center container">
        We are a non-profit organisation in <br /> USA that works towards <br />{" "}
        supporting underprivileged <br /> children.
      </p>
    ),
  },
  {
    id: 3,
    title: "Start Donating",
    ico: <Refdonate />,
    body: (
      <p className="text-center container">
        We are a non-profit organisation in <br /> USA that works towards <br />{" "}
        supporting underprivileged <br /> children.
      </p>
    ),
  },
];

const teamCard = [
  { id: 1, img: 1 },
  { id: 2, img: 2 },
  { id: 3, img: 3 },
];
