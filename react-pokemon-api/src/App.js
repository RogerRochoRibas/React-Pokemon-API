import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemon(pokemon.results);
        console.log('pokemon1: ',pokemon.results)
      });
      console.log('pokemon2: ',pokemon.results)
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home pokemon={pokemon}/>} />
      </Routes>
    </Router>
  );
}

export default App;
