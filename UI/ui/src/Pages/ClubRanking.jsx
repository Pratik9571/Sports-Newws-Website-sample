import { Box, Typography } from "@mui/material";
import React from "react";
import Clubranking from "../Images/ClubRanking.png";

const ClubRanking = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#EBEEF3",
        display: "flex", // Ensure the outer box uses flexbox to center its content
        justifyContent: "center",
        alignItems: "center",
        margin: "-10rem",
        flexDirection: "column", // Align items in column direction
      }}
    >
      <Typography
        variant="h4" // Adjust typography variant as needed
        style={{
          marginTop: "1rem", // Adjust top margin as needed
          marginBottom: "2rem", // Add some bottom margin for spacing
          boxShadow: "0px 22px 70px 4px rgba(0, 0, 0, 0.56)", // Box shadow style
          backgroundColor: "white", // Optional: add a background color
          padding: "1rem", // Optional: add padding for text container
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
