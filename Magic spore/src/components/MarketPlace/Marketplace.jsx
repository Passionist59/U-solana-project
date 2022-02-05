import { Box, Container } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./Content/Content";
import SingleCollection from "./Content/SingleCollection/SingleCollection";
import MagicSpore from "./MagicSpore/MagicSpore";
import MarketNav from "./Navbar/Navbar";

const Marketplace = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl">
        <MarketNav />
        <Routes>
          <Route path="/" exact element={<Content />} />
          <Route path="/collection/:id" exact element={<SingleCollection />} />
          <Route path="/magicspore/:id" exact element={<MagicSpore />} />
        </Routes>
        {/* <Content /> */}
      </Container>
    </Box>
  );
};

export default Marketplace;
