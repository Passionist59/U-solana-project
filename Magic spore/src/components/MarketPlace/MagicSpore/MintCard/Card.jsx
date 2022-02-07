import {
  Box,
  Grid,
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
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
const Card = ({ coins }) => {
  const maxMints = 24;
  const [errorType, setErrorType] = useState("");
  const CheckErrors = (mints, sols) => {
    console.log(mints, sols);
    if (mints > sols) {
      setErrorType(0);
    } else if (!coins) {
      setErrorType(404);
    } else if (mints > maxMints) {
      setErrorType(1);
    } else {
      setErrorType(200);
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
              I'm sorry, we don't have that many Magic Spores available.
            </Typography>
          </Grid>
        );
        break;
      default:
        return "";
        break;
    }
  };
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
                    Number <br /> Available <br /> 1000/1000
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
                    name="totalPrice"
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
