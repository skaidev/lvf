import React from "react";
import FrontLayout from "../../layout/FrontLayout";

const partnerPage = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <FrontLayout>
      <main className="partner">
        <section className="partner-1">
          <div className="partner-text d-flex justify-content-center align-items-center ">
            <div className="container">
              <h1 className="fw-600 font-48 text-light mt-3">
                Partner with us
              </h1>
            </div>
          </div>
        </section>
        <section className="partner-2 py-5">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div
                className="d-flex mb-4 flex-column flex-md-row row"
                style={{ gap: "2rem" }}
              >
                <div className="col">
                  <label htmlFor="Name" className="form-label fw-400 font-16">
                    Name*
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    required
                    placeholder="Charles Clifford"
                    spellCheck={true}
                  />
                </div>
                <div className="col">
                  <label htmlFor="phone" className="form-label fw-400 font-16">
                    Phone
                  </label>
                  <input
                    type="number"
                    multiple
                    className="form-control py-3"
                    placeholder="+234 90126"
                  />
                </div>
              </div>
              <label htmlFor="Email" className="form-label fw-400 font-16">
                Email
              </label>
              <input
                type="email"
                className=" form-control py-3 mb-4"
                placeholder="example@gmail.com"
                required
              />
              <label htmlFor="Message" className="form-label fw-400 font-16">
                Message
              </label>
              <textarea
                className="form-control form-control-lg mb-4"
                id=""
                cols={30}
                rows={10}
                spellCheck
                placeholder="600+ characters"
              ></textarea>
              <button className="btn bg-primary text-light border-3 fw-bold px-4 py-2">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </FrontLayout>
  );
};

export default partnerPage;
