import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";

import { getPokemonList } from "../actions/pokemonActions";

import Loading from "../components/loading/Loading";

import ReatPaginate from "react-paginate";

const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page = 1) => {
    dispatch(getPokemonList(page));
  };

  const showData = () => {
    if (pokemonList.loading) {
      return <Loading />;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return pokemonList.data.map((el) => {
        return (
          <div className="list" key={el.name}>
            <p>{el.name}</p>
            <Link to={`/pokemon/${el.name}`}>View</Link>
          </div>
        );
      });
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }
    return <p className="error">Unable to get data</p>;
  };
  return (
    <div>
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="e.g. bulbasaur"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => props.history.push(`/pokemon/${search}`)}
          >
            Search...
          </button>
        </form>
      </div>
      {showData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReatPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => fetchData(data.selected + 1)}
          containerClassName="pagination"
        ></ReatPaginate>
      )}
    </div>
  );
};

export default PokemonList;
