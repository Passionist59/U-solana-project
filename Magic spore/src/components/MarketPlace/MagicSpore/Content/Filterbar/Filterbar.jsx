import { Box } from "@mui/material";
import React from "react";
import Search from "./Search/Search";

const Filterbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search />
    </Box>
  );
};

export default Filterbar;
