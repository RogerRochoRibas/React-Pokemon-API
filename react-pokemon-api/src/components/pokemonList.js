import React,{useState} from "react";
import { Link } from "react-router-dom";
export const PokemonRender = ( props ) => {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  function pokemonList() {
    if (props.pokemon.length > 0) {
      let pokemonMounted = props.pokemon.map((element, index) => {
        fetch(element.url)
          .then((response) => response.json())
          .then((pokemon) => {
            setCurrentPokemon(pokemon)
            console.log('sprites',pokemon.sprites.other.dream_world.front_default);
          });
        return (
          <li key={index}>
            <Link to={`/pokemon/${parseInt(index) + 1}`}>
              <div className="pokemon-card">
                  <h3 className="pokemonName">{element.name}</h3>
                  <img className="pokemonImage" alt={element.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${index+1}.png`} />
                </div>
            </Link>
          </li>
        );
      });
      return pokemonMounted;
    }
  }

  const loading = <p>Loading...</p>;
  return (
    <>
      <h2 className="title">Pokemon</h2>
      <ul className="pokemonList">
        {props.pokemon.length > 0 ? pokemonList() : loading}
      </ul>
    </>
  );
};
