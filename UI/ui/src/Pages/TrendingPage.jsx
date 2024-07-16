import { Box, Typography } from "@mui/material";
import React from "react";
import Golf from "../Images/Golf.png";
import Baseball from "../Images/Baseball.png";
import Rugby from "../Images/Rugby.png";

const TrendingPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#EBEEF3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "2rem",
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
          width: "1170px",
          backgroundColor: "#E1E8F0",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            marginBottom: "2rem",
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "150px",
              height: "150px",
              backgroundImage: `url(${Golf})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "8px",
              marginRight: "1rem",
            }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "0.5rem",
                fontFamily: "fantasy",
              }}
            >
              Bryson DeChambeau Snatches US Open Victory Amidst High Drama.
            </Typography>
            <Typography>
              In a thrilling finish to the US Open, Bryson DeChambeau clinched
              victory with a remarkable performance that had spectators on the
              edge of their seats. The final day was filled with intense moments
              and high drama as DeChambeau navigated through the challenges and
              emerged victorious.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            marginBottom: "2rem",
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "150px",
              height: "150px",
              backgroundImage: `url(${Baseball})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "8px",
              marginRight: "1rem",
            }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "0.5rem",
                fontFamily: "fantasy",
              }}
            >
              'Grateful' De La Cruz Shines as First-Time All-Star
            </Typography>
            <Typography>
              De La Cruz, expressing his gratitude, put on a spectacular show as
              a first-time All-Star. His performance was nothing short of
              exceptional, capturing the hearts of fans and making a significant
              impact on the game. De La Cruz's journey to becoming an All-Star
              is an inspiring story of hard work and determination.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            marginBottom: "2rem",
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "150px",
              height: "150px",
              backgroundImage: `url(${Rugby})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "8px",
              marginRight: "1rem",
            }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "0.5rem",
                fontFamily: "fantasy",
              }}
            >
              South Africa Holds On to Defeat Ireland in Rugby Thriller
            </Typography>
            <Typography>
              In an epic rugby showdown, South Africa managed to hold off a
              determined Ireland team to secure a thrilling victory. The match
              was filled with intense action and dramatic moments, leaving fans
              breathless. South Africa's resilience and strategic gameplay were
              key to their success in this high-stakes encounter.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingPage;
