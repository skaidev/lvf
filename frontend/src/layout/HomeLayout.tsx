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
      <div id="love-home">
        <Header />
        <div>{children}</div>
        <Scroll showBelow={280} />
        <Footer />
      </div>
    </Fragment>
  );
};

export default LoveHomeLayout;
