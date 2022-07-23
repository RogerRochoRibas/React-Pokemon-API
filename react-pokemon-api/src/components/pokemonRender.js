import { Link } from "react-router-dom";
export const PokemonRender = (props) => {
  function pokemonDisplay() {
    let pokemonList = [];
    pokemonList = props.currentPokemon;
    if (pokemonList.length == 0) {
      pokemonList = props.pokemon
    }
    let pokemonMounted = pokemonList.map((element, index) => {
      return (
        <li key={index}>
          <Link to={`/pokemon/${parseInt(index) + 1}`}>
            <div className="pokemon-card">
              <h4 className="pokemonName">{element.name}</h4>
              <img
                className="pokemonImage"
                alt={element.name}
                src={element.sprites.front_default}
              />
              <p className="pokemonNumber">#{index + 1}</p>
            </div>
          </Link>
        </li>
      );
    });
    return pokemonMounted;
  }

  return (
    <>
      <ul className="pokemonDisplay">{pokemonDisplay()}</ul>
    </>
  );
};
