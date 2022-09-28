import "./App.css";
import { useState } from "react";

function App() {


  const [pokemon, setPokemon] = useState("Blastoise");

  const searchPokemon = () => {
    const searchField = document.getElementById("poke-search");
    setPokemon(searchField.value);
  };

  return (
    <div className="App">
      <input type="search" id="poke-search" />
      <button onClick={searchPokemon}>Search</button>
      <div>
        <img src={require(`../public/assets/${pokemon}.png`)} alt="pokemon"/>
      </div>
    </div>
  );
}

export default App;
