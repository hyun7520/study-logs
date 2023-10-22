function MouseOver() {
    console.log("Hovered")
}

export default function Clicker({ message, buttonText }) {

    const handleClick = () => {
        alert(message)
    }

    return (
        <div>
            <p onMouseOver={MouseOver}>Click The Button</p>
            {/* <button onClick={() => {
                alert(message)
            }}>{buttonText}</button> */}

            <button onClick={handleClick}>{buttonText}</button>
        </div >
    )
}