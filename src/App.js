import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/home";
import logo from "../src/images/pokemon-title.png";
import { useEffect, useState } from "react";
import "./css/App.css";
import "./css/pokemonDisplay.css";
import "./css/typeFilter.css";
import "./css/pokemonDetails.css";
import { PokemonDetails } from "./pages/pokemonDetails";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=251`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };

  const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };

  const fetchPokemon = async () => {
    try {
      const data = await getPokemon();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      console.log(results);
      setPokemon(results);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <Router>
      <header>
        <Link to={`/React-Pokemon-API`}>
          <img alt="logo" id="logo" src={logo} />
        </Link>
      </header>
      <Routes>
        <Route path="/React-Pokemon-API" element={<Home pokemon={pokemon} />} />
        <Route
          path="/pokemon/:id"
          element={<PokemonDetails pokemon={pokemon} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
