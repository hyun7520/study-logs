import { useState } from "react";

export default function ScoreKeeperPrac({ numPlayers = 10, target = 3 }) {

    const [scores, setScore] = useState(new Array(numPlayers.length).fill(0));

    const incrementScore = (idx) => {
        setScore(prevScores => {
            return prevScores.map((scores, i) => {
                if (i === idx) return scores += 1;
                return scores;
            })
        })
    }

    const resetScores = () => {
        setScore(new Array(numPlayers.length).fill(0));
    }

    return (
        <div>
            <ul>
                {scores.map((idx) => {
                    return (
                        <li key={idx}>
                            Player {idx + 1}
                            <button onClick={() => incrementScore(idx)}>+1</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={resetScores}>Reset</button>
        </div>
    )
}