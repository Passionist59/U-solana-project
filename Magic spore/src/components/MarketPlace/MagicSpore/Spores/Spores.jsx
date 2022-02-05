import { Box, Stack } from "@mui/material";
import React from "react";
import { ListButton } from "./style";
import Imgs from "../../../../assets/imgs/spores-group.png";
import StackNav from "../../../../assets/imgs/nav-stack.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { BsDiscord, BsFilesAlt } from "react-icons/bs";

const Spores = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          mt: 2,
          ml: 4,
        }}
        direction="row"
        alignItems="center"
        gap={4}
      >
        <TwitterIcon sx={{ color: "#fff" }} />
        <BsDiscord style={{ color: "#fff" }} size="24px" />
        <img src={StackNav} width="24px" />
      </Stack>
      <Stack direction="column" gap={4} sx={{ mt: 4 }}>
        <img src={Imgs} alt="alt" />
        <ListButton>List My Spores</ListButton>
      </Stack>
    </Box>
  );
};

export default Spores;
