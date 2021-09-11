import { Box, Button } from "../styles";
import { FileText, Briefcase, Layers } from "@geist-ui/react-icons";
import { colors } from "../styles/theme";

export default function Tags() {
  return (
    <Box type="row" px={4} py={2}>
      <Button>Ritvik Bhatia</Button>
      <Box type="row">
        <Box type="row">
          <Briefcase color={colors?.primary}></Briefcase>
          <Button>Experience</Button>
        </Box>
        <Box type="row" px={3}>
          <Layers color={colors?.primary}></Layers>
          <Button>Projects</Button>
        </Box>
        <Box type="row">
          <FileText color={colors?.primary}></FileText>
          <Button>Resume</Button>
        </Box>
      </Box>
    </Box>
  );
}
