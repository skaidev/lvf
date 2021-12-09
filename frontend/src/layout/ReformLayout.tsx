import Footer from "components/reform/Footer";
import Header from "components/reform/Header";
import Scroll from "components/scroll/scroll";
import React, { Fragment, ReactChild } from "react";

const ReformLayout = ({ children }: { children: ReactChild }): JSX.Element => {
  return (
    <Fragment>
      <div id="love-reform">
        <Header />
        <div>{children}</div>
        <Scroll showBelow={280} />
        <Footer />
      </div>
    </Fragment>
  );
};

export default ReformLayout;
