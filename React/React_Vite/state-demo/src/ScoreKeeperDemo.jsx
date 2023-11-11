import { useState } from "react";

export default function ScoreKeeperDemo({ numPlayer = 3, target = 5 }) {

    // create array and fill with 0
    const [scores, setScores] = useState(new Array(numPlayer).fill(0));

    /*
    const incrementScore = (idx) => {
        setScores(prevScores => {
            const copy = [...prevScores];
            copy[idx] += 1;
            return copy;
        })
    }
    */

    // method using map
    const incrementScore = (idx) => {
        setScores(prevScores => {
            return prevScores.map((score, i) => {
                // if idx matches score + 1
                if (i === idx) return score += 1;
                // else return the unchange score
                return score;
            })
        })
    }

    const reset = () => {
        setScores(new Array(numPlayer).fill(0));
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return (
                        <li key={idx}>
                            Player {idx + 1} : {score}
                            <button onClick={() => incrementScore(idx)}>+1</button>
                            {/* if score reaches target display winner else none */}
                            {score >= target && "Winner"}
                        </li>
                    )
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div >
    )
}