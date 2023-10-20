import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ items }) {

    return (
        <ul>
            {items.map((i) => (
                <ShoppingListItem
                    key={i.id}
                    item={i.item}
                    quantity={i.quantity}
                    completed={i.completed}

                // if names are the same, props can be sent using spread operator
                // key={i.id} {...i}
                />
            ))}
        </ul>
    )
}