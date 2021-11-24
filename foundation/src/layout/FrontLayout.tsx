import React, { Fragment, ReactChild } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Scroll from "../components/scroll/Scroll";
import Head from "next/head";

const FrontLayout = ({ children, title }: { children: ReactChild; title?: string }): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>{title || "Love Vision Foundation"}</title>
      </Head>
      <Header />
      <div className="children">{children}</div>
      <Scroll showBelow={280} />
      <Footer />
    </Fragment>
  );
};

export default FrontLayout;
