import { useEffect } from "react";
export const SearchBar = (props) => {
  function filterPokemon(search) {
    if (search) {
      const filteredPokemon = props.pokemon.filter((e) => {
        return e.name.includes(search);
      });
      props.setCurrentPokemon(filteredPokemon);
    } else {
      const unfilteredPokemon = props.pokemon;
      props.setCurrentPokemon(unfilteredPokemon);
    }
  }

  useEffect(() => {
    props.setCurrentPokemon(props.pokemon);
  }, []);

  return (
    <div className="searchBar">
      <input
        type="text"
        spellCheck="false"
        placeholder="Search Pokémon"
        onChange={(e) => filterPokemon(e.target.value)}
      ></input>
    </div>
  );
};
