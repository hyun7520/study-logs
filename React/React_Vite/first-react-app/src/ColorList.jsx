// export default function ColorList({ colors }) {
//     const elements = [<p>Hello!</p>, <h1>Bye!</h1>, <input type="password" />]
//     return (
//         <div>
//             <p>Color List</p>
//             {elements}
//         </div>
//     )
// }

export default function ColorList({ colors }) {
    // for each color in colors, create an li
    // const lis = colors.map((color) => <li>{color}</li>)

    return (
        <div>
            <p>Color List</p>
            <ul>
                {colors.map((c) => (
                    <li style={{ color: c }}>{c}</li>
                ))}
            </ul>
        </div >
    );
}