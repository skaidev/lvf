import React, { useState } from "react";
import FrontLayout from "../../Layout/FrontLayout";

const donationPage = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const [show, setShow] = useState(true);

  const radioHandler = (show) => {
    setShow(show);
  };
  return (
    <FrontLayout>
      <main className="donations">
        <section className="donations-1">
          <div className="donate-text d-flex flex-column justify-content-md-center align-items-center">
            <h1 className="fw-600 font-48 text-light">Help Sponsor Concerts</h1>
            <p className="fw-400 text-light">
              Begulled and demoralized by the charms of pleasure of the <br />
              moment. so by the desire, that they cannot foresee.
            </p>
          </div>
        </section>
        <section className="donations-2 pb-3">
          <div className="container pt-5">
            <h1 className="fw-600">Details:</h1>
            <form onSubmit={handleSubmit} className="mb-5">
              <div
                className="d-flex mb-4 flex-column flex-md-row row"
                style={{ gap: "2rem" }}
              >
                <div className="col">
                  <label
                    htmlFor="First Name"
                    className="form-label fw-400 font-18"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    required
                    placeholder="Charles"
                    spellCheck={true}
                  />
                </div>
                <div className="col">
                  <label
                    htmlFor="Last Name"
                    className="form-label fw-400 font-18"
                  >
                    Last name*
                  </label>
                  <input
                    type="text"
                    multiple
                    className="form-control py-3"
                    placeholder="Clifford"
                    spellCheck={true}
                  />
                </div>
              </div>
              <div
                className="d-flex mb-4 flex-column flex-md-row row"
                style={{ gap: "2rem" }}
              >
                <div className="col">
                  <label
                    htmlFor="First Name"
                    className="form-label fw-400 font-18"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    className="form-control py-3"
                    required
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="col">
                  <label
                    htmlFor="Last Name"
                    className="form-label fw-400 font-18"
                  >
                    Phone*
                  </label>
                  <input
                    type="text"
                    multiple
                    className="form-control py-3"
                    placeholder="+234 9012624162"
                  />
                </div>
              </div>
            </form>
            <div className="pay-don text-center">
              <h1 className="fw-600">Payments/Donations</h1>
              <p className="fw-400">Choose your payment method</p>
              <div className="mb-4">
                <div className="radio d-flex justify-content-center">
                  <div className="me-2 form-check">
                    <input
                      type="radio"
                      id="defaultRadio"
                      name="donationRadios"
                      className="me-2 "
                      value="paypal"
                      checked={show === true}
                      onChange={(e) => radioHandler(true)}
                    />
                    <label htmlFor="defaultRadio" className="form-check-label">
                      Paypal
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="defaultRadio"
                      name="donationRadios"
                      className="me-2 "
                      value="offline"
                      checked={show === false}
                      onChange={(e) => radioHandler(false)}
                    />
                    <label htmlFor="defaultRadio" className="form-check-label">
                      Offline Donation
                    </label>
                  </div>
                </div>
              </div>
              {show === true && (
                <button className="btn btn-primary text-light mb-5">
                  Donate
                </button>
              )}
              {show === false && (
                <div>
                  <p className="fw-400 mb-5">
                    For offline Donations, visit our nearby offices or contact
                    us with the <br /> contact form below. You can also send us
                    a message Right now...
                  </p>
                  <div className="contact-icon d-flex mb-5 flex-column flex-md-row justify-content-around">
                    <div className="mail d-flex flex-column align-items-center mb-3">
                      <i className="fas fa-2x fa-envelope px-4 py-3 text-light mb-3 bg-success rounded"></i>
                      <span className="text-center poppins fw-600 font-18">
                        lovehomes5@gmail.com
                      </span>
                    </div>
                    <div className="address d-flex flex-column align-items-center mb-3">
                      <i className="fas fa-2x  fa-map-marker-alt px-4 py-3 text-light mb-3 bg-success rounded "></i>
                      <span className="text-center poppins fw-600 font-18">
                        No 6 Green Tower, Street <br /> Rumuodara
                      </span>
                    </div>
                    <div className="tel d-flex flex-column align-items-center">
                      <i className="fas fa-2x fa-tty px-4 py-3 text-light mb-3 bg-success rounded"></i>
                      <span className="text-center poppins fw-600 font-18">
                        +234 9012624162
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        {show === false && (
          <section className="map ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.444085232075!2d7.032735314762972!3d4.86501199646747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d27198c56a95%3A0x4bf2d3ebd3c1a2dd!2sJoint%20Heirs%20Assembly%20Int&#39;l%20Inc.!5e0!3m2!1sen!2sng!4v1621608305779!5m2!1sen!2sng"
              height="450"
              allowFullScreen={false}
              loading="lazy"
              style={{ width: "100%", border: 0, margin: 0, padding: 0 }}
            ></iframe>
          </section>
        )}
      </main>
    </FrontLayout>
  );
};

export default donationPage;
