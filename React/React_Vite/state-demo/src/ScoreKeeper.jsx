import { useState } from "react"

export default function ScoreKeeper() {

    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });

    /*
    react does no unneccessary rerenders, no change means no rerender
    even if the inside of the object is changed, react sees it as same object
    same object means no change, so react won't rerender
    */
    function increaseP1Score() {
        // create copy of the object using spread for react to recognize it as new value
        /*
        const newScores = {...scores, p1Score: scores.p1Score + 1};
        setScores(newScores);  
        */

        // it is better to use callback functions when new value depends on old values
        setScores(oldScores => {
            return { ...oldScores, p1Score: oldScores.p1Score + 1 }
        });
    }

    function increaseP2Score() {
        setScores(oldScores => {
            return { ...oldScores, p2Score: oldScores.p2Score + 1 }
        });
    }

    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 Player 1</button>
            <button onClick={increaseP2Score}>+1 Player 2</button>
        </div>
    )
}