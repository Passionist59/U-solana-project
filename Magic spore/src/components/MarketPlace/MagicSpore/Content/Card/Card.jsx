import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { BuyButton, CardButton, CardStyle } from "./style";
import Image from "../../../../../assets/imgs/magicspore-cards/prof-1.png";
import { CardTitle } from "./style";
const Card = ({ data }) => {
  return (
    <Box sx={CardStyle}>
      <Grid container sx={{ flexGrow: 1 }}>
        <Avatar
          src={Image}
          sx={{
            position: "absolute",
            top: -20,
            left: -20,
            width: "100px",
            height: "100px",
          }}
        />
        <Grid item container xs={12} justifyContent="center">
          <img src={data.bg} alt="card-image" width="100%" />
        </Grid>
        <Grid item container xs={12}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ flexGrow: 1, mt: 2 }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <CardButton>Moto</CardButton>
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
            <Typography variant="h1" component="div" sx={CardTitle}>
              Magic Spore
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
          <Grid
            item
            container
            xs={6}
            alignItems="flex-start"
            justifyContent={"flex-end"}
          >
            <Stack direction="row" gap={1} alignItems="flex-end">
              <Typography variant="h1" component="div" sx={SubPriceStyle}>
                $123.2
              </Typography>
              <Typography variant="h1" component="div" sx={PriceStyle}>
                0.9 SOL
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Card;

const PriceStyle = {
  color: "#fff",
  fontFamily: "TTNormsRegular",
  fontSize: "18px",
};
const SubPriceStyle = {
  color: "rgba(255,255,255,0.5)",
  fontFamily: "TTNormsRegular",
  fontSize: "12px",
};
