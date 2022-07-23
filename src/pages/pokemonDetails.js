import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export const PokemonDetails = () => {
  const [details, setDetails] = useState({
    height: 0,
    id: 0,
    name: "",
    types: [
      {
        type: {
          name: "",
        },
      },
    ],
    abilities: [
      {
        ability: {
          name: "",
        },
      },
    ],
    stats: [
      {
        base_stat: 0,
        stat: {
          name: "",
        },
      },
    ],
  });
  const params = useParams();

  async function fetchPokemonDetails(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setDetails(data);
  }

  useEffect(() => {
    fetchPokemonDetails(params.id);
  }, []);

  let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params.id}.png`;
  return (
    <div className="pokemonDetails">
      <h2>
        #{details.id} <span>{details.name}</span>
      </h2>
      <div className="pokemonDetailsTypes">
        {details.types.map((type) => {
          return (
            <p className="type" id={type.type.name}>
              {type.type.name}
            </p>
          );
        })}
      </div>
      <img src={image} />
      <h3>Size</h3>
      <div className="detailsInfoContainer">
        <span className="detailsInfo narrow">
          <p>Height: {details.height / 10} m</p>
        </span>
        <span className="detailsInfo">
          <p>Weight: {details.weight / 10} kg</p>
        </span>
      </div>
      <h3>Abilities</h3>
      <div className="detailsInfoContainer">
        {details.abilities.map((ability) => {
          return (
            <p className="detailsInfo ability" id={ability.ability.name}>
              {ability.ability.name}
            </p>
          );
        })}
      </div>
      <h3>Stats</h3>
      <div className="detailsInfoContainer">
        {details.stats.map((stat) => {
          return (
            <div className="detailsInfo ability" id={stat.stat.name}>
              <p> {stat.stat.name} </p>
              <p> {stat.base_stat}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
