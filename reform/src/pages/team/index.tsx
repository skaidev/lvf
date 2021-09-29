import React from "react";
import FrontLayout from "../../layout/FrontLayout";

const teamPage = (): JSX.Element => {
  return (
    <FrontLayout>
      <main className="team">
        <section className="team-1">
          <div className="team-text d-flex justify-content-center align-items-center">
            <div className="container">
              <h1 className="fw-600 font-48 text-light mt-3">Our Team</h1>
              <p className="fw-400 font-24 text-light">
                The best of our teams and volunteers
                <br /> around the world
              </p>
            </div>
          </div>
        </section>
      </main>
    </FrontLayout>
  );
};

export default teamPage;
