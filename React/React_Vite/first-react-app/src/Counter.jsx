// useState lets you add state variable
import { useState } from "react";

export default function Counter() {

    // let num = 0;

    const incrementNum = () => {

        setNum(num + 1);
        // num is not updated here,
        // it will be updated when useState is called
        console.log(`num: ${num}`);
    }


    // this updates num but dom won't show updated num
    // react needs to know when to call function again to update view
    /*
    const incrementNum = () => {
        num += 1;
        console.log(num);
    }
    */

    // num is set to 5, setNum function can change num
    const [num, setNum] = useState(5);

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