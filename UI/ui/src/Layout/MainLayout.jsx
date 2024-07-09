import { Box } from "@mui/material";
import React from "react";
import Header from "../Typography/Header";
import Footer from "../Typography/Footer";
import Home from "../Pages/Home";
import EuroCup from "../Pages/EuroCup";
import ClubRanking from "../Pages/ClubRanking";
import TrendingNews from "../Pages/TrendingNews";
import SignUp from "../Pages/SignUp";

const MainLayout = () => {
  return (
    <Box>
      <Header />
      <Home />
      <EuroCup />
      <TrendingNews />
      <ClubRanking />
      <SignUp />
      <Footer />
    </Box>
  );
};

export default MainLayout;
