import React from "react";
import FrontLayout from "../../layout/FrontLayout";

const teamPage = (): JSX.Element => {
  return (
    <FrontLayout>
      <main className="team">
        <section className="team-1">
          <div className="team-text d-flex align-items-end">
            <div className="container">
              <h1 className="fw-700 font-64 text-light mt-3">Our Team</h1>
              <p className="fw-400 font-24 pb-3 text-light">
                The best of of our teams and volunteers around the world
              </p>
            </div>
          </div>
        </section>
      </main>
    </FrontLayout>
  );
};

export default teamPage;
