import { Box, Grid, Avatar, Typography, Button } from "@mui/material";
import React from "react";
import {
  CardHero,
  CardStyle,
  CardContent,
  CardName,
  CardBio,
  CardAddress,
  CardWebsite,
  FollowCount,
  ConnectButton,
  ViewButton,
} from "./style";
import VerifiedIcon from "@mui/icons-material/Verified";
import Logo from "../../../../assets/imgs/navbarLogo.png";
const Collection = ({ data }) => {
  return (
    <Box sx={CardStyle}>
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <Grid
          item
          xs={12}
          sx={{
            ...CardHero,
            background: `url(${data.bg}) no-repeat center center`,
          }}
        >
          <Avatar
            src={data.profileImage}
            sx={{ border: "2px solid white", width: 80, height: 80 }}
          />
        </Grid>
        <Grid item container xs={12} sx={CardContent} spacing={1}>
          <Grid item container xs={6} sx={{ flexGrow: 1 }}>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" sx={CardName}>
                {data.name}
                <VerifiedIcon sx={{ color: "#fff", fontSize: "16px" }} />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" sx={CardBio}>
                {data.bio}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" sx={CardAddress}>
                Los Angeles, California, United States
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" sx={CardWebsite}>
                www.motodave.com
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={6} sx={{ flexGrow: 1 }}>
            <Grid item container xs={12}>
              <Grid item xs={6}>
                <Typography variant="p" component="div" sx={FollowCount}>
                  220
                </Typography>
                <Typography variant="p" component="div" sx={FollowCount}>
                  Followers
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="p" component="div" sx={FollowCount}>
                  220
                </Typography>
                <Typography variant="p" component="div" sx={FollowCount}>
                  Following
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" sx={CardAddress}>
                I'm Holding:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1" component="div" sx={CardBio}>
                Trace, Ring, Morph, Crown and 5 more...
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <ConnectButton
                endIcon={<img width="24px" height="24px" src={Logo} />}
              >
                Connect
              </ConnectButton>
            </Grid>
            <Grid
              item
              container
              xs={6}
              justifyContent="flex-end"
              alignItems={"flex-end"}
            >
              <ViewButton>View Collection</ViewButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Collection;
