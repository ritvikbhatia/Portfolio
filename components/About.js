import styles from "../styles/Home.module.css";
import { Box, Para, H1, H5, H6, Label, Button, H3 } from "../styles";
import { colors } from "../styles/theme";
import { useState } from "react";
import Grid from "@mui/material/Grid";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box p={4}>
      <H1 textAlign="center">About </H1>
      <Box type="row">
        <Grid item>
          <img
            src="images/bank.jpeg"
            alt=""
            style={{ borderRadius: "10px", width: 400 }}
          ></img>
        </Grid>
        <Grid item style={{ padding: "20px", borderRadius: "10px" }}>
          <H5>
            He is a Passionate <span class="typing-2"></span>
          </H5>
          <Para style={{ color: "white" }}>
            A self taught programmer who is a Passionate contributor towards
            communities, Open Source Hackathons, Who is Pursuing Knowledge to
            excel in future endeavor and helping people to enhance there
            learnings through providing them with practical experience and
            Knowledge. He is an Author at <b>freecodecamp.org</b>'s
            Publications. He is currently an 162nd event ambassador at{" "}
            <b>deeplearning.ai</b> in the world and also a Mozilla Fest
            Facilitator. He is a founder, Organiser and a Speaker at Programmers
            Universal Group ( official website:- https://www.pugroups.in ). He
            is an official volunteer at Google Developer Group Chandigarh,
            Progate and Tensorflow User group Chandigarh. He is professionally a
            programmer, front end Web developer and an Artist. He is also a
            Youtuber where He shares his knowledge with everyone. He is also an
            open source contributor and Google Crowdsource Top contributor. He
            has also done many contributions in various communities. He was also
            selected as a share captain at Google Educator Group Ahemdabad and
            Pune. He was also in the list of top 10 Campus Ambassador at
            Developer Student Clubs Week of Wonders ( a week long national event
            ).
          </Para>
          <Button href="#">Download Resume</Button>
        </Grid>
      </Box>
    </Box>
  );
}
