import React from "react";
import { AppProps } from "next/app";
import "../styles/index.scss";
import "styles/styles.scss";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Head from "next/head";
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Love Vision Foundation</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
