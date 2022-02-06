import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ScobyWallet from "../assets/imgs/navbarLogo.png";
import Solflare from "../assets/imgs/solflare.png";
import Sollet from "../assets/imgs/sollet.png";
import Clover from "../assets/imgs/clover.png";
import Phantom from "../assets/imgs/phantom.png";
import { AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";
import { SetWallet } from "../store/actions";
import {useNavigate} from 'react-router-dom';
function ChooseWallet({ setConnectWallet, GetChosenWallet, SetWallet }) {
  const router = useNavigate()

  const solanaWeb3 = require('@solana/web3.js');
  const Wallets = [
    { name: "Scoby wallet", icon: ScobyWallet, href: "#", coins: 120 },
    {
      name: "Solflare",
      icon: Solflare,
      href: "https://solflare.com/",
      coins: 120,
    },
    {
      name: "Phantom",
      icon: Phantom,
      href: "https://phantom.app/",
      coins: 120,
    },
    {
      name: "Clover",
      icon: Clover,
      href: "https://clover.finance/",
      coins: 120,
    },
    { name: "Sollet", icon: Sollet, href: "#", coins: 120 },
  ];
  const [walletAddress, setWalletAddress] = useState(null);
  const connectWallet = async (wallet)=>{
    try {
      const { solana } = window;
      if (solana) {
        if(solana.isPhantom) {
            console.log('Phantom wallet found!');
          const response = await solana.connect();
          
          console.log('Connected with publick key:', response.publicKey.toString());
          setWalletAddress(response.publicKey.toString());
          GetChosenWallet(wallet);
          setConnectWallet(false);
          SetWallet(wallet);
          router('/marketplace/magicspore/1')
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Container>
      <BACKG></BACKG>
      <CloseBtn onClick={() => setConnectWallet(false)}>
        <AiOutlineClose />
      </CloseBtn>
      <ConnectWalletCard>
        <CardTitle>Connect Wallet</CardTitle>
        <CardContentContainer>
          {Wallets.map((wallet) => (
            <a>
              <Wallet
                onClick={() => {
                  connectWallet(wallet);
                }}
              >
                <WalletName>{wallet.name}</WalletName>
                <Walleticon src={wallet.icon} />
              </Wallet>
            </a>
          ))}
        </CardContentContainer>
      </ConnectWalletCard>
    </Container>
  );
}

export default connect(null, { SetWallet })(ChooseWallet);

const BACKG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 14.05%,
    rgba(255, 255, 255, 0.16) 100%
  );
  opacity: 0.8;
  filter: blur(30px);
  backdrop-filter: blur(30px);
  width: 100vw;
  height: 100vh;
  z-index: 3;
`;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 4;
`;
const CloseBtn = styled.button`
  z-index: 4;
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #0c0c0c;
  font-size: 14px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
const ConnectWalletCard = styled.div`
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  height: fit-content;
  max-height: 100%;
  background: linear-gradient(
    91.53deg,
    rgba(255, 255, 255, 0.224) 1.89%,
    rgba(255, 255, 255, 0.147) 103.72%
  );
  border: 1px solid rgba(242, 242, 242, 0.4);
  box-sizing: border-box;
  box-shadow: 1px 0px 5px 3px rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border-radius: 18px 18px 24px 24px;
`;
const CardTitle = styled.div`
  width: 100%;
  min-height: 70px;
  max-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  font-family: "TTNormsMedium";
  background: linear-gradient(
    91.53deg,
    rgba(255, 255, 255, 0.224) 1.89%,
    rgba(255, 255, 255, 0.147) 103.72%
  );
  border: 1px solid rgba(242, 242, 242, 0.4);
  box-sizing: border-box;
  box-shadow: 1px 0px 5px 3px rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border-radius: 18px 18px 24px 24px;
`;
const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  min-height: 100%;
  padding: 12px;
`;
const Wallet = styled.div`
  cursor: pointer;
  background: linear-gradient(
    91.53deg,
    rgba(255, 255, 255, 0.224) 1.89%,
    rgba(255, 255, 255, 0.147) 103.72%
  );
  border: 1px solid rgba(242, 242, 242, 0.5);
  box-sizing: border-box;
  box-shadow: 1px 0px 5px 3px rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  min-width: 100%;
  min-height: 40px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all ease-out 0.3s;

  &:hover {
    transform: scale(1.08);
  }
`;
const WalletName = styled.span`
  font-size: 18px;
  color: #fff;
  font-family: "TTNormsMedium";
`;
const Walleticon = styled.img`
  width: 32px;
  height: 32px;
`;
