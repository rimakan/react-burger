import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import StellarBurgerMainPage from "./components/pages/StellarBurgerMainPage";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <StellarBurgerMainPage />
    </div>
  );
}

export default App;
