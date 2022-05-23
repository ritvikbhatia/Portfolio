import styles from "../styles/Home.module.css";
import { Box, Para, H1, H5, H6, Label } from "../styles";
import { colors } from "../styles/theme";
import { useState } from "react";
import Grid from "@mui/material/Grid";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box p={4}>
      <H1 textAlign="center">About </H1>
    </Box>
  );
}
