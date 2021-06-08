import React from "react";
import Donating from "../components/icon/Donating";
import Education from "../components/icon/Education";
import Environment from "../components/icon/Environment";
import Health from "../components/icon/Health";
import Join from "../components/icon/Join";
import Volunteer from "../components/icon/Volunteer";
import FrontLayout from "../layout/FrontLayout";

const index = (): JSX.Element => {
  return (
    <FrontLayout>
      <main>
        <base href="./images/" />
        <section className="first">
          <div className="first-cover d-flex p-0 m-0   align-items-center position-relative">
            <div className="container text-light">
              <h3 className="fw-bold text-center mb-3">
                Donate, Fundraise & volunteer
              </h3>
              <h1 className="text-center mb-3 fw-bolder fa-2x">
                Together We Can Make <br /> A Difference
              </h1>
              <p className="p-0 m-0 mb-4 text-center fw-light">
                To improve Learning environment and cater for the well being of
                the needy
              </p>
              <button className="btn fw-bold text-light btn-primary py-3 px-5 mx-auto d-block">
                Join Us
              </button>
            </div>
            <h1
              className="p-0 text-center fa-4x mx-auto w-100 text-muted fw-bolder position-absolute"
              style={{ opacity: 0.2, bottom: "-25px" }}
            >
              Love Homes
            </h1>
          </div>
        </section>
        <section className="second py-5">
          <div className="container align-items-md-center d-flex flex-column flex-md-row second-cover">
            <div className="left">
              <h3 className="text-warning mb-3">
                _______ &nbsp;&nbsp;&nbsp;About Us
              </h3>
              <h2 className="fw-bold mb-3">
                Be Part of a&nbsp;
                <span className="fw-bold text-light bg-warning">Change</span>
              </h2>
              <p className="text-muted mb-3">
                How all this mistaken idea of denouncing pleasure and praising
                pain was born and I will give you a complete account of the
                system expound the actually teachings of the great explorer of
                the truth pursues.
              </p>
              <div className="left-btn-holder mb-4 d-flex flex-wrap">
                <div className="left">
                  <button className="btn w-100 ps-0 py-2 pe-5 btn-warning">
                    <i className="fas fa-arrow-right animate__animated animate__heartBeat animate__infinite"></i>
                    &nbsp;&nbsp;Our Mission
                  </button>
                  <p className="text-muted mt-2">
                    We are a non-profit organisation in USA that works towards
                    supporting underprivi
                  </p>
                </div>
                <div className="right">
                  <button className="btn w-100 ps-0 py-2 pe-5 btn-dark">
                    <i className="fas fa-arrow-right animate__animated animate__heartBeat animate__infinite"></i>
                    &nbsp;&nbsp;Our Vision
                  </button>
                  <p className="text-muted mt-2">
                    We are a non-profit organisation in USA that works towards
                    supporting underprivi
                  </p>
                </div>
              </div>
              <button className="btn py-2 px-4 border-primary text-primary">
                Know More
              </button>
            </div>
            <div className="right d-flex justify-content-end">
              <div className="img-ring rounded border border-primary p-3">
                <img
                  src="pexels-william-fortunato-6393179 1.png"
                  alt=""
                  className="rounded w-100"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="third py-5">
          <div className="container">
            <h3 className="text-center fw-light text-warning mb-3">
              What We Do
            </h3>
            <h2 className="fw-bolder fa-2x mb-4 text-center">
              We have selected the <br /> following&nbsp;
              <span className="text-light bg-warning">Issues</span>
            </h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {whatWeDo.map((e) => (
                <div className="col bg-transparent" key={e.id}>
                  <div className="card bg-transparent border-0 d-flex flex-column align-items-center">
                    <span className="mb-2">{e.icon}</span>
                    <span className="mb-3">{e.title}</span>
                    <p className="text-center">{e.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="fourth py-5">
          <div className="container ">
            <h3 className="fw-light mb-3 text-center text-warning">
              What You Can Do
            </h3>
            <div className="row what row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
              {whatYouCanDo.map((e) => (
                <div
                  className="col what-col"
                  key={e.id}
                  style={{ minHeight: "484px" }}
                >
                  <div
                    className="card what-col-card rounded border-0 h-100 "
                    style={{ background: `${e.bgc}` }}
                  >
                    <div
                      className="rotate d-flex flex-column justify-content-center align-items-center h-100"
                      style={{ transform: `${e.rotate}` }}
                    >
                      <div
                        className="n-rotate d-flex flex-column justify-content-center align-items-center text-light"
                        style={{ transform: `${e.nrotate}` }}
                      >
                        <span className="mb-3">{e.icon}</span>
                        <b className="text-center mb-4 ">{e.title}</b>
                        <p className="text-center container"> {e.body} </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-5 fifth">
          <div className="container align-items-md-center d-flex flex-column flex-md-row fifth-wrap">
            <div className="left">
              <p className="text-light fa-2x fw-bold position-relative">
                Is Working Towards Helping the <br /> Lesspriviledged/
                Underpriviledge <br />
                people
                <span
                  className="position-absolute fw-lighter cursive text-primary top-0 fa-4x"
                  style={{ transform: "translateY(-30%)" }}
                >
                  love homes
                </span>
              </p>
            </div>
            <div className="right">
              <div className=" right-circle rounded-circle border">
                <i className="fas fa-5x fa-play-circle text-primary"></i>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 sixth">
          <div className="container">
            <h2 className="text-warning mb-4">Our Volunteers</h2>
            <div
              className="write-up mb-4 d-flex align-items-md-center flex-column flex-md-row"
              // style={{ gap: "3rem" }}
            >
              <div className="left">
                <h1 className=" fw-bold">
                  <span className="bg-warning m-0 p-0 text-light">
                    Volunteers
                  </span>
                  &nbsp;Who <br />
                  Always Support Us
                </h1>
              </div>
              <div className="right">
                <p className="p-0 m-0">
                  We are a non-profit organisation in USA that works towards
                  supporting underprivileged children reach their full potential
                  - physical, mental as well as emotional.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
              {sixthCard.map((card) => (
                <div className="col sixth-card" key={card.id}>
                  <div className="card sixth-card-main h-100 position-relative">
                    <img
                      src={`Rectangle ${card.img}.png`}
                      alt=""
                      className="position-absolute w-100 h-100"
                    />
                    <div
                      className="cover h-100 d-flex align-items-end"
                      style={{ background: `${card.bg}` }}
                    >
                      <div
                        className="text-light polygon d-flex align-items-center border-start border-5 border-primary border-end-0 border-top-0 border-bottom-0 px-2 fw-bold"
                        style={{ background: `${card.polygon}` }}
                      >
                        <span> {card.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="seventh py-5">
          <div className="container">
            <h1 className="text-center mb-3 fw-bold">Become a Volunteer</h1>
            <p className="text-center mb-5">
              We are a non-profit organisation in USA that works towards
              supporting <br /> underprivileged children reach their full
              potential - physical, mental as well as <br /> emotional.
            </p>
            <form className=" py-5 w-75 d-block mx-auto px-md-5">
              <div className="container-md form px-md-4 py-4 rounded bg-white">
                <img loading="lazy" src="one.png" alt="" />
                <img loading="lazy" src="two.png" alt="" />
                <img loading="lazy" src="three.png" alt="" />
                <img loading="lazy" src="four.png" alt="" />
                <img loading="lazy" src="five.png" alt="" />
                <img loading="lazy" src="six.png" alt="" />
                <div className="f-row py-2 d-flex mb-md-3 flex-column flex-md-row">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control py-3"
                  />
                  <input
                    type="text"
                    placeholder="Gender"
                    list="gender"
                    className="form-control py-3"
                  />
                  <datalist id="gender" className="bg-dark text-secondary">
                    <option value="Male" className="bg-dark text-secondary" />
                    <option value="Female" className="bg-dark text-secondary" />
                  </datalist>
                </div>
                <div className="f-row py-2 mb-4  d-flex flex-column flex-md-row">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control py-3"
                  />
                  <input
                    type="text"
                    placeholder="How you  heard about us"
                    className="form-control py-3"
                  />
                </div>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="form-control mb-4"
                  placeholder="Briefly Explain what you want to do for this organization and how..."
                ></textarea>

                <button className="btn border-2 px-5 py-2 fw-bold border-primary text-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </FrontLayout>
  );
};

export default index;
const whatWeDo = [
  {
    id: 1,
    title: "Health",
    icon: <Health />,
    body: "We are a non-profit organisation in USA that works towards supporting underprivileged children.",
  },
  {
    id: 2,
    title: "Education",
    icon: <Education />,
    body: "We are a non-profit organisation in USA that works towards supporting underprivileged children.",
  },
  {
    id: 3,
    title: "Environment",
    icon: <Environment />,
    body: "We are a non-profit organisation in USA that works towards supporting underprivileged children.",
  },
];

const whatYouCanDo = [
  {
    id: 1,
    title: "Joim our Community",
    icon: <Join />,
    body: "We are a non-profit organisation in USA that works towards supporting underprivileged children.",
    rotate: "rotate(-15.17deg)",
    nrotate: "rotate(15.17deg)",
    bgc: "linear-gradient(155.59deg, #25283A -60.81%, #9E4023 211.07%);",
  },
  {
    id: 2,
    title: "Be a Volunteer",
    icon: <Volunteer />,
    body: "We are a non-profit organisation in USA that works towards supporting underprivileged children.",
    rotate: "rotate(15.17deg)",
    nrotate: "rotate(-15.17deg)",
    bgc: "#25283A",
  },
  {
    id: 3,
    title: "Start Donating",
    icon: <Donating />,
    body: "We are a non-profit organisation in USA that works towards supporting underprivileged children.",
    rotate: "rotate(-15.17deg)",
    nrotate: "rotate(15.17deg)",
    bgc: " #9E4023",
  },
];

const sixthCard = [
  {
    id: 1,
    name: "Maria Anahonda",
    bg: "rgba(158, 64, 35, 0.38)",
    img: 78,
    polygon: "rgba(158, 64, 35, 0.38)",
  },
  {
    id: 2,
    name: "Maria Anahonda",
    bg: "rgba(158, 64, 35, 0.38)",
    img: 79,
    polygon: "rgba(37, 40, 58, 0.38)",
  },
  {
    id: 3,
    name: "Maria Anahonda",
    bg: "rgba(158, 64, 35, 0.38)",
    img: 80,
    polygon: "rgba(117, 0, 0, 0.38)",
  },
  {
    id: 4,
    name: "Maria Anahonda",
    bg: "rgba(158, 64, 35, 0.38)",
    img: 81,
    polygon: "rgba(255, 255, 255, 0.39)",
  },
];
