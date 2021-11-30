import React from "react";
import { AppProps } from "next/app";
import "../styles/index.scss";
<<<<<<< HEAD
import "../styles/styles.scss";
=======
import "styles/styles.scss";
>>>>>>> d07c1c454951458db4b8a8a9ac275811d073c247
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
<<<<<<< HEAD
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
=======
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
>>>>>>> d07c1c454951458db4b8a8a9ac275811d073c247
};

export default MyApp;
