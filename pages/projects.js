import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Para, H1, H5, H6, Label } from "../styles";
import { colors } from "../styles/theme";
import { useState } from "react";
import Grid from "@mui/material/Grid";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box p={4}>
      <H1 textAlign="center">Projects </H1>
      <Grid type="row" container justifyContent={"space-evenly"}>
        {data?.map((i) => {
          return (
            <Grid
              onMouseEnter={() => {
                setIsHovered(i?.name);
              }}
              onMouseLeave={() => {
                setIsHovered("");
              }}
              p={4}
              key={i?.name}
              style={{ cursor: "pointer" }}
            >
              <Box
                styles={{
                  width: "350px",
                  display: "inline-block",
                  marginLeft: "50px",
                  marginTop: "50px",
                }}
              >
                <Box
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "350px",
                    minHeight: "450px",
                    margin: "0 auto",
                    background: colors?.back,
                    borderRadius: "5%",
                    padding: "20px",
                    boxSizing: "border-box",
                    textAlign: "center",
                    boxShadow: "0 10px 40px rgba(0,0,0,.5)",
                  }}
                >
                  <Box
                    style={{
                      zIndex: 1,
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      background: colors?.primary,
                      transition: "0.5s",
                      top: isHovered == i?.name ? 0 : "calc(100% - 4px)",
                    }}
                  ></Box>
                  <Box style={{ zIndex: 2, position: "relative" }}>
                    <H5
                      mb={0}
                      style={{
                        color:
                          isHovered == i?.name ? "purple" : colors?.primary,
                      }}
                    >
                      {i?.name}
                    </H5>
                    <Label
                      mb={2}
                      style={{
                        transition: "0.5s",
                        position: "relative",
                        color: "white",
                      }}
                    >
                      {i?.time}
                    </Label>
                    <img
                      align="center"
                      width="140px"
                      src={i?.image}
                      style={{
                        width: "200px",
                        height: "100px",
                        margin: "0 auto",
                        borderRadius: "20%",
                        overflow: "hidden",
                        border: "4px solid " + colors?.primary,
                        boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                      }}
                      alt=""
                    ></img>
                    <Para
                      style={{
                        color: isHovered == i?.name ? colors?.back : "#fff",
                      }}
                    >
                      {i?.desc}
                    </Para>
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

var data = [
  {
    name: "Smart City",
    time: "Tecknex 2017",
    image:
      "https://vignette.wikia.nocookie.net/supernatural-diaries/images/b/b2/Cara-delevingne-profile.jpg/revision/latest?cb=20140217060511",
    desc: "smart city is a 5 component model of a city involving smart solutions to day to day problems.city consists of smart parking , smart pollution toll,smart street lights smart waste management system and smart traffic lights .",
    link: "/link",
  },
  {
    name: "Early Prediction of Lifestyle Diseases",
    time: "SIH 2019 Software",
    image:
      "https://steamuserimages-a.akamaihd.net/ugc/916918533107756109/283D620FFDBC088A442F4908106C2DB4A76B58F4/",
    desc: "an application that takes input the various lifestyle habits of an individual and gives the chances of various diseases based on that as an output .",
    link: "/link",
  },
  {
    name: "Codeal",
    time: "CN career-camp",
    image:
      "https://wallpaperstock.net/beautiful-lily-collins-wallpapers_36770_1600x1200.jpg",
    desc: "A full stack , completely scalable social media web site with all important features like friends , chatting , comments , likes , posts etc",
    link: "/link",
  },
  {
    name: "Patient Care System",
    time: "Fervor Hackathon",
    image:
      "https://steamuserimages-a.akamaihd.net/ugc/916918533107756109/283D620FFDBC088A442F4908106C2DB4A76B58F4/",
    desc: "An Iot enabled glove which transmit messages to the care taker by sensing hand movements. The device converts movements to readable messages at the receiver side.Glove is also attached with pulse and temperature sensor which sends messages in emergencies",
    link: "/link",
  },
  {
    name: "Crop Management System",
    time: "SIH 2019 Hardware",
    image:
      "https://wallpaperstock.net/beautiful-lily-collins-wallpapers_36770_1600x1200.jpg",
    desc: "Iot model that helps in farming and similar activities ",
    link: "/link",
  },
  {
    name: "ML Vending Machine",
    time: "Btech Minor Project",
    image:
      "https://wallpaperstock.net/beautiful-lily-collins-wallpapers_36770_1600x1200.jpg",
    desc: "It is a machine learning based medical prescription reading machine , which reads handwritten prescription notes and releases corresponding medicines on the other side with IoT.",
    link: "/link",
  },
  {
    name: "Mocking bot",
    time: "Eyantra IIT BOMBAY",
    image:
      "https://steamuserimages-a.akamaihd.net/ugc/916918533107756109/283D620FFDBC088A442F4908106C2DB4A76B58F4/",
    desc: "an audio processing bot that listens to piano notes and play them on a piano with hitting mechanism .",
    link: "/link",
  },
  {
    name: "integer sequence identification",
    time: "Innovians Hackathon",
    image:
      "https://wallpaperstock.net/beautiful-lily-collins-wallpapers_36770_1600x1200.jpg",
    desc: "A machine learning based project that identifies the next element of any input sequence.",
    link: "/link",
  },
  {
    name: "Bank Management System",
    time: "Class 12th final project",
    image:
      "https://wallpaperstock.net/beautiful-lily-collins-wallpapers_36770_1600x1200.jpg",
    desc: "A model on C++ using concepts of file handling and oops.",
    link: "/link",
  },
];
