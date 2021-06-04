import React, { Fragment, ReactChild } from "react";
import Header from "../components/Header";

const FrontLayout = ({ children }: { children: ReactChild }): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <div className="children">{children}</div>
    </Fragment>
  );
};

export default FrontLayout;
