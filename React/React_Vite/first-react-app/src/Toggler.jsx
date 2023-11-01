import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {


    const toggleIsHappy = () => {
        // negate boolean
        setIsHappy(!isHappy);
    }

    // any value can be state
    const [isHappy, setIsHappy] = useState(true)

    return (
        <p className="Toggler" onClick={toggleIsHappy}>
            {isHappy ? ":)" : ":("}
        </p>
    )
}