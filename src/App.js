import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Pokemon from "./containers/Pokemon";
import PokemonList from "./containers/PokemonList";

import "./App.css";

const App = () => {
  return (
    <div>
  <Navbar />
      <Switch>
        <Route exact path={"/"} component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
};

export default App;
