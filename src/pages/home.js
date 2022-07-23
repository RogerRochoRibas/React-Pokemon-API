import { useState } from "react";
import { PokemonRender } from "../components/pokemonRender";
import { SearchBar } from "../components/searchBar";
import { FilterType } from "../components/filterType";
const Home = (props) => {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  return (
    <div>
      <SearchBar
        pokemon={props.pokemon}
        setCurrentPokemon={setCurrentPokemon}
      />
      <FilterType
        pokemon={props.pokemon}
        setCurrentPokemon={setCurrentPokemon}
      />
      <PokemonRender currentPokemon={currentPokemon} pokemon={props.pokemon} />
    </div>
  );
};

export default Home;
