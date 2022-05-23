import styles from "../styles/Home.module.css";
import { Box, Para, H1, H5, H6, Label } from "../styles";
import { colors } from "../styles/theme";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from "@react-pdf-viewer/get-file";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const getFilePluginInstance = getFilePlugin();

  return (
    <Box p={4}>
      <H1 textAlign="center">Resume </H1>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
        <Grid>
          <Viewer
            fileUrl="/pdf/resume.pdf"
            plugins={[defaultLayoutPluginInstance, getFilePluginInstance]}
            theme={{
              theme: "dark",
            }}
            defaultScale={1}
          />
        </Grid>
      </Worker>
    </Box>
  );
}
