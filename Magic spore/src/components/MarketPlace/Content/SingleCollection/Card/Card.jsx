import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { BuyButton, CardButton, CardStyle } from "./style";
import CardImg from "../../../../../assets/imgs/cardImg1.png";
const Card = () => {
  return (
    <Box sx={CardStyle}>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item container xs={12} justifyContent="center">
          <img src={CardImg} alt="card-image" width="40%" />
        </Grid>
        <Grid item container xs={12}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ flexGrow: 1, mt: 2 }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <CardButton>scoby</CardButton>
            </Box>
            <CardButton>
              Mint Date <br /> 12/202{" "}
            </CardButton>
            <CardButton>
              MRR <br />
              0.947 SOL <br /> $132.24
            </CardButton>
            <CardButton>
              CMGR <br /> 185%
            </CardButton>
          </Stack>
        </Grid>
        <Grid item container xs={12} sx={{ mt: 2 }}>
          <Grid item container xs={6}>
            <Typography variant="h5" component="div">
              Morph
            </Typography>
          </Grid>
          <Grid item container xs={6} justifyContent="flex-end">
            <CardButton>Price</CardButton>
          </Grid>
        </Grid>
        <Grid item container xs={12} sx={{ mt: 4 }}>
          <Grid item container xs={6}>
            <BuyButton>Buy Now</BuyButton>
          </Grid>
          <Grid item container xs={6} justifyContent="flex-end">
            <Typography variant="h5" component="div">
              0.9 SOL <span>$120</span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Card;
