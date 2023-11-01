import { useState } from "react";
import "./Toggler.css";

export default function ToggleCounter() {


    const toggleIsHappy = () => {
        // negate boolean
        setIsHappy(!isHappy);
    }

    const incrementCount = () => {
        setCount(count + 2);
    }

    // any value can be state
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);



    return (
        <div>
            <p className="Toggler" onClick={toggleIsHappy}>
                {isHappy ? ":)" : ":("}
            </p>
            <p>
                {count}
            </p>
            <button onClick={incrementCount}>
                +2
            </button>
        </div>
    )
}