import "./DiceRoll.css"

import Die from "./Die";

export default function DiceRolls() {
    return (
        <div>
            <h1 className="DieRoll">Dice Roll</h1>
            <Die />
            <Die />
            <Die />
        </div>
    )
}