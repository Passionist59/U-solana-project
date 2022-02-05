import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filterbar from "../Filterbar/Filterbar";
import Collection from "./Collection/Collection";
import TopBar from "./TopBar/TopBar";
import { LoadMoreButton } from "./style";

import bg1 from "../../../assets/imgs/cards/1-bg.png";
import pr1 from "../../../assets/imgs/cards/1-profile.png";
import bg2 from "../../../assets/imgs/cards/2-bg.png";
import pr2 from "../../../assets/imgs/cards/2-profile.png";
import bg3 from "../../../assets/imgs/cards/3-bg.png";
import pr3 from "../../../assets/imgs/cards/3-profile.png";
import bg4 from "../../../assets/imgs/cards/4-bg.png";
import pr4 from "../../../assets/imgs/cards/4-profile.png";
import bg5 from "../../../assets/imgs/cards/5-bg.png";
import pr5 from "../../../assets/imgs/cards/5-profile.png";
import bg6 from "../../../assets/imgs/cards/6-bg.png";
import pr6 from "../../../assets/imgs/cards/6-profile.png";
const CardsData = [
  {
    name: "David Larson Levine",
    bio: "Founder & CEO of Scoby Social.Enjoy our app!",
    address: "Los Angeles, California, United States",
    website: "www.motodave.com",
    followers: "200",
    following: "23",
    profileImage: pr1,
    bg: bg1,
  },
  {
    name: "Esther Howard",
    bio: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    address: "Thornridge Cir. Shiloh, Hawaii",
    website: "www.motodave.com",
    followers: "2039",
    following: "45",
    profileImage: pr2,
    bg: bg2,
  },
  {
    name: "Jenny Wilson",
    bio: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    address: "Los Angeles, California, United States",
    website: "www.motodave.com",
    followers: "400",
    following: "120",
    profileImage: pr3,
    bg: bg3,
  },
  {
    name: "Marvin McKinney",
    bio: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    address: "2118 Thornridge Cir. Syracuse",
    website: "www.motodave.com",
    followers: "200",
    following: "23",
    profileImage: pr4,
    bg: bg4,
  },
  {
    name: "Albert Flores",
    bio: "Founder & CEO of Scoby Social.Enjoy our app!",
    address: "Los Angeles, California, United States",
    website: "www.motodave.com",
    followers: "200",
    following: "23",
    profileImage: pr5,
    bg: bg5,
  },
  {
    name: "Kristin Watson",
    bio: "Founder & CEO of Scoby Social.Enjoy our app!",
    address: "Los Angeles, California, United States",
    website: "www.motodave.com",
    followers: "200",
    following: "23",
    profileImage: pr6,
    bg: bg6,
  },
];

const postsPerPage = 3;
let arrayForHoldingPosts = [];
const Content = () => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);
  const loopWithSlice = (start, end) => {
    const slicedPosts = CardsData.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
    console.log(postsToShow);
  };
  const handleShowLessPosts = () => {
    setPostsToShow([]);
    arrayForHoldingPosts = [];
    loopWithSlice(0, postsPerPage);
    setNext(3);
  };

  const router = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, mt: 4, py: 4 }}>
      <TopBar />
      <Filterbar />
      <Grid container spacing={4} sx={{ mt: 4, py: 4 }}>
        {postsToShow.map((data, index) => (
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            key={index}
            onClick={() => {
              router(`/marketplace/collection/${index}`);
            }}
          >
            <Collection data={data} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          aligItems: "center",
          justifyContent: "center",
        }}
      >
        {postsToShow.length < CardsData.length && (
          <LoadMoreButton onClick={handleShowMorePosts}>
            Show more
          </LoadMoreButton>
        )}
        {postsToShow.length >= CardsData.length && (
          <LoadMoreButton onClick={handleShowLessPosts}>
            Show less
          </LoadMoreButton>
        )}
      </Box>
    </Box>
  );
};

export default Content;
