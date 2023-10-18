import "./Die.css";

export default function Die() {
    const roll = Math.floor((Math.random() * 6)) + 1;
    // adding class to h2 will throw an error as javascript has it's own use
    // use className
    return (
        <h2 className="Die">Die Roll: {roll}</h2>
    )
}