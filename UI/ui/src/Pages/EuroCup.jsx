import { Box } from "@mui/material";
import React from "react";
import Eurocup from "../Images/EuroCup.png";
import { keyframes } from "@emotion/react";

// Define keyframes for the animation
const moveText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const EuroCup = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#EBEEF3",
        padding: "0 18rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "-15rem",
      }}
    >
      <Box
        sx={{
          height: "625px",
          width: "1128px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${Eurocup})`,
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            backgroundColor: "rgb(255, 255, 255)", // Optional: semi-transparent background
            padding: "8px 0",
            animation: `${moveText} 17s linear infinite`, // Adjust animation duration as needed
            whiteSpace: "break-spaces", // Prevents text from wrapping
            overflow: "hidden", // Hides any overflow (though translateX will handle this)
            textAlign: "center", // Center align text
            fontStyle: "italic",
            fontSize: "30px",
          }}
        >
          Euro 2024 Semifinals Set to Thrill Fans
        </Box>
      </Box>
    </Box>
  );
};

export default EuroCup;
