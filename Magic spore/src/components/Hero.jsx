import React, { useState } from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import CardImg1 from "../assets/imgs/cardImg1.png";
import SoldoutCard from "./SoldoutCard";
import TransformerCard from "./TransformerCard";
import Navbar from "./Navbar";
import { Container, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Hero({ setConnectWallet, chosenWallet }) {
  const [card, setCard] = useState("normal");
  const router = useNavigate();
  const NormalCard = () => {
    return (
      <ContentContainer>
        <Title>Magic Spore</Title>
        <Desc>
          Welcome to Scoby One, home of Social Crypto Syndication. Our first
          project is live! You can join us now for Mapshifting: the Self
          Sovereignty Game. This is where you can mint Magic Spores, but only if
          you’re already holding one in your wallet. If you’d like a free Magic
          Spore, and you don’t have a local dealer, you can enroll in
          <a href="https://www.mapshifting.com/%3EMoto’s" target="_blank">
            Mapshifting Airdrip
          </a>
          while supplies last.
        </Desc>
        <Stack direction="row" gap={2}>
          <Button
            onClick={() => {
              router("/marketplace");
            }}
          >
            Explore
          </Button>
          <Button>Mint a Magic Spore!</Button>
        </Stack>
      </ContentContainer>
    );
  };
  return (
    <>
      <Navbar setConnectWallet={setConnectWallet} chosenWallet={chosenWallet} />
      <Container sx={{ mt: 4 }} maxWidth="xl">
        <Grid container alignItems="center" sx={{ mt: 6 }}>
          <Grid item xs={6}>
            {(card === "creator" && <SoldoutCard setCard={setCard} />) ||
              (card === "normal" && NormalCard()) ||
              (card === "transformer" && <TransformerCard setCard={setCard}/>)}
          </Grid>
          <Grid item xs={6}>
            <CardsContainer>
              <Card
                onClick={() => {
                  setCard("transformer");
                }}
              >
                <CardImage src={CardImg1} />
                <CardTitle>Transformer</CardTitle>
                <CardDesc>
                  Weaves cocoons of transformation where collectors can initiate
                  themselves into the mysteries of their own soul.
                </CardDesc>
              </Card>
              <Card1
                onClick={() => {
                  setCard("creator");
                }}
              >
                <CardImage src={CardImg1} />
                <CardTitle>Creator</CardTitle>
                <CardDesc>
                  In council with the Community of All Beings, shifts the
                  quantum field to open new possibility spaces for the imaginal
                  realm.
                </CardDesc>
              </Card1>
            </CardsContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Hero;

// const Container = styled.div`
//   margin-top: 48px;
// `;

const ContentContainer = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  text-align: center;
`;
const Desc = styled.p`
  color: #fff;
  font-size: 20px;
  font-family: "TTNormsRegular";
  line-height: 130%;
  letter-spacing: 0.9px;
`;
const Title = styled.h1`
  font-size: 48px;
  font-family: "TTNormsBold";
  background: -webkit-linear-gradient(left, #f97add, #683afe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Button = styled.button`
  padding: 8px 24px;
  color: #fff;
  font-family: "TTNormsMedium";
  background: #cd068e;
  cursor: pointer;
  text-transform: capitalize;
  border: none;
  border-radius: 8px;
  transition: all ease-in 0.3s;

  &:hover {
    background: #fff;
    color: #cd068e;
  }
`;
const CardsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 205px;
  min-height: 273px;
  background: linear-gradient(
    91.53deg,
    rgba(255, 255, 255, 0.16) 1.89%,
    rgba(255, 255, 255, 0.105) 103.72%
  );
  border: 1px solid rgba(242, 242, 242, 0.4);
  box-sizing: border-box;
  box-shadow: 1px 0px 5px 3px rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border-radius: 14px;
  transform: rotate(-15.4deg);
  z-index: 2;
  margin-top: 15%;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  user-select: none;
  transition: all ease-in 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
const Card1 = styled.div`
  width: 205px;
  height: 273px;
  background: linear-gradient(
    91.53deg,
    rgba(255, 255, 255, 0.16) 1.89%,
    rgba(255, 255, 255, 0.105) 103.72%
  );
  border: 1px solid rgba(242, 242, 242, 0.4);
  box-sizing: border-box;
  box-shadow: 1px 0px 5px 3px rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border-radius: 14px;
  transform: rotate(-4.82deg);
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: all ease-in 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
const CardTitle = styled.h1`
  font-size: 18px;
  color: #fff;
  font-family: "TTNormsBold";
`;
const CardDesc = styled.p`
  font-size: 12x;
  color: #fff;
  font-family: "TTNormsRegular";
`;
const CardImage = styled.img`
  height: 118px;
  object-fit: contain;
`;
