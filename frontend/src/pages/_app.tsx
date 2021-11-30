import "../styles/index.scss";
import type { AppProps } from "next/app";
import "../styles/index.scss";
import "../styles/styles.scss";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
