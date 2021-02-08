import React from "react";

import { NavLink } from "react-router-dom";

import navImage from "../../assets/pokemon.png";

const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/"}>Pokémon App</NavLink>
      <img src={navImage} alt="" />
    </nav>
  );
};

export default Navbar;
