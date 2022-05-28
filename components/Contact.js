import styles from "../styles/Home.module.css";
import { Box, Para, H1, H5, H6, Label, Button, H3 } from "../styles";
import { colors } from "../styles/theme";
import { useState } from "react";
import Grid from "@mui/material/Grid";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box p={4}>
      <Box>
        <section class="contact" id="contact">
          <div class="max-width">
            <H1 class="title">Contact me</H1>
            <div class="contact-content">
              <div class="column left">
                <H5>Get in Touch</H5>
                <p></p>
                <div class="icons">
                  <div class="row">
                    <i class="fas fa-user"></i>
                    <div class="info">
                      <div class="head">Name</div>
                      <div class="sub-title">Ritvik Bhatia</div>
                    </div>
                  </div>
                  <Grid container direction="row">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="info">
                      <div class="head">Address</div>
                      <div class="sub-title">New Delhi, India</div>
                    </div>
                  </Grid>
                  <div class="row">
                    <i class="fas fa-envelope"></i>
                    <div class="info">
                      <div class="head">Email</div>
                      <div class="sub-title">ritvikbhatia99@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column right">
                <div class="text">Message me</div>
                <form action="https://formspree.io/f/mqkgooqj" method="POST">
                  <div class="fields">
                    <div class="field name">
                      <input
                        type="text"
                        placeholder="Name"
                        name="Name"
                        required
                      ></input>
                    </div>
                    <div class="field email">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email_id"
                        required
                      ></input>
                    </div>
                  </div>
                  <div class="field">
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      required
                    ></input>
                  </div>
                  <div class="field textarea">
                    <textarea
                      cols="50"
                      rows="20"
                      placeholder="Message..."
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit">Send message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </Box>
  );
}
