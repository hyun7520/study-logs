import { useState } from "react";

export default function Counter() {

    // let num = 0;

    const incrementNum = () => {
        setNum(num + 1);
    }

    const [num, setNum] = useState(5)

    return (
        <div>
            <p>
                The count is: {num}
            </p>
            <button onClick={incrementNum}>
                Increment
            </button>
        </div>
    )
}