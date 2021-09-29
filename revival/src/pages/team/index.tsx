import React from "react";
import FrontLayout from "../../Layout/FrontLayout";

const teamPage = () => {
  return (
    <FrontLayout>
      <main className="team">
        <section className="team-1">
          <div className="team-text d-flex justify-content-center align-items-center">
            <h1 className="fw-600 font-48 text-light mt-3">Our Team</h1>
          </div>
        </section>
      </main>
    </FrontLayout>
  );
};

export default teamPage;
