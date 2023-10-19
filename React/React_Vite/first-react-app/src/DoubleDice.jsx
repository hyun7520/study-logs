// export default function Doubledice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;

//     // clean and more efficient than duplicating return with if, else phrase
//     const result = num1 === num2 ? "You Win" : "You Lose";

//     return (
//         <div>
//             <p>{result}</p>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     )
// }

// export default function Doubledice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;

//     return (
//         <div>
//             <p>{num1 === num2 ? "You Win" : "You Lose"}</p>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     )
// }

// export default function Doubledice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;

//     return (
//         <div>
//             <h2>Double Dice</h2>
//             {num1 === num2 ? <h3>You win!</h3> : null};
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     )
// }

export default function Doubledice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 === num2;

    // css dash -> font-size, in jsx ue camelcase
    const styles = { color: isWinner ? "green" : "red", fontSize: "40px" };

    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {/* if left side is false right won't run */}
            {/* if true, right will run */}
            {isWinner && <h3>You Win!</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )
}