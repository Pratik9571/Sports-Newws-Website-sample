import { Box, Typography } from "@mui/material";
import React from "react";
import Clubranking from "../Images/ClubRanking.png";

const ClubRanking = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#EBEEF3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "-10rem",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        style={{
          marginTop: "1rem",
          marginBottom: "2rem",
          boxShadow: "0px 22px 70px 4px rgba(0, 0, 0, 0.56)",
          backgroundColor: "white",
          padding: "1rem",
          fontStyle: "italic",
        }}
      >
        PREMIER LEAGUE CLUB RANKING OF 2024/25
      </Typography>
      <Box
        sx={{
          height: "648px",
          width: "1293px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${Clubranking})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
    </Box>
  );
};

export default ClubRanking;
