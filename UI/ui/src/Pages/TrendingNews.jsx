import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Golf from "../Images/Golf.png";
import Baseball from "../Images/Baseball.png";
import Rugby from "../Images/Rugby.png";

const TrendingNews = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#EBEEF3",
        display: "flex", // Ensure the outer box uses flexbox to center its content
        justifyContent: "center",
        alignItems: "center",
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
        Trending News
      </Typography>
      <Box
        sx={{
          height: "643px",
          width: "1170px",
          backgroundColor: "#E1E8F0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            marginTop: "4rem",
          }}
        >
          {/* GOlf */}
          <Box
            style={{
              height: "505px",
              width: "370px",
              borderRadius: "2rem 0",
              backgroundColor: "white",
            }}
          >
            <Card
              sx={{
                height: "248px",
                width: "370px",
                borderRadius: "4px",
                backgroundImage: `url(${Golf})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <Typography
              variant="h6"
              style={{ padding: "2rem", fontFamily: "fantasy" }}
            >
              Bryson DeChambeau Snatches US Open Victory Amidst High Drama.
            </Typography>
          </Box>

          {/* Baseball */}
          <Box
            style={{
              height: "505px",
              width: "370px",
              borderRadius: "2rem 0",
              backgroundColor: "white",
            }}
          >
            <Card
              sx={{
                height: "248px",
                width: "370px",
                borderRadius: "4px",
                backgroundImage: `url(${Baseball})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <Typography
              variant="h6"
              style={{ padding: "2rem", fontFamily: "fantasy" }}
            >
              'Grateful' De La Cruz Shines as First-Time All-Star
            </Typography>
          </Box>

          {/* Rugby */}
          <Box
            style={{
              height: "505px",
              width: "370px",
              borderRadius: "2rem 0",
              backgroundColor: "white",
            }}
          >
            <Card
              sx={{
                height: "248px",
                width: "370px",
                borderRadius: "4px",
                backgroundImage: `url(${Rugby})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <Typography
              variant="h6"
              style={{ padding: "2rem", fontFamily: "fantasy" }}
            >
              South Africa Holds On to Defeat Ireland in Rugby Thriller
            </Typography>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default TrendingNews;
