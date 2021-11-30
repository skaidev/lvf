import React from "react";
import { AppProps } from "next/app";
import "../styles/index.scss";
import "../styles/styles.scss";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
