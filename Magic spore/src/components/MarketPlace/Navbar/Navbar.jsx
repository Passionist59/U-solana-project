import React from "react";
import { Avatar, Box, Container, InputAdornment, Stack } from "@mui/material";
import Logo from "../../../assets/imgs/navbarLogo.png";
import { Search } from "@mui/icons-material";
import { LinkStyle, SearchField } from "./style";
import { Link } from "react-router-dom";
import Image from "../../../assets/imgs/magicspore-cards/middle-img.png";

import WalletCard from "../Wallet/Wallet";
import { connect } from "react-redux";
const Navbar = ({ wallet }) => {
  const Links = [
    { title: "Collection" },
    { title: "Stats" },
    { title: "Help" },
  ];
  return (
    <Box
      sx={{ flexGrow: 1, py: 2 }}
      onClick={() => {
        console.log(wallet);
      }}
    >
      <Stack direction="row" alignItems={"center"} spacing={6}>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "end" }}>
          <img src={Logo} alt="" width="63px" height="63px" />
          <span style={{ color: "#fff" }}>invest in your friends</span>
        </Box>
        <Stack
          direction="row"
          alignItems={"center"}
          spacing={6}
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          <SearchField
            placeholder="Search collections and tokens"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
            }}
          />
          {Links.map((link) => (
            <Link to={link.title.toLowerCase()} style={LinkStyle}>
              {link.title}
            </Link>
          ))}
          <Avatar alt="Avatar profile picure" src={Image} size="large" />
          <WalletCard wallet={wallet} />
        </Stack>
      </Stack>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    wallet: state.admin.wallet,
  };
};

export default connect(mapStateToProps, {})(Navbar);
