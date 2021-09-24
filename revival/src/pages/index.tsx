import React from "react";
import FrontLayout from "../Layout/FrontLayout";

const index = () => {
  return (
    <FrontLayout>
      <main className="revival">
        <section className="first">
          <div className="first-cover">
            <b className="text-uppercase font-64 fw-700 spacing-1 text-warning pb-2">
              Welcome to love revival
            </b>
            <div className="first-content d-flex flex-column justify-content-center align-items-center">
              <div className="container">
                <p className="text-light fw-700 h2">
                  Join, Volunteer & Support
                </p>
                <h1 className="text-light fw-700 font-64">LOVE REVIVAL</h1>
                <p className="text-light fw-400 fw-18 mb-4">
                  This arm focuses on spiritual awakening of the love of God in
                  the lives of <br /> youths in our community (keeping oneself
                  unspotted from the world). It is <br /> a night or evening of
                  worship and a brief word of
                </p>
                <button className="btn mb-md-0 fw-600 font-20 btn-primary text-white px-4 py-2">
                  Join Us
                </button>
              </div>
            </div>
          </div>
          <div className="art"></div>
        </section>
        <section className="second">
          <div className="d-flex container me-md-0 pe-md-0 align-items-center flex-column flex-md-row">
            <div className="left">
              <div className="left-text ">
                <p className="h1 fw-700 mb-3 font-48">
                  The mission and goals <br /> of our organization
                </p>
                <p className="fw-400 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do <br />
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim <br /> ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut <br /> aliquip ex ea commodo consequat.
                </p>
                <p className="fw-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do <br />
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim <br /> ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut <br /> aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="right">
              <img src="/images/home_2.png" alt="" className="" />
            </div>
          </div>
        </section>
        <section className="third">
          <div className="row mb-5 row-cols-1 row-cols-lg-3 three g-0">
            {third.map((card) => (
              <div className="col three-" key={card.id}>
                <div
                  className="card border-0 three-- "
                  style={{
                    background: `url(./images/third_${card.id}.png)`,
                    height: "598px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  {card.body}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="fourth">
          <div className="container mg">
            <p className="h1 fw-700 font-48 ">Welcome Message</p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est <br /> laborum. Sed{" "}
            </p>
            <div className="fourth-main bg-info d-flex">
              <div className="avatar me-5">
                <img
                  src="/images/fourth.png"
                  alt=""
                  style={{ width: "209px", height: "209px" }}
                />
              </div>
              <div className="content">
                <p className="fw-500">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est <br /> laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque <br /> laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae <br /> vitae dicta sunt explicabo.
                </p>
                <p className="fw-500">Charles Cliff Co-ordinator</p>
              </div>
            </div>
          </div>
          <div className="art-two"></div>
        </section>
      </main>
    </FrontLayout>
  );
};

export default index;

const third = [
  {
    id: 1,
    body: (
      <div className="card-body text-center three--item">
        <p className="h1 text-light">Join Community</p>
        <p className="text-light">
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed
          do eiusmod tempor <br /> incididunt ut labore et dolore magna <br />
          aliqua. Ut enim ad minim veniam, quis <br /> nostrud exercitation
        </p>
        <button className="btn btn-outline-primary text-light">
          Join us now
        </button>
      </div>
    ),
  },
  {
    id: 2,
    body: (
      <div className="card-body text-center three--item">
        <p className="h1 text-light">Partner With Us</p>
      </div>
    ),
  },
  {
    id: 3,
    body: (
      <div className="card-body text-center three--item">
        <p className="h1 text-light">Support The Mission</p>
      </div>
    ),
  },
];
