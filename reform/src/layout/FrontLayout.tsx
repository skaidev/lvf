import React, { Fragment, ReactChild } from "react";
import Header from "../components/Header";
import Scroll from "../components/scroll/Scroll";

const FrontLayout = ({ children }: { children: ReactChild }): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <div>{children}</div>
      <Scroll showBelow={280} />
    </Fragment>
  );
};

export default FrontLayout;
