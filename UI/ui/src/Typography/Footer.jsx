import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#E1E8F0",
        color: "#000000",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        bottom: 0,
        width: "100%", // Occupy full width
      }}
    >
      <Box>
        <Typography variant="body2">Contact us: info@sportsnews.com</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
