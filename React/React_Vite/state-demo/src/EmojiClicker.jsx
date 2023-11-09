import { useState } from "react"

export default function EmojiClicker() {

    const [emojis, setEmojis] = useState(["😊"]);

    const addEmoji = () => {
        setEmojis(oldEmoji => [...oldEmoji, "🤣"]);
    };


    return (
        <div>
            {emojis.map((e) => (
                // react will warn if key, unique id is missing
                // can be ignored or use index as key but not a good idea
                <span style={{ fontSize: "4rem" }}>{e}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}