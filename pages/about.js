import styles from "../styles/Home.module.css";
import { Box, Para, H1, H5, H6, Label, Button, H3 } from "../styles";
import { colors } from "../styles/theme";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box p={4}>
      <About></About>
      <Contact></Contact>
    </Box>
  );
}
