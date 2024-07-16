import { Box } from "@mui/material";
import React from "react";
import Header from "../Typography/Header";
import Footer from "../Typography/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
