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
        <Image height={700} width={850} src={"/images/main.png"}></Image>
      </Box>
    </Box>
  );
}
