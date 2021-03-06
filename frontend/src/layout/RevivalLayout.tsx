import RevivalFooter from "components/revival/Footer";
import RevivalHeader from "components/revival/Header";
import Scroll from "components/scroll/scroll";
import React, { Fragment, ReactChild } from "react";

const RevivalLayout = ({ children }: { children: ReactChild }): JSX.Element => {
  return (
    <Fragment>
      <div id="love-revival">
        <RevivalHeader />
        <div>{children}</div>
        <Scroll showBelow={280} />
        <RevivalFooter />
      </div>
    </Fragment>
  );
};

export default RevivalLayout;
