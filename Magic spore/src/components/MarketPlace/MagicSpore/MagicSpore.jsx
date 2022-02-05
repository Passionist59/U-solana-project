import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Card from "./MintCard/Card";
import ContentCard from "./Content/Card/Card";
import Header from "./Header/Header";
import Spores from "./Spores/Spores";
import Filterbar from "./Content/Filterbar/Filterbar";
import bg1 from "../../../assets/imgs/magicspore-cards/1.png";
import bg2 from "../../../assets/imgs/magicspore-cards/2.png";
import bg3 from "../../../assets/imgs/magicspore-cards/3.png";
import bg4 from "../../../assets/imgs/magicspore-cards/4.png";
import bg5 from "../../../assets/imgs/magicspore-cards/5.png";
import bg6 from "../../../assets/imgs/magicspore-cards/6.png";
import bg7 from "../../../assets/imgs/magicspore-cards/7.png";

const MagicSpore = () => {
  const CardsData = [
    {
      name: "David Larson Levine",
      bio: "Founder & CEO of Scoby Social.Enjoy our app!",
      address: "Los Angeles, California, United States",
      website: "www.motodave.com",
      followers: "200",
      following: "23",
      bg: bg1,
    },
    {
      name: "Esther Howard",
      bio: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
      address: "Thornridge Cir. Shiloh, Hawaii",
      website: "www.motodave.com",
      followers: "2039",
      following: "45",
      bg: bg2,
    },
    {
      name: "Jenny Wilson",
      bio: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
      address: "Los Angeles, California, United States",
      website: "www.motodave.com",
      followers: "400",
      following: "120",
      bg: bg3,
    },
    {
      name: "Marvin McKinney",
      bio: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
      address: "2118 Thornridge Cir. Syracuse",
      website: "www.motodave.com",
      followers: "200",
      following: "23",
      bg: bg4,
    },
    {
      name: "Albert Flores",
      bio: "Founder & CEO of Scoby Social.Enjoy our app!",
      address: "Los Angeles, California, United States",
      website: "www.motodave.com",
      followers: "200",
      following: "23",
      bg: bg5,
    },
    {
      name: "Kristin Watson",
      bio: "Founder & CEO of Scoby Social.Enjoy our app!",
      address: "Los Angeles, California, United States",
      website: "www.motodave.com",
      followers: "200",
      following: "23",
      bg: bg6,
    },
    {
      name: "Kristin Watson",
      bio: "Founder & CEO of Scoby Social.Enjoy our app!",
      address: "Los Angeles, California, United States",
      website: "www.motodave.com",
      followers: "200",
      following: "23",
      bg: bg7,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Box
        sx={{
          background:
            "linear-gradient(270deg, rgba(16, 14, 89, 0) 0%, #100E59 48.71%, rgba(16, 14, 89, 0) 93.14%)",
          py: 1,
          flexGrow: 1,
          display: "flex",
          aligItems: "center",
          justifyContent: "center",
          textAlign: "center",
          my: 6,
        }}
      >
        <Typography
          variant="h1"
          color="initial"
          sx={{
            color: "#fff",
            fontFamily: "TTNormsMedium",
            textAlign: "center",
            fontSize: "12px",
          }}
        >
          YOU ARE ON DEV.SCOBY.ONE. Make sure your wallet is connected to
          devnet. These are not real NFTs. This is for development.
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          pb: 4,
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Grid container spacing={4}>
          <Grid item lg={3} md={6} xs={12}>
            <Card />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Header />
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
            sx={{
              position: "relative",
            }}
          >
            <Spores />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Filterbar />
        </Box>
        <Grid container spacing={4} sx={{ mt: 4, py: 4 }}>
          {CardsData.map((card, index) => (
            <Grid item lg={3} md={6} xs={12} key={index}>
              <ContentCard data={card} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MagicSpore;
