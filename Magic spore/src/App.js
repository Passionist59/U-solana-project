import React, { useState } from "react";
import Hero from "./components/Hero";
import ChooseWallet from "./components/ChooseWallet";
import { Route, Routes } from "react-router-dom";
import Marketplace from "./components/MarketPlace/Marketplace";
import "./App.scss";
import SingleCollection from "./components/MarketPlace/Content/SingleCollection/SingleCollection";

function App() {
  const [connectWallet, setConnectWallet] = useState(false);
  const [chosenWallet, setChosenWallet] = useState(null);

  const GetChosenWallet = (wallet) => {
    console.log(wallet);
    setChosenWallet(wallet);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Hero
              setConnectWallet={setConnectWallet}
              chosenWallet={chosenWallet}
            />
          }
        />
        <Route path="/marketplace/*" exact element={<Marketplace />} />
        {/* <Route path="/marketplace/collection/:collectionID" exact element={<SingleCollection />} /> */}
      </Routes>
      {connectWallet && (
        <ChooseWallet
          setConnectWallet={setConnectWallet}
          GetChosenWallet={GetChosenWallet}
        />
      )}
    </div>
  );
}

export default App;
