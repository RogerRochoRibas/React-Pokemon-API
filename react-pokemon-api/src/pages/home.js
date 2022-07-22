import { PokemonRender } from "../components/pokemonList";

const Home = (props) => {
  return (
    <div>
      <p>Hello!</p>
      <PokemonRender pokemon={props.pokemon}/>
    </div>
  );
};

export default Home;