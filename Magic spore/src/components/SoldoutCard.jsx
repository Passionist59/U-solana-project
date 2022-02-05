import React from "react"
import styled from 'styled-components'
import scoutIcon from '../assets/imgs/SoldoutCardIcon.png'
import profileImg from '../assets/imgs/profileImg.png'
import {AiOutlineClose} from 'react-icons/ai'

function SoldoutCard({setCard}) {
    return <Container>
        <Close onClick={() => {
            setCard('normal')
        }}>
            <AiOutlineClose style={{width: "24px", height: "24px", color: "#fff"}} onClick={() => {
                setCard('normal')
            }}/>
        </Close>
        <BG/>
        <Left>
            <LeftBtnGroup>
                <TopBtn>
                    Game piece
                </TopBtn>
                <TopBtn>
                    1 SOL
                </TopBtn>
            </LeftBtnGroup>
            <CardImageContainer>
                <Image src={scoutIcon} alt=""/>
                <CardTitle>Scout</CardTitle>
            </CardImageContainer>
            <ProfileContainer>
                <img src={profileImg} width={"48px"}/>
                <NamesContainer>
                    <CardTitle>Yuwipi Men</CardTitle>
                    <CardTitle style={{fontSize: "12px"}}>The Self-Sovereignty Game</CardTitle>
                </NamesContainer>
            </ProfileContainer>
            <a href="https://scoby.social" target={"_blank"}>
                <ViewWebsiteBtn>View Wesbite</ViewWebsiteBtn>
            </a>
            <Paragraph>
                <BoldText>All 10,000 Scouts are sold out!</BoldText> Join the Yuwipi Men to be notified when new assets
                are available
                for minting or Scout holders are willing to trade.</Paragraph>
        </Left>
        <Right>
            <RightTitle>Scout <br/> Enrolls you in the Yuwipi Men</RightTitle>
            <RightParagraph>As a Scout you will seek out new members for the Yuwipi Men, an underground movement
                organized to stop Cadillac Fairchild, CEO of Tigris Exploration, from launching a starcraft designed to
                develop and terraform Mars. <br/> <br/>
                Scouts receive 20% of the net purchase price for every Scout minted or traded by a collector they refer
                to Scoby Gold through a personal link associated with the Scout they are holding.<br/> <br/>
                Scouts also receive 5% of the net purchase price for every Scout minted or traded that was referred to a
                collector by a Scout they enrolled.
            </RightParagraph>
        </Right>
    </Container>
}

export default SoldoutCard

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 12px 18px;
  border-radius: 18px;
  display: flex;
  gap: 24px;
`
const BG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(91.35deg, rgba(216, 88, 188, 0.5) -3.59%, rgba(60, 0, 255, 0.5) 102.16%);
  opacity: 0.9;
  border: 1px solid rgba(255, 255, 255, 0.1);
  filter: blur(4px);
  backdrop-filter: blur(35px);
  z-index: 1;
  border-radius: 18px;
`
const Close = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  padding: 12px;
  z-index: 3;
`
const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  z-index: 2;
`
const LeftBtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`
const TopBtn = styled.button`
  padding: 12px;
  width: 120px;
  background: rgba(255, 255, 255, 0.43);
  opacity: 0.8;
  border: none;
  color: #fff;
  border-radius: 0px 8px 8px 0px;
  backdrop-filter: blur(12px);
`
const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  min-height: 150px;
  margin: 12px auto 12px auto;
  backdrop-filter: blur(20px);
  border-radius: 14px;
  padding: 12px;
  border: 1px solid;
  border-image-source: linear-gradient(111.13deg, rgba(255, 255, 255, 0.61) 2.04%, rgba(252, 252, 252, 0.11) 100%);
  background: linear-gradient(91.28deg, rgba(255, 255, 255, 0.25) -4.88%, rgba(255, 255, 255, 0.145) -4.87%, rgba(93, 91, 133, 0.1175) 105.19%);
`
const Image = styled.img`
  width: 50%;
`
const CardTitle = styled.span`
  color: #fff;
  font-size: 18px;
  font-family: "TTNormsMedium";
`
const ProfileContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: auto;
  align-items: flex-start;
`
const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const ViewWebsiteBtn = styled.button`
  width: 120px;
  cursor: pointer;
  padding: 12px;
  background: #FFC800;
  color: #09073A;
  font-size: 14px;
  font-family: "TTNormsBold";
  margin: 12px auto auto auto;
  border: none;
  border-radius: 12px;
`
const Paragraph = styled.p`
  font-size: 14px;
  font-family: "TTNormsRegular";
  color: #fff;
`
const BoldText = styled.span`
  font-size: 14px;
  font-family: "TTNormsBold";
  color: #fff;
`
const Right = styled.div`
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const RightTitle = styled.h1`
  color: #fff;
  text-shadow: 0 0 7px #fff,
  0 0 16px #fff;
  font-size: 16px;
  text-align: start;
  font-family: "TTNormsBold";

`
const RightParagraph = styled.p`
  font-size: 12px;
  line-height: 140%;
  color: #fff;
  font-family: "TTNormsRegular";
  text-align: start;
`
