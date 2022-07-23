import { Link } from "react-router-dom";
export const PokemonRender = (props) => {
  function pokemonDisplay() {
    let pokemonList = [];
    pokemonList = props.currentPokemon;
    if (pokemonList.length === 0) {
      pokemonList = props.pokemon
    }
    let pokemonMounted = pokemonList.map((element) => {
      return (
        <li key={element.id}>
          <Link to={`/pokemon/${element.id}`}>
            <div className="pokemon-card">
              <h4 className="pokemonName">{element.name}</h4>
              <img
                className="pokemonImage"
                alt={element.name}
                src={element.sprites.front_default}
              />
              <p className="pokemonNumber">#{element.id}</p>
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
