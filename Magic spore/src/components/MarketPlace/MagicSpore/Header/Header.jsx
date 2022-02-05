import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../../../../assets/imgs/magicspore-cards/middle-img.png";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import InsightsIcon from "@mui/icons-material/Insights";
import {
  SubTitle,
  Title,
  BoldListTitle,
  NormalListDesc,
  InfoButton,
} from "./style";
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <InfoButton startIcon={<ContentPasteIcon />}>Latest Sales</InfoButton>
        <InfoButton startIcon={<InsightsIcon />}>Price History</InfoButton>
      </Box>
      <Grid container spacing={2} sx={{py:4}}>
        <Grid item container xs={12} justifyContent={"center"}>
          <img src={Image} alt="" width="140px" />
        </Grid>
        <Grid item container xs={12} justifyContent={"center"}>
          <Typography variant="h1" component="div" sx={Title}>
            Magic Spore
          </Typography>
        </Grid>
        <Grid item container xs={12} justifyContent={"center"}>
          <Typography variant="h1" component="div" sx={SubTitle}>
            The more you give away, the more you will receive.
          </Typography>
        </Grid>
        <Grid item container xs={12} justifyContent={"center"}>
          <Stack
            direction="row"
            gap={2}
            justifyContent="center"
            sx={{ flexGrow: 1, mt: 4 }}
          >
            <Stack direction="column" gap={2} alignItems="center">
              <Typography variant="h1" component="div" sx={BoldListTitle}>
                9/20
              </Typography>
              <Typography variant="h1" component="div" sx={NormalListDesc}>
                Listed Spores <br />
                Total Supply
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack direction="column" gap={2} alignItems="center">
              <Typography variant="h1" component="div" sx={BoldListTitle}>
                1
              </Typography>
              <Typography variant="h1" component="div" sx={NormalListDesc}>
                Owners
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack direction="column" gap={2} alignItems="center">
              <Typography variant="h1" component="div" sx={BoldListTitle}>
                9 SOL
              </Typography>
              <Typography variant="h1" component="div" sx={NormalListDesc}>
                Floor Price
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack direction="column" gap={2} alignItems="center">
              <Typography variant="h1" component="div" sx={BoldListTitle}>
                9.321 K SOL
              </Typography>
              <Typography variant="h1" component="div" sx={NormalListDesc}>
                Volume traded
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
