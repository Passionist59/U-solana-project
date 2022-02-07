import {
  Box,
  Grid,
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  CardDesc,
  CardStyle,
  CardTextField,
  ImageCard,
  MaxButton,
  MintSpores,
} from "./style";
import CardImg from "../../../../assets/imgs/mint-card.png";
import { connect } from "react-redux";
import { Form, Formik } from "formik";
import InputHandler from "./InputHandler";
import { Connection, clusterApiUrl } from '@solana/web3.js';
import {  Provider, web3 } from '@project-serum/anchor';
const {  LAMPORTS_PER_SOL } = web3;

const network = clusterApiUrl('devnet');
const Card = ({ coins }) => {

// Controls how we want to acknowledge when a transaction is "done".
const opts = {
  preflightCommitment: "processed"
}
var bl;
const Wallet_ballence = () => {

  const [balance, getWalletBalance] = useState(null);
  const [address, getWalletAddress] = useState(null);

  const getBalance = async () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = getProvider();
    const publicKey = provider.wallet.publicKey;
    const balanceOfwallet = await connection.getBalance(publicKey);
    getWalletBalance(balanceOfwallet / LAMPORTS_PER_SOL);
	bl = balance;
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
      {balance}
  );
};

  const maxMints = 24;
  const totalMint = 1000;
  const [errorType, setErrorType] = useState("");
  const [currentMint, setCurrentMint] = useState(0);
  const CheckErrors = (mints, sols) => {
	  sols = bl;
    console.log(mints, sols);
    if (mints > sols) {
      setErrorType(0);
    }else if (mints > totalMint - currentMint) {
      setErrorType(1);} 
    else if (!coins) {
      setErrorType(404);
    } else if (mints > maxMints) {
      setErrorType(2);
    } else {
		let mintAmount = localStorage.getItem("mint");
		mintAmount = Number(mintAmount) + Number(mints);
        localStorage.setItem("mint", mintAmount);
        setCurrentMint(Number(mintAmount));
        
    }
  };
  const Errors = () => {
    switch (errorType) {
      case 0:
        return (
          <Grid item container xs={12} justifyContent="center">
            <Typography
              variant={"p"}
              component={"div"}
              sx={{
                color: "#F55757",
                textAlign: "center",
                fontSize: "12px",
                fontFamily: "TTNormsMedium",
              }}
            >
              You don't have enough SOL in your wallet to complete the
              transaction.
            </Typography>
          </Grid>
        );
        break;
        case 1:
        return (
          <Grid item container xs={12} justifyContent="center">
            <Typography
              variant={"p"}
              component={"div"}
              sx={{
                color: "#F55757",
                textAlign: "center",
                fontSize: "12px",
                fontFamily: "TTNormsMedium",
              }}
            >
              You exceeded the available mints. Make your mints smaller.
            </Typography>
          </Grid>
        );
        break;
      case 404:
        return (
          <Grid item container xs={12} justifyContent="center">
            <Typography
              variant={"p"}
              component={"div"}
              sx={{
                color: "#F55757",
                textAlign: "center",
                fontSize: "12px",
                fontFamily: "TTNormsMedium",
              }}
            >
              Please connect your Solana wallet before you mint a Magic Spore.
            </Typography>
          </Grid>
        );
        break;
      case 2:
        return (
          <Grid item container xs={12} justifyContent="center">
            <Typography
              variant={"p"}
              component={"div"}
              sx={{
                color: "#F55757",
                textAlign: "center",
                fontSize: "12px",
                fontFamily: "TTNormsMedium",
              }}
            >
              I'm sorry, we don't have that many Magic Spores available.
            </Typography>
          </Grid>
        );
        break;
      default:
	    
        break;
    }
  };
  

  useEffect(() => {
    
    let mintAmount = localStorage.getItem("mint");
    if(!mintAmount) {
      localStorage.setItem('mint', 0);
    } else {
      setCurrentMint(Number(mintAmount));
    }
  }, [])
  return (
    <Box sx={CardStyle}>
      <Formik
        initialValues={{ sols: coins, mints: 10, totalPrice: 10 }}
        onSubmit={(values) => {
          CheckErrors(values.mints, values.sols);
        }}
      >
        {(formikProps) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item container xs={12} justifyContent={"center"}>
                <Box sx={ImageCard}>
                  <img src={CardImg} width="100%" alt="" />
                </Box>
              </Grid>
              <Grid item container justifyContent="center" spacing={2} xs={12}>
                <Grid item container xs={6} justifyContent="center">
                  <Typography variant="h1" component="div" sx={CardDesc}>
                    Number <br /> Available <br /> {totalMint-currentMint}/{totalMint}
                  </Typography>
                </Grid>
                <Grid item container xs={6} justifyContent="center">
                  <Typography variant="h1" component="div" sx={CardDesc}>
                    price per <br /> spore <br /> 1 SOL
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} spacing={2} justifyContent="center">
                <Grid item container xs={6} justifyContent="center">
                  <InputHandler variant="standard" name="mints" label="Mint me" />
                </Grid>
                <Grid item container xs={6} justifyContent="center">
                  <InputHandler
                    label="Total Price"
                    variant="standard"
                    name="mints"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container xs={12} spacing={2} justifyContent="center">
                <Grid item container xs={6} justifyContent="center">
                  <MaxButton>Max ({maxMints})</MaxButton>
                </Grid>
                <Grid item container xs={6} justifyContent="center">
                  <MintSpores type="submit">Mint my Spores!</MintSpores>
                </Grid>
              </Grid>
              {Errors()}
              <Grid item container xs={12} justifyContent="center">
                <Typography
                  variant={"p"}
                  component={"div"}
                  sx={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "12px",
                    fontFamily: "TTNormsRegular",
                  }}
                >
                  Magic Spores thrive in community. A Guardian must be currently
                  caring for a Spore to mint a new Spore.
                </Typography>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
const mapStateTopProps = (state) => {
  return {
    coins: state.admin.wallet.coins,
  };
};
export default connect(mapStateTopProps, {})(Card);
