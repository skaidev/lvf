import FrontLayout from "layout/FrontLayout";
import React from "react";

const partnerPage = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <FrontLayout>
      <main className="partner">
        <section className="partner-1">
          <div className="partner-text d-flex justify-content-center align-items-end">
            <h1 className="fw-600 font-48 text-light">Partner with us</h1>
          </div>
        </section>
        <section className="partner-2 py-5">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="d-flex mb-4 flex-column flex-md-row row" style={{ gap: "2rem" }}>
                <div className="col">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control py-3" required placeholder="Charles Cliff" spellCheck={true} />
                </div>
                <div className="col">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input type="number" multiple className="form-control py-3" placeholder="+234 90126" />
                </div>
              </div>

              <input type="email" className=" form-control py-3 mb-4" placeholder="example@gmail.com" required />
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <textarea className="form-control form-control-lg mb-4" id="" cols={30} rows={10} spellCheck placeholder="600+ characters"></textarea>
              <button className="btn bg-primary text-light border-3 fw-bold px-4 py-2">Send Message</button>
            </form>
          </div>
        </section>
        {/* <section className="partner-3">
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
        </section> */}
      </main>
    </FrontLayout>
  );
};

export default partnerPage;
