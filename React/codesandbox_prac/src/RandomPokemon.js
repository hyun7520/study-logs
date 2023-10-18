import "./RandomPokemon.css"

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png

export default function RandomPokemon() {
    const num = Math.floor(Math.random() * 151) + 1;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`
    return (
        <div className="RandomPokemon">
            <h1>Pokemon #{num}</h1>
            <img src={image} alt="" />
        </div >
    )
}