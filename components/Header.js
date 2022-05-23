import { Box, Button } from "../styles";
import { FileText, Briefcase, Layers } from "@geist-ui/react-icons";
import { colors } from "../styles/theme";
import Link from "next/link";

export default function Tags() {
  return (
    <Box type="row" px={4} py={2}>
      <Link href="/">
        <Button>Ritvik Bhatia</Button>
      </Link>
      <Box type="row">
        <Link href="/about">
          <Box type="row">
            <Briefcase color={colors?.primary}></Briefcase>
            <Button>Experience</Button>
          </Box>
        </Link>
        <Link href="/projects">
          <Box type="row" px={3}>
            <Layers color={colors?.primary}></Layers>
            <Button>Projects</Button>
          </Box>
        </Link>
        <Link href="/resume">
          <Box type="row">
            <FileText color={colors?.primary}></FileText>
            <Button>Resume</Button>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
