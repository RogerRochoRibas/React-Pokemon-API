import { PokemonRender } from "../components/pokemonList";

const Home = (props) => {
  return (
    <div>
      <PokemonRender pokemon={props.pokemon}/>
    </div>
  );
};

export default Home;