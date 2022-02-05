import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import {
  ConnectButton,
  FollowCount,
  HeaderAddress,
  HeaderBio,
  HeaderName,
  HeaderWebsite,
} from "./style";
import Logo from "../../../../../assets/imgs/navbarLogo.png";

const HeaderData = () => {
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item container xs={4}>
        <Grid item container lg={6} xs={12} sx={{ m: 0, p: 0 }}>
          <Avatar
            sx={{ width: 160, height: 160, border: "6px solid #1A1A77" }}
            src={"https://mui.com/static/images/avatar/3.jpg"}
          />
        </Grid>
        <Grid item container lg={6} xs={12} spacing={1}>
          <Grid item xs={12}>
            <ConnectButton
              endIcon={<img width="24px" height="24px" src={Logo} />}
            >
              Connect
            </ConnectButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" component="div" sx={HeaderName}>
              David Larson Levine
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" component="div" sx={HeaderAddress}>
              Los Angeles, California, United States
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" component="div" sx={HeaderWebsite}>
              www.motodave.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={4}>
        <Grid item xs={6}>
          <Typography sx={FollowCount} variant="h1" component="div">
            220 <br /> followers
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={FollowCount} variant="h1" component="div">
            220 <br /> following
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={4}>
        <Grid item xs={12}>
          <Typography sx={HeaderBio} variant="h1" component="div">
            Founder & CEO of Scoby Social. Enjoy our app!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderData;
