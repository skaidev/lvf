import "../styles/index.scss";
import type { AppProps } from "next/app";
import "../styles/index.scss";
import "../styles/styles.scss";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.css";

if (process.browser) {
  require("bootstrap/dist/js/bootstrap");
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
