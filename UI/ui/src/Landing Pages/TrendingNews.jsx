import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Golf from "../Images/Golf.png";
import Baseball from "../Images/Baseball.png";
import Rugby from "../Images/Rugby.png";

const TrendingNews = () => {
  const navigate = useNavigate();

  const handleCardClick = (page) => {
    navigate(page);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#EBEEF3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          {/* Golf */}
          <Box
            onClick={() => handleCardClick("/Trending News")}
            style={{
              height: "505px",
              width: "370px",
              borderRadius: "2rem 0",
              backgroundColor: "white",
              cursor: "pointer",
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
            onClick={() => handleCardClick("/Trending News")}
            style={{
              height: "505px",
              width: "370px",
              borderRadius: "2rem 0",
              backgroundColor: "white",
              cursor: "pointer",
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
            onClick={() => handleCardClick("/Trending News")}
            style={{
              height: "505px",
              width: "370px",
              borderRadius: "2rem 0",
              backgroundColor: "white",
              cursor: "pointer",
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
