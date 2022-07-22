import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import logo from "../src/images/pokemon-title.png"
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1154')
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemon(pokemon.results);
        console.log('pokemon1: ',pokemon.results)
      });
  }, []);

  function loadMorePokemon() {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=${pokemon.length}`)
        .then((response) => response.json())
        .then((newPokemon) => {
          let morePokemon = [...pokemon];
          morePokemon.push(...newPokemon.results);
          setPokemon(morePokemon);
        });
    
    console.log('pokemon2: ',pokemon)
  }
  window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadMorePokemon();
    }
  };
  return (
    <Router>
    <header>
      <img alt="logo" id="logo" src={logo} />
    </header>
      <Routes>
        <Route path="/" element={<Home pokemon={pokemon}/>} />
      </Routes>
    </Router>
  );
}

export default App;
