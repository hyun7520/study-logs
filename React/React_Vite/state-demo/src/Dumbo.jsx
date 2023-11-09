import { useState } from "react";

function generateGameBoard() {
    // create 5000 length array
    console.log("Making the new Game Board");
    return Array(5000);
}

export default function Dumbo() {

    /*
    every time state rerenders generateGameBoard function will run
    for now it creates 5000 array everytime button is clicked
    but with more complex functions, this will be a waste of resources
    */
    // const [board, setBoard] = useState(generateGameBoard());

    /*
    By passing just the name of the function, 
    react automatically runs it once and ingnore the function in future rerenders
    */
    const [board, setBoard] = useState(generateGameBoard);

    return (
        <div>
            <button onClick={() => setBoard("Hello")}>Click to Change State</button>
        </div>
    )
}