import React from "react";
import FrontLayout from "../Layout/FrontLayout";
import Marquee from "react-fast-marquee";

const index = () => {
  return (
    <FrontLayout>
      <main className="revival">
        <section className="first">
          <div className="first-cover">
            <b className="text-uppercase font-64 fw-700 spacing-1 text-warning pb-2">Welcome to love revival</b>
            <div className="first-content d-flex flex-column justify-content-center align-items-center">
              <div className="container">
                <p className="text-light fw-700 h2">Join, Volunteer & Support</p>
                <h1 className="text-light fw-700 font-64">LOVE REVIVAL</h1>
                <p className="text-light fw-400 fw-18 mb-4">
                  This arm focuses on spiritual awakening of the love of God in the lives of <br /> youths in our community (keeping oneself unspotted from the world). It is <br /> a night or evening of worship and a brief word of
                </p>
                <button className="btn mb-md-0 fw-600 font-20 btn-primary text-white px-4 py-2">Join Us</button>
              </div>
            </div>
          </div>
          <div className="art"></div>
        </section>
        <section className="second">
          <div className="d-flex align-items-md-center flex-column flex-md-row">
            <div className="left  mx-5">
              <div className="left-text">
                <p className="h1 fw-700 mb-3 font-48">
                  The mission and goals <br /> of our organization
                </p>
                <p className="fw-400 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br />
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat.
                </p>
              </div>
              <button className="btn text-primary p-0">
                Learn More <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className="right">
              <img src="/images/home_2.png" alt="" />
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
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <br /> laborum. Sed{" "}
            </p>
            <div className="fourth-main  d-flex flex-column align-items-center align-items-md-start justify-content-center flex-md-row">
              <div className="avatar me-5">
                <img src="/images/fourth.png" alt="" style={{ width: "192px", height: "192px" }} />
              </div>
              <div className="content">
                <p className="fw-400">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <br /> laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br /> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae <br /> vitae dicta sunt explicabo.
                </p>
                <p className="fw-600 mt-4">Charles Cliff Co-ordinator</p>
              </div>
            </div>
          </div>
          <div className="art-two"></div>
        </section>
        <section className="fifth py-5">
          <div className="container">
            <p className="h1 fw-700 font-48 mb-4">
              Love Revival <span className="concert h1 fw-700 font-48">Concerts</span>
            </p>
            <p className="text-muted">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <br /> laborum. Sed{" "}
            </p>
            <div className="fifth-image mb-4">
              <div className="fifth-cover d-flex flex-column align-items-center justify-content-center">
                <p className="text-light h1 fw-600 font-30 ">Love Revival 2019 Concert</p>
                <div className=" outer-circle">
                  <div className="inner-circle d-flex justify-content-center align-items-center">
                    <i className="fas fa-2x fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sixth">
          <div className="container">
            <p className="h1 fw-700 font-48 mb-4">
              Love Revival Gallery <span className="gallery h1 fw-700 font-48">Concerts</span>
            </p>
            <p className="text-muted">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <br /> laborum. Sed{" "}
            </p>
            <div className="image-box">
              <div className="d-flex justify-content-between">
                <div className="p-lg-3 img-1">
                  <img src="/images/sixth_1.png" alt="" className="img-fluid" />
                </div>
                <div className="p-lg-3 img-2">
                  <img src="/images/sixth_2.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="p-lg-3 img-3">
                  <img src="/images/sixth_3.png" alt="" className="img-fluid" />
                </div>
                <div className="p-lg-3 img-4">
                  <img src="/images/sixth_4.png" alt="" className="img-fluid" />
                </div>
                <div className="p-lg-3 img-5">
                  <img src="/images/sixth_5.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="p-lg-3 img-6">
                  <img src="/images/sixth_6.png" alt="" className="img-fluid" />
                </div>
                <div className="p-lg-3 img-7">
                  <img src="/images/sixth_7.png" alt="" className="img-fluid" />
                </div>
                <div className="p-lg-3 img-8">
                  <img src="/images/sixth_8.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="art-six"></div> */}
        </section>
        <section className="seventh d-flex align-items-center py-5 mb-5">
          <div className="container d-lg-flex justify-content-around">
            <div className="left d-flex">
              <div className="left-image me-3">
                <img src="/images/monitor 1.svg" alt="" className="img-fluid" />
              </div>
              <div className="left-text d-flex flex-column justify-content-center">
                <p className="h2 fw-700 text-light">
                  Watch our <br />
                  Concerts on <br />
                  Youtube
                </p>
                <button className="btn btn-outline-primary">Watch Now</button>
              </div>
            </div>
            <div className="right d-flex">
              <div className="right-image me-3">
                <img src="/images/Group.svg" alt="" className="img-fluid" />
              </div>
              <div className="right-text d-flex flex-column justify-content-center">
                <p className="h2 fw-700 text-light">
                  Listen to our
                  <br /> live Podcast
                </p>
                <button className="btn btn-outline-primary">Listen Now</button>
              </div>
            </div>
          </div>
        </section>
        <section className="eight py-5">
          <div className="container">
            <p className="h1 fw-700 font-48 mb-4">
              <span className="h1 fw-700 font-48">Lives</span> Revived
            </p>
            <p className="mb-5">Testimonies from people who visited Love Revival conserts and were Revived by praising God...</p>
            <div className="row">
              <div className="card me-auto ms-auto revived-card">
                <div className="card-img-top">
                  <div className="revived-card-image">
                    <img src="/images/lives_revived.png" alt="" className="img-circle rounded-circle" />
                  </div>
                </div>
                <div className="card-body">
                  <p className="h6 fw-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor orci gravida dui tristique, eget <br /> gravida diam ullamcorper. Morbi interdum ipsum turpis. Quisque pellentesque dolor id nunc <br /> condimentum volutpat. Phasellus vehicula libero dolor, sed laoreet enim volutpat non. Aenean non <br /> aliquet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nibh, egestas <br />
                    varius elementum eu, accumsan quis elit. Mauris varius lobortis sem, eu porta augue interdum in. <br /> Curabitur lobortis dolor quis nibh ultricies, a pellentesque ipsum placerat.
                  </p>
                  <p className="h6 fw-600">Mr Chika Elvis,</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="nine py-5 position-relative">
          <div className=" container-fluid ">
            <span className="abs position-absolute fw-bolder p-0 m-0">Sponsors</span>
            <Marquee pauseOnHover={true} speed={50} delay={3} className="d-flex align-items-center">
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
        <section className="ten bg-white py-5">
          <div className="container">
            <h1 className="text-center font-48 fw-bold mb-3">Contact Us</h1>
            <p className="text-muted font-500 text-center mb-5" style={{ fontSize: "1.3rem" }}>
              We cant do it alone – from crisis to sustainably. There is no limit to what you can do, from a bake sale to a 10k run your help give food, but hope for the future.
            </p>
            <div className="contact-icon d-flex mb-5 flex-column flex-sm-row justify-content-around">
              <div className="mail d-flex flex-column align-items-center">
                <i className="fas fa-2x fa-map-marker-alt px-4 py-3 text-light mb-3 bg-info rounded"></i>
                <span className="text-center poppins fw-600">jointheirs5@gmail.com</span>
              </div>
              <div className="address d-flex flex-column align-items-center">
                <i className="fas fa-2x fa-envelope px-4 py-3 text-light mb-3 bg-info rounded"></i>
                <span className="text-center poppins fw-600">No 6 Green Tower, Street Rumuodara</span>
              </div>
              <div className="tel d-flex flex-column align-items-center">
                <i className="fas fa-2x fa-tty px-4 py-3 text-light mb-3 bg-info rounded"></i>
                <span className="text-center poppins fw-600">+234 9012624162</span>
              </div>
            </div>
            <form>
              <div className="d-flex mb-4 flex-column flex-md-row" style={{ gap: "2rem" }}>
                <input type="text" className="form-control py-3" required placeholder="Cliff" spellCheck={true} />
                <input type="email" multiple className="form-control py-3" placeholder="Email" required />
              </div>
              <input type="text" className=" form-control py-3 mb-4" placeholder="Subject" spellCheck />

              <textarea className="form-control form-control-lg mb-4" id="" cols={30} rows={10} spellCheck placeholder="Type your Message"></textarea>
              <button className="btn btn-outline-primary bg-primary text-white fw-bold px-4 py-2">Send Message</button>
            </form>
          </div>
        </section>
        <section className="map ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.444085232075!2d7.032735314762972!3d4.86501199646747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d27198c56a95%3A0x4bf2d3ebd3c1a2dd!2sJoint%20Heirs%20Assembly%20Int&#39;l%20Inc.!5e0!3m2!1sen!2sng!4v1621608305779!5m2!1sen!2sng" height="450" allowFullScreen={false} loading="lazy" style={{ width: "100%", border: 0, margin: 0, padding: 0 }}></iframe>
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
      <div className="card-body  d-flex flex-column justify-content-center three--item">
        <p className="h1 text-light">Join Community</p>
        <p className="text-light">
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna <br />
          aliqua. Ut enim ad minim veniam, quis <br /> nostrud exercitation
        </p>
        <div>
          <button className="btn  btn-outline-primary text-light">Join us now</button>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    body: (
      <div className="card-body  d-flex flex-column justify-content-center three--item">
        <p className="h1 text-light">Partner With Us</p>
      </div>
    ),
  },
  {
    id: 3,
    body: (
      <div className="card-body d-flex flex-column justify-content-center three--item">
        <p className="h1 text-light">Support The Mission</p>
      </div>
    ),
  },
];
