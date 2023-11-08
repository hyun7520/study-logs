import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(count + 1);
    }

    const addThree = () => {
        // increment one by one
        // count won't change, useState is not called yet - function is not rerendered
        /*
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        */

        // instead of setting count to +3
        // react will automatically pass first parameter as current value of the state
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
        </div>
    )
}