import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { CandyMachineAccount } from "./candy-machine";
import { CircularProgress } from "@material-ui/core";
import { GatewayStatus, useGateway } from "@civic/solana-gateway-react";
import { useEffect, useState } from "react";
import {
  whitelistSettings,
  publicSaleSettings,
  mintPanic,
} from "./userSettings";
import { toDate } from "./utils";

export const CTAButton = styled(Button)`
 width: 100%;
 font-size: 14px;
 font-family: "TTNormsBold";
  cursor: pointer;
  max-width: 200px;
  font-size: 14px;
  font-family: "TTNormsBold";
  color: #fff;
  border-radius: 8px;
  padding: 8px 12px;
  transition: all ease-in-out .5s;
  background: linear-gradient(94.35deg, rgba(216, 88, 188, 0.5) -3.59%, rgba(60, 0, 255, 0.5) 102.16%);
  border: none;
  &:hover {
    transform: scale(1.08);
  }
`; // add your styles here

export const MintButton = ({
  onMint,
  candyMachine,
  isMinting,
}: {
  onMint: () => Promise<void>;
  candyMachine: CandyMachineAccount | undefined;

  isMinting: boolean;
}) => {
  const { requestGatewayToken, gatewayStatus } = useGateway();
  const [clicked, setClicked] = useState(false);
  const whitelistStartDate = toDate(whitelistSettings.startDate)?.getTime();
  const whitelistEndDate = toDate(whitelistSettings.endDate)?.getTime();
  const publicMintStart = toDate(publicSaleSettings.startDate)?.getTime();
  const publicMintEnd = toDate(publicSaleSettings.endDate)?.getTime();

  function whiteListSaleCheck() {
    if (
      whitelistSettings.enabled &&
      whitelistStartDate &&
      whitelistEndDate &&
      Date.now() > whitelistStartDate &&
      Date.now() < whitelistEndDate
    ) {
      return true;
    } else {
      return false;
    }
  }

  let WhitelistMintActive = whiteListSaleCheck();
  console.log("is Whitelist Sale Active? " + whiteListSaleCheck());

  function publicSaleCheck() {
    if (publicMintStart && publicMintEnd) {
      if (Date.now() > publicMintStart && Date.now() < publicMintEnd) {
        return true;
      } else {
        return false;
      }
    } else if (publicMintStart) {
      if (Date.now() > publicMintStart) {
        return true;
      } else {
        return false;
      }
    }
  }

  let PublicMintActive = publicSaleCheck();

  console.log("is public sale live? " + publicSaleCheck());

  console.log(
    candyMachine?.state.isSoldOut,
    isMinting,
    WhitelistMintActive || PublicMintActive,
    !candyMachine?.state.isActive
  );

  useEffect(() => {
    if (gatewayStatus === GatewayStatus.ACTIVE && clicked) {
      console.log("Minting");
      onMint();
      setClicked(false);
    }
  }, [gatewayStatus, clicked, setClicked, onMint]);
  return (
    <CTAButton
      className="minting-button"
      disabled={
        candyMachine?.state.isSoldOut ||
        isMinting ||
        mintPanic.enabled ||
        !(WhitelistMintActive || PublicMintActive)
      }
      onClick={async () => {
        setClicked(true);
        if (candyMachine?.state.isActive && candyMachine?.state.gatekeeper) {
          console.log("gatekeeper active");
          if (gatewayStatus === GatewayStatus.ACTIVE) {
            console.log(gatewayStatus + GatewayStatus.ACTIVE);
            setClicked(true);
          } else {
            console.log("requeting token");
            let token = await requestGatewayToken();
            console.log(token);
          }
        } else {
          await onMint();
          setClicked(false);
        }
      }}
      variant="contained"
    >
      <div className="mint-button-text">
        {candyMachine?.state.isSoldOut ? (
          "SOLD OUT"
        ) : isMinting ? (
          <CircularProgress />
        ) : mintPanic.enabled ? (
          "Mint Paused"
        ) : (
          "MINT"
        )}
      </div>
    </CTAButton>
  );
};
