import { Link } from "react-router-dom";
export const PokemonRender = ( props ) => {
  function pokemonList() {
    if (props.pokemon.length > 0) {
      let pokemonMounted = props.pokemon.map((element, index) => {
        let image = {}
        // Compensating for a jump in the sprites link numbers
        if (index > 898) {image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+9096}.png`}
        if (index <= 898) {image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${index+1}.png`}
        return (
          <li key={index}>
            <Link to={`/pokemon/${parseInt(index) + 1}`}>
              <div className="pokemon-card">
                  <h4 className="pokemonName">{element.name}</h4>
                  <img className="pokemonImage" alt={element.name} src={image} />
                <p className="pokemonNumber">#{index+1}</p>
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
      <ul className="pokemonList">
        {props.pokemon.length > 0 ? pokemonList() : loading}
      </ul>
    </>
  );
};
