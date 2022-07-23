import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import logo from "../src/images/pokemon-title.png";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    try {
      //1154
      let url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
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
      setPokemon(results);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <Router>
      <header>
        <img alt="logo" id="logo" src={logo} />
      </header>
      <Routes>
        <Route path="/" element={<Home pokemon={pokemon} />} />
      </Routes>
    </Router>
  );
}

export default App;
