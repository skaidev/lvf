import Footer from "components/LoveHome/Footer";
import Header from "components/LoveHome/Header";
import Scroll from "components/scroll/scroll";
import React, { Fragment, ReactChild } from "react";

const LoveHomeLayout = ({
  children,
}: {
  children: ReactChild;
}): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <div id="love-home">{children}</div>
      <Scroll showBelow={280} />
      <Footer />
    </Fragment>
  );
};

export default LoveHomeLayout;
