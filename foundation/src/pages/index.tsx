import React from "react";
import Donate from "../components/icon/Donate";
import Gift from "../components/icon/Gift";
import Save from "../components/icon/Save";
import Slider from "../components/Slider";
import Slide from "../components/slide/Slide";
import FrontLayout from "../layout/FrontLayout";

const index = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <FrontLayout>
      <main className="home">
        <Slider />
        <section className="home-1 py-5">
          <div className="container">
            <div className="home-1_about">
              <div className="d-md-flex align-items-center inner">
                <div className="left">
                  <h1 className="fw-700 font-48">
                    About Love Vision <br /> Foundation
                  </h1>
                  <p className="text-muted">
                    See how we view God, Jesus, the Bible, man, and many
                    significant aspects of our faith.Progressively maintain
                    client-centered information whereas reliable information.
                    Efficiently restore wireless intermandated mindshare cross
                    -platform partnerships.
                  </p>
                  <p className="text-muted">
                    Assertively improvements. Energistically myocardinate
                    plagiarize market-driven ovements. Energistically.
                  </p>
                </div>
                <div className="right d-none d-md-block">
                  <div className="right-top">
                    <div className="img-1">
                      <img src="/images/about-1.png" alt="" />
                    </div>
                    <div className="img-2">
                      <img src="/images/about-2.png" alt="" />
                    </div>
                  </div>
                  <div className="right-bottom">
                    <div className="img-3">
                      <img src="/images/about-3.png" alt="" />
                    </div>
                    <div className="img-4">
                      <img src="/images/about-4.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="can-help">
              <h2 className=" text-center mb-2 mt-4 fw-bold ">
                {" "}
                How you can help
              </h2>
              <p className="text-center text-muted mb-3">
                Want to help the local community? There are different ways to
                get involved.
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
              <div className="d-flex justify-content-center">
                <i className="fas fa-play  fa-3x text-primary "></i>
              </div>
            </figcaption>
          </figure>
        </section>
        <section className="home-3 py-5">
          <div className="container">
            <h2 className="text-center mb-4 fw-bold">Our Arms</h2>
            <p className="text-center text-muted mb-4 w-75 mx-auto">
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
                      src={`./images/arms_${one.id}.png`}
                      alt=""
                      className="card-img"
                    />
                    <div className="card-body">
                      <h5 className="fw-bold my-3">{one.title}</h5>
                      <p className="text-muted mb-4">{one.body}</p>
                      <button className="btn text-primary border-3 rounded border-primary px-4">
                        {one.btnTxt}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="home-4 pt-5">
          <div className="container">
            <h2 className="fw-bold mb-3">Our Partners</h2>
          </div>
          <div className="partners d-flex flex-column flex-md-row ">
            <div className="part bg-light py-5">
              <img src="./images/heirs.png" alt="" />
              <span className="text-muted fw-bold">Joint Heirs</span>
            </div>
            <div className="part py-5">
              <img src="./images/winners.png" alt="" />
              <span className="text-muted fw-bold">Winners Chapel</span>
            </div>
            <div className="part bg-light py-5">
              <img src="./images/heirs.png" alt="" />
              <span className="text-muted fw-bold">The Carpenters Church</span>
            </div>
            <div className="part bg-light py-5">
              <img src="./images/heirs.png" alt="" />
              <span className="text-muted fw-bold">The Carpenters Church</span>
            </div>
          </div>
        </section>
        <section className="slide text-light">
          <Slide />
        </section>
        <section className="home-volunteer bg-primary">
          <div className="container d-flex flex-column flex-md-row justify-content-around py-5">
            <div className="volunteer d-flex flex-column justify-content-center align-items-center">
              <img src="/images/hands_1.png" alt="" className="pb-4" />
              <p className="fw-700 font-48">85642</p>
              <p className="fw-600 font-18 letter-spacing poppins">
                Volunteers
              </p>
            </div>
            <div className="volunteer d-flex flex-column justify-content-center align-items-center">
              <img src="/images/hands_2.png" alt="" className="pb-4" />
              <p className="fw-700 font-48">700</p>
              <p className="fw-600 font-18 letter-spacing poppins">
                Global Partners
              </p>
            </div>
            <div className="volunteer d-flex flex-column justify-content-center align-items-center">
              <img src="/images/hands_3.png" alt="" className="pb-4" />
              <p className="fw-700 font-48">700+</p>
              <p className="fw-600 font-18 letter-spacing poppins">
                Lives Revived
              </p>
            </div>
            <div className="volunteer d-flex flex-column justify-content-center align-items-center">
              <img src="/images/hands_4.png" alt="" className="pb-4" />
              <p className="fw-700 font-48">780</p>
              <p className="fw-600 font-18 letter-spacing poppins">
                Homes Reached
              </p>
            </div>
          </div>
        </section>
        <section className="home-5 py-5">
          <div className="container">
            <h1 className="mb-3 fw-700 font-48 text-center">
              Our Amazing Team
            </h1>
            <p className="text-muted text-center mb-4">
              We cant do it alone – from crisis to sustainably. There is no
              limit to what you can do, from a bake sale to a 10k run your
              efforts will help give a local person in crisis much more than
              food, but hope for the future.
            </p>
            <div className="row mb-5 row-cols-1 row-cols-lg-3 team g-4">
              {team.map((team) => (
                <div className="col team- " key={team.id}>
                  <div
                    className="card h-100 w-100 team--  border-0"
                    style={{
                      background: `url(./images/team-${team.id}.png) no-repeat`,
                    }}
                  >
                    <div className="team--layer d-flex align-items-center text-light justify-content-center p-0 m-0 ">
                      <i className="fab fa-2x fa-facebook"></i>
                      <i className="fab fa-2x fa-twitter"></i>
                      <i className="fab fa-2x fa-instagram"></i>
                    </div>
                    <div className="py-3 card team--bottom bg-secondary text-light px-0">
                      {team.name}
                      {team.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn mx-auto d-block fw-bold border-primary border-3 text-primary px-4 py-2">
              See More
            </button>
          </div>
        </section>
        <section className="home-6 py-5">
          <div className="container">
            <h1 className="text-center mb-3 fw-700 font-48" id="contact">
              Contact Us
            </h1>
            <p className="text-muted text-center mb-5">
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
            <form onSubmit={handleSubmit}>
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
              <button className="btn border-primary text-primary border-3 fw-bold px-4 py-2">
                Send
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
        <section className="home-7">
          <div className="content d-flex flex-column flex-md-row">
            <div className="left"></div>
            <div className="right py-5 ">
              <div className="container ">
                <div className="ms-3">
                  <h3 className="fw-700 mb-3">Subscribe To our News letter</h3>
                  <p className="text-muted fw-500 mb-5">
                    For updates and promotional events
                  </p>
                  <form className="d-flex  flex-row">
                    <input type="text" className="form-control rounded-0" />
                    <button className="btn btn-primary  text-light  rounded-0 py-2">
                      subscribe
                    </button>
                  </form>
                </div>
              </div>
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
    title: "Love Homes",
    body: "Caompletely deliver resource-leveling oppor tunities before interop erable Help us transform lives – from crisis to sustainably.",
    barWidth: 70,
    btnTxt: "Visit",
  },
  {
    id: 2,
    btncolor: "#9e4023",
    title: "Love Reform",
    body: "Caompletely deliver resource-leveling oppor tunities before interop erable Help us transform lives – from crisis to sustainably.",
    barWidth: 50,
    btnTxt: "Visit",
  },
  {
    id: 3,
    btncolor: " #9E4023",
    title: "Love Revival",
    body: "Caompletely deliver resource-leveling oppor tunities before interop erable Help us transform lives – from crisis to sustainably.",
    barWidth: 90,
    btnTxt: "Visit",
  },
];

const team = [
  {
    id: 1,
    name: <h3 className="text-center fw-700 mb-3">Lopez I. Ukpebor</h3>,
    title: <h5 className="fw-500 text-center">African Cordinator</h5>,
  },
  {
    id: 2,
    name: <h3 className="text-center fw-700 mb-3">Save Homeless people</h3>,
    title: <h5 className="fw-500 text-center">Secretary</h5>,
  },
  {
    id: 3,
    name: <h3 className="text-center fw-700 mb-3">Chika Longjohn</h3>,
    title: <h5 className="fw-500 text-center">Secretary</h5>,
  },
];
