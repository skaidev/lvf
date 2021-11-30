import HeaderComp from "components/HeaderComp";
import React, { Fragment, ReactChild } from "react";

const FoundationLayout = ({
  children,
}: {
  children: ReactChild;
}): JSX.Element => {
  return (
    <Fragment>
      <HeaderComp />
      <div className="children">{children}</div>
    </Fragment>
  );
};

export default FoundationLayout;
