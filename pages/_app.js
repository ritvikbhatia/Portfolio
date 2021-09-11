import "../styles/globals.css";
import Particles from "react-particles-js";
import config from "../config/particlesjs-config";
import { colors } from "../styles/theme";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <div
        style={{
          position: "fixed !important",
          top: 0,
          left: 0,
          width: "100%",
          height: "100% !important",
          backgroundColor: colors?.back,
          zIndex: -2,
        }}
      >
        <Particles
          style={{
            position: "fixed !important",
            top: 0,
            left: 0,
            width: "100%",
            height: "100% !important",
            zIndex: 0,
          }}
          params={config}
        ></Particles>
      </div>
      <Component {...pageProps}></Component>
    </>
  );
}

export default MyApp;
