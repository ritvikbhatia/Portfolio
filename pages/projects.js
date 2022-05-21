import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Para, H1, H5 } from "../styles";
import { colors } from "../styles/theme";
import { useState } from "react";
import Grid from "@mui/material/Grid";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box p={4}>
      <H5 mb={0}>Projects </H5>
      <Grid type="row" container justifyContent={"space-around"}>
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
                      top: isHovered == i?.name ? 0 : "calc(100% - 2px)",
                    }}
                  ></Box>
                  <Box style={{ zIndex: 2, position: "relative" }}>
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: isHovered == i?.name ? colors?.back : "#fff",
                      }}
                    >
                      {i?.desc}
                    </p>
                    <Box class="image">
                      <img
                        align="center"
                        width="140px"
                        src={i?.image}
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "0 auto",
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: "4px solid white",
                          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                        }}
                        alt=""
                      ></img>
                    </Box>
                    <Box class="details">
                      <h2
                        style={{
                          fontSize: "18px",
                          color: isHovered == i?.name ? "purple" : "white",
                        }}
                      >
                        {i?.name} <br></br>{" "}
                        <span
                          style={{
                            fontSize: "18px",
                            transition: "0.5s",
                            position: "relative",
                            color: "white",
                          }}
                        >
                          {i?.time}
                        </span>
                      </h2>
                    </Box>
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
    time: "Website designer",
    image:
      "https://vignette.wikia.nocookie.net/supernatural-diaries/images/b/b2/Cara-delevingne-profile.jpg/revision/latest?cb=20140217060511",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Namiusto ea tenetur quas facere minima obcaecati mollitia sedipsum quod, eius repellat nihil quos. Saepe ipsa veritatismagni voluptates voluptatum.",
  },
  {
    name: "Early Prediction of Lifestyle Diseases",
    time: "Backend developer",
    image:
      "https://steamuserimages-a.akamaihd.net/ugc/916918533107756109/283D620FFDBC088A442F4908106C2DB4A76B58F4/",
    desc: "an application that takes input the various lifestyle habits of an individual and gives the chances of various diseases based on that as an output .",
  },
  {
    name: "Codeal",
    time: "Front end developerr",
    image:
      "https://wallpaperstock.net/beautiful-lily-collins-wallpapers_36770_1600x1200.jpg",
    desc: "A full stack , completely scalable social media web site with all important features like friends , chatting , comments , likes , posts etc",
  },
  {
    name: "Patient Care System",
    time: "Backend developer",
    image:
      "https://steamuserimages-a.akamaihd.net/ugc/916918533107756109/283D620FFDBC088A442F4908106C2DB4A76B58F4/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Namiusto ea tenetur quas facere minima obcaecati mollitia sedipsum quod, eius repellat nihil quos. Saepe ipsa veritatismagni voluptates voluptatum.",
  },
  {
    name: "Crop Management System",
    time: "Front end developerr",
    image:
      "https://wallpaperstock.net/beautiful-lily-collins-wallpapers_36770_1600x1200.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Namiusto ea tenetur quas facere minima obcaecati mollitia sedipsum quod, eius repellat nihil quos. Saepe ipsa veritatismagni voluptates voluptatum.",
  },
];
