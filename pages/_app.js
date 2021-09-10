import "../styles/globals.css";
import Particles from "react-particles-js";
import config from "../config/particlesjs-config";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Particles
        style={{ position: "absolute", width: "100%", height: "100%" }}
        params={config}
      ></Particles>
      <Component {...pageProps}></Component>
    </>
  );
}

export default MyApp;
