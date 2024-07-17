import { Box, Card, Typography } from "@mui/material";
import React from "react";
import BackgroundHome from "../Images/BackgroundHome.png";
import French from "../Images/French.png";
import Car from "../Images/Car.png";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        position: "relative",
        marginBottom: "200px",
        marginTop: -10,
        marginLeft: -10,
        marginRight: -10,
        maxHeight: "100%",
        maxWidth: "100%",
        backgroundColor: "#EBEEF3",
      }}
    >
      <Box
        style={{
          height: "668px",
          width: "1454px",
          backgroundImage: `url(${BackgroundHome})`,
          backgroundRepeat: "no-repeat",
          filter: "grayscale(100%)",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            padding: "12rem 15rem",
            fontFamily: "fantasy",
            fontStyle: "oblique",
            fontWeight: "bold",
          }}
        >
          Trending News Daily
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "space-evenly",
          height: "554px",
          width: "282px",
        }}
      >
        <Card
          style={{
            height: "233px",
            width: "282px",
            backgroundImage: `
          linear-gradient(to top, rgba(255, 255, 255, 70%), rgba(132, 23, 23, 0.5)), 
          url(${French})
        `,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
          }}
        >
          <Typography
            style={{
              fontSize: "26px",
              fontWeight: "bold",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              marginTop: "10rem",
            }}
          >
            Viktor Axelsen Dominates in Jakarta
          </Typography>
        </Card>
        <Card
          style={{
            height: "233px",
            width: "282px",
            backgroundImage: `
          linear-gradient(to top, rgba(255, 255, 255, 58%), rgba(68, 55, 55, 0.5)), 
          url(${Car})
        `,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginTop: "30px",
            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
          }}
        >
          <Typography
            style={{
              fontSize: "26px",
              fontWeight: "bold",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              marginTop: "10rem",
            }}
          >
            Max Verstappen Triumphs Again
          </Typography>
        </Card>
      </Box>
    </div>
  );
};

export default Home;
