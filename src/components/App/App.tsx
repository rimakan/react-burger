import React from "react";
import s from "./App.module.scss";
import AppHeader from "../AppHeader/AppHeader";
import StellarBurgerMainPage from "../pages/StellarBurgerMainPage";

function App() {
  return (
    <div className={s.App}>
      <main>
        <AppHeader />
        <StellarBurgerMainPage />
      </main>
    </div>
  );
}

export default App;
