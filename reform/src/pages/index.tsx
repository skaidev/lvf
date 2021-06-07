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
                  src="./images/pexels-william-fortunato-6393179 1.png"
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
              <p className="text-light fa-2x fw-bold">
                Is Working Towards Helping the <br /> Lesspriviledged/
                Underpriviledge <br />
                people
              </p>
            </div>
            <div className="right">
              <div className=" right-circle rounded-circle border">
                <i className="fas fa-5x fa-play-circle text-primary"></i>
              </div>
            </div>
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
