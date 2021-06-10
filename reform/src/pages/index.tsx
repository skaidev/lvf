import React from "react";
import FrontLayout from "../layout/FrontLayout";

const index = (): JSX.Element => {
  return (
    <FrontLayout>
      <main>
        <section className="first">
          <div className="first-cover">
            <div className="first-content d-flex align-items-center">
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
                <p className="p-0">
                  Economic empowerment is central to women’s ability to overcome
                  poverty, cope with shocks and improve their well-being. When
                  women realize their economic goals, whether it’s growing a
                  business
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </FrontLayout>
  );
};

export default index;
