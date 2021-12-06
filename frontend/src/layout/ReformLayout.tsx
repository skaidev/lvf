import Footer from "components/reform/Footer";
import Header from "components/reform/Header";
import Scroll from "components/scroll/scroll";
import React, { Fragment, ReactChild } from "react";

const ReformLayout = ({ children }: { children: ReactChild }): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <div id="love-reform">{children}</div>
      <Scroll showBelow={280} />
      <Footer />
    </Fragment>
  );
};

export default ReformLayout;
