import { Box, Stack } from "@mui/material";
import {useState, useEffect} from 'react';
import React from "react";
import { WalletBox } from "./style";
import { Connection, clusterApiUrl } from '@solana/web3.js';
import {  Provider, web3 } from '@project-serum/anchor';
const {  LAMPORTS_PER_SOL } = web3;

// Set our network to devnet.
const network = clusterApiUrl('devnet');

// Controls how we want to acknowledge when a transaction is "done".
const opts = {
  preflightCommitment: "processed"
}


const Wallet = ({ wallet }) => {

  const [balance, getWalletBalance] = useState(null);
  const [address, getWalletAddress] = useState(null);


  const getBalance = async () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = getProvider();
    const publicKey = provider.wallet.publicKey;
    const balanceOfwallet = await connection.getBalance(publicKey);
    getWalletBalance(balanceOfwallet / LAMPORTS_PER_SOL);
  }


  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new Provider(connection, window.solana, opts.preflightCommitment,);
    return provider;
  }

  useEffect(()=> {
    getBalance();
  },[]);

  return (
    <WalletBox>
      <Stack direction="row" alignItems="center" gap={1}>
        {wallet?.name}
        <img src={wallet.icon} width={"20px"} height={"20px"} alt="" />
      </Stack>
      {/* {wallet.coins} */}
      {balance}

    </WalletBox>
  );
};

export default Wallet;
