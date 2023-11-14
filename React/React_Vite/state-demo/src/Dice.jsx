import Die from "./Die"
import "./Dice.css"

export default function Dice({ dice, color }) {
    return (
        <section className="Dice">
            {dice.map((v, idx) => (
                <Die key={idx} val={v} color={color} />
            ))}
        </section>
    )
}

// expect int array = [1,2,3,4,5]
// iterate over each element and create die component