import { Box, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import ButtonHeader from "../Utils/Button.Header";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#fffff",
        color: "#000000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        position: "relative",
        marginBottom: "20px", // Add space below the header
        marginTop: -10,
        marginLeft: -10,
        marginRight: -10,
      }}
    >
      <div
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
        }}
      >
        <i>Sports News</i>
      </div>
      <Box>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            margin: 0,
            padding: 0,
            marginLeft: "auto",
            borderColor: "black",
          }}
        >
          <li style={{ marginLeft: "1rem" }}>
            <Link to="/" style={{ color: "#000000", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li style={{ marginLeft: "1rem" }}>
            <Link
              to="/EuroPage"
              style={{ color: "#000000", textDecoration: "none" }}
            >
              Euro Page
            </Link>
          </li>
          <li style={{ marginLeft: "1rem" }}>
            <Link
              to="/Trending News"
              style={{ color: "#000000", textDecoration: "none" }}
            >
              Trending News
            </Link>
          </li>
          <li style={{ marginLeft: "1rem" }}>
            <Link
              to="/ClubPage"
              style={{ color: "#000000", textDecoration: "none" }}
            >
              Clubs Ranking
            </Link>
          </li>
          <li style={{ marginLeft: "1rem" }}>
            <Link
              to="/About Us"
              style={{ color: "#000000", textDecoration: "none" }}
            >
              About Us
            </Link>
          </li>
        </ul>
      </Box>
      <div
        style={{
          marginLeft: "1rem",
          padding: "0 8px",
          border: "1px solid grey",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          type="text"
          size="small"
          placeholder="Search"
          variant="standard"
          sx={{
            padding: "5px",
            border: "none",
            borderRadius: "2px",
            color: "#000000",
          }}
        />
        {/* <ButtonHeader /> */}
      </div>
    </div>
  );
};

export default Header;
