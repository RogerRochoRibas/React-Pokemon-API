import { useState } from "react";

export const FilterType = (props) => {
  const [currentType, setCurrentType] = useState([]);
  function filterTypes(selectedType) {
    if (selectedType !== currentType) {
      const filteredByType = props.pokemon.filter((e) => {
        if (e.types.length === 1) {
          return e.types[0].type.name === selectedType;
        }
        if (e.types.length === 2) {
          return (
            e.types[0].type.name === selectedType ||
            e.types[1].type.name === selectedType
          );
        }
      });
      setCurrentType(selectedType);
      props.setCurrentPokemon(filteredByType);
    } else {
      const unfilteredPokemon = props.pokemon;
      props.setCurrentPokemon(unfilteredPokemon);
    }
  }

  return (
    <div className="filterBar">
      <button
        className="type-btn"
        id="normal"
        onClick={() => {
          filterTypes("normal");
        }}
      >
        Normal
      </button>
      <button
        className="type-btn"
        id="fire"
        onClick={() => {
          filterTypes("fire");
        }}
      >
        Fire
      </button>
      <button
        className="type-btn"
        id="water"
        onClick={() => {
          filterTypes("water");
        }}
      >
        Water
      </button>
      <button
        className="type-btn"
        id="grass"
        onClick={() => {
          filterTypes("grass");
        }}
      >
        Grass
      </button>
      <button
        className="type-btn"
        id="electric"
        onClick={() => {
          filterTypes("electric");
        }}
      >
        Electric
      </button>
      <button
        className="type-btn"
        id="ice"
        onClick={() => {
          filterTypes("ice");
        }}
      >
        Ice
      </button>
      <button
        className="type-btn"
        id="fighting"
        onClick={() => {
          filterTypes("fighting");
        }}
      >
        Fighting
      </button>
      <button
        className="type-btn"
        id="poison"
        onClick={() => {
          filterTypes("poison");
        }}
      >
        Poison
      </button>
      <button
        className="type-btn"
        id="ground"
        onClick={() => {
          filterTypes("ground");
        }}
      >
        Ground
      </button>
      <button
        className="type-btn"
        id="flying"
        onClick={() => {
          filterTypes("flying");
        }}
      >
        Flying
      </button>
      <button
        className="type-btn"
        id="psychic"
        onClick={() => {
          filterTypes("psychic");
        }}
      >
        Psychic
      </button>
      <button
        className="type-btn"
        id="bug"
        onClick={() => {
          filterTypes("bug");
        }}
      >
        Bug
      </button>
      <button
        className="type-btn"
        id="rock"
        onClick={() => {
          filterTypes("rock");
        }}
      >
        Rock
      </button>
      <button
        className="type-btn"
        id="ghost"
        onClick={() => {
          filterTypes("ghost");
        }}
      >
        Ghost
      </button>
      <button
        className="type-btn"
        id="dragon"
        onClick={() => {
          filterTypes("dragon");
        }}
      >
        Dragon
      </button>
      <button
        className="type-btn"
        id="dark"
        onClick={() => {
          filterTypes("dark");
        }}
      >
        Dark
      </button>
      <button
        className="type-btn"
        id="steel"
        onClick={() => {
          filterTypes("steel");
        }}
      >
        Steel
      </button>
      <button
        className="type-btn"
        id="fairy"
        onClick={() => {
          filterTypes("fairy");
        }}
      >
        Fairy
      </button>
    </div>
  );
};
