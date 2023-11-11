import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {

    const randomEmoji = () => {
        const choices = ["🤣", "😂", "😊", "❤", "😍", "😒", "😘"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);

    const addEmoji = () => {
        setEmojis(oldEmoji => [...oldEmoji, { id: uuid(), emoji: randomEmoji() }]);
    };

    // delete the emoji with specified id
    const deleteEmoji = (id) => {
        // use filter function based on the id
        setEmojis(prevEmojis => {
            // this will return an array of elements that does not match the passed id
            return prevEmojis.filter(e => e.id !== id)

        })
    }

    // Change all emojis to heart emoji
    const heartAllEmoji = () => {
        setEmojis(prevEmojis => {
            prevEmojis.map(e => {
                return { ...e, emoji: "❤" }
            })
        })
    }

    return (
        <div>
            {emojis.map((e) => (
                // adding id to each element
                /*
                react will warn if key, unique id, is missing
                can be ignored or use index as key but not a good idea
                fixed with adding key with uuid
                */

                // deleting clicked emoji
                /*
                onClick={deleteEmoji(e.id)}
                will run the function as soon as emoji is created, change to inline function
                each span of emoji have their own specific version of onClick with deleteEmoji function
                */
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={heartAllEmoji}>Make all hearts</button>
        </div>
    )
}