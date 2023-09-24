import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <BurgerIngredients />
    </div>
  );
}

export default App;
