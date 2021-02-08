import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";

import Loading from "../components/loading/Loading";

import { getPokemon } from "../actions/pokemonActions";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, []);

  const showData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <div className="pokemon-wrapper">
          <div className="item">
            <h2>Sprites</h2>
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
          </div>
          <div className="item">
            <h2>Stats</h2>
            {pokeData.stats.map((el) => {
              return (
                <p key={el.stat.url}>
                  {el.stat.name} {el.base_state}
                </p>
              );
            })}
          </div>
          <div className="item">
            <h2>Abilities</h2>
            {pokeData.abilities.map((el) => {
              return <p key={el.ability.url}>{el.ability.name}</p>;
            })}
          </div>
        </div>
      );
    }

    if (pokemonState.loading) {
      return <Loading />;
    }

    if (pokemonState.errorMsg !== "") {
      return <p className="error">{pokemonState.errorMsg}</p>;
    }
    return <p className="error">Error getting Pokémon</p>;
  };

  return (
    <div className="pokemon">
      <h1>Hi, My name is {pokemonName}...</h1>
      {showData()}
    </div>
  );
};

export default Pokemon;
