import "./App.css";
import { useState } from "react";
import data from './components/data'

function App() {
  let discoveredPokemon = []

  const pokenames = data.map((poke) =>  discoveredPokemon.push(poke.name))
  
  const [pokemon, setPokemon] = useState("");

  const searchPokemon = () => {
    const searchField = document.getElementById("poke-search");
    setPokemon(searchField.value);
  };

  return (
    <div className="App">
      <input type="search" id="poke-search" placeholder="search the name of the pokemon, e.g: Pikachu"/>
      <button onClick={searchPokemon}>Search</button>
      <div>
        { discoveredPokemon.includes(`${pokemon}`) ?
          <img src={require(`../public/assets/${pokemon}.png`)} alt="pokemon"/> : <h2>Sorry, this pokemon hasn't been discovered</h2>
        }
      </div>
    </div>
  );
}

export default App;
