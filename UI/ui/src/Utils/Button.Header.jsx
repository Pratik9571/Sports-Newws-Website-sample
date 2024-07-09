import { Button } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const ButtonHeader = () => {
  return (
    <>
      <Button variant="Contained" color="#B8C2CE">
        <SearchIcon />
      </Button>
    </>
  );
};

export default ButtonHeader;
