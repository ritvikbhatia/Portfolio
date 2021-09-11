import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Para, H1, H5 } from "../styles";
import { colors } from "../styles/theme";

export default function Home() {
  return (
    <Box type="row" p={4}>
      <Box>
        <H5 mb={0}>Hey, my name is</H5>
        <H1 mt={0}>Ritvik Bhatia</H1>
      </Box>
      <Box>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          height={500}
        >
          <path
            fill={colors?.primary}
            d="M43.8,-77.1C55.6,-69.1,63.2,-55,61.8,-41.1C60.4,-27.2,50,-13.6,51.1,0.6C52.2,14.9,64.8,29.8,66.5,44.1C68.2,58.5,58.9,72.3,46,74.4C33.1,76.5,16.6,66.9,0.4,66.1C-15.7,65.4,-31.3,73.4,-41.5,69.7C-51.7,66,-56.4,50.6,-63.2,37.1C-69.9,23.5,-78.8,11.8,-83,-2.4C-87.2,-16.6,-86.8,-33.2,-80,-46.8C-73.2,-60.4,-60.1,-70.9,-45.7,-77.4C-31.4,-83.9,-15.7,-86.4,0.2,-86.7C16,-87,32,-85.1,43.8,-77.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </Box>
    </Box>
  );
}
