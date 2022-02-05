import { Box, Grid } from "@mui/material";
import React from "react";
import Card from "./Card/Card";
import HeaderData from "./HeaderData/HeaderData";
import { CollectionHeader } from "./style";
const SingleCollection = ({}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={CollectionHeader}></Box>
      <Box sx={{ flexGrow: 1, mt: -6, zIndex: "9" }}>
        <HeaderData />
      </Box>
      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7].map((card) => (
            <Grid item xs={3}>
             <Card />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SingleCollection;
