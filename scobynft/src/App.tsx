import React, { useState } from "react";
import "./App.css";
import { useMemo } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChooseWallet from "./components/ChooseWallet";
// import Minter from "./Minter";

// import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getMathWallet,
} from "@solana/wallet-adapter-wallets";


import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
// import { ThemeProvider, createTheme } from "@material-ui/core";
// const theme = createTheme({
//   palette: {
//     type: "dark",
//   },
// });

// const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
//   ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
//   : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

// const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
// const connection = new anchor.web3.Connection(rpcHost);

// const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

// const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSolletWallet(),
      getMathWallet(),
    ],
    []
  );

  // function toggleMenu() {
  //   const menu = document.getElementById("mobileNavContainer")!;
  //   menu.classList.toggle("open-menu");
  //   console.log("pressed");
  // }

  const [connectWallet, setConnectWallet] = useState(false);
  const [chosenWallet, setChosenWallet] = useState(null);
  const GetChosenWallet = (wallet: any) => {
    console.log(wallet);
    setChosenWallet(wallet);
  };
  return (
    <div className="App">
  
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
            
              
              <div>
              <Navbar
                setConnectWallet={setConnectWallet}
                chosenWallet={chosenWallet}
              />
              </div>

            
             
              <Hero />
              {connectWallet && (
                <ChooseWallet
                  setConnectWallet={setConnectWallet}
                  GetChosenWallet={GetChosenWallet}
                />
              )}
            
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};
export default App;
