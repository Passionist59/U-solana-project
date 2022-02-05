import React, {useState} from "react";
import Navbar from "./components/Navbar";
import './App.scss'
import Hero from "./components/Hero";
import ChooseWallet from "./components/ChooseWallet";

function App() {
    const [connectWallet, setConnectWallet] = useState(false);
    const [chosenWallet, setChosenWallet] = useState(null)
    const GetChosenWallet = (wallet:any) => {
        console.log(wallet)
        setChosenWallet(wallet)
    }
    return (
        <div className="App">
            <Navbar setConnectWallet={setConnectWallet} chosenWallet={chosenWallet}/>
            <Hero/>
            {connectWallet && <ChooseWallet setConnectWallet={setConnectWallet} GetChosenWallet={GetChosenWallet}/>}
        </div>
    );
}

export default App;
