import { Box, Stack } from "@mui/material";
import React from "react";
import { WalletBox } from "./style";

const Wallet = ({ wallet }) => {
  return (
    <WalletBox>
      <Stack direction="row" alignItems="center" gap={1}>
        {wallet?.name}
        <img src={wallet.icon} width={"20px"} height={"20px"} alt="" />
      </Stack>
      {wallet.coins}
    </WalletBox>
  );
};

export default Wallet;
