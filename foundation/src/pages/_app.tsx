import React from "react";
import { AppProps } from "next/app";
import "../styles/index.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
