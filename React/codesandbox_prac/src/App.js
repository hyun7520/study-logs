// tell webpack to include css files
import "./styles.css";

import Greeter from "./Greeter";
import Dog from "./Dog";
// import Die from "./Die";
// Create 
import DiceRolls from "./DiceRolls";

import RandomPokemon from "./RandomPokemon";

export default function App() {
    return (
        <div className="App">
            <Greeter />
            <Dog />
            <DiceRolls />
            <RandomPokemon />
        </div>
    );
}

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
