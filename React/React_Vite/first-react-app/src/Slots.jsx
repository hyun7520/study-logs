export default function Slots({ val1, val2, val3 }) {
    const isSame = val1 === val2 && val2 === val3;
    return (
        <div>
            <h1>
                {val1} {val2} {val3}
            </h1>
            <h2 style={{ color: isSame ? "green" : "red" }}>
                {isSame ? "You Win" : "You Lose"}
            </h2>
            {isSame && <h3>Congrats!</h3>}
        </div>
    )
}