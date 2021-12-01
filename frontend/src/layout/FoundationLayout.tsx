import Footer from "components/Footer";
import Header from "components/Header";
import Scroll from "components/scroll/scroll";
import React, { Fragment, ReactChild } from "react";

const FoundationLayout = ({
  children,
}: {
  children: ReactChild;
}): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <div className="children">{children}</div>
      <Scroll showBelow={280} />
      <Footer />
    </Fragment>
  );
};

export default FoundationLayout;
