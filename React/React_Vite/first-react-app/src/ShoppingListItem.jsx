import PropTypes from "prop-types";

export default function ShoppingListItem({ item, quantity, completed }) {

    const styles = {
        color: completed ? "grey" : "red",
        textDecoration: completed ? "line-through" : "none"
    };

    return (
        <li style={styles}>
            {item} - {quantity}
        </li>
    );
}

ShoppingListItem.propTypes = {
    item: PropTypes.string,
    quantity: PropTypes.number,
    completed: PropTypes.bool
}

{/* <ul>
    {items.map(i =>
        <li key={i.id} style={{
            color: i.completed ? "grey" : "red",
            textDecoration: i.completed ? "line-trhough" : "none"
        }}>
            {i.item} - {i.quantity}
        </li>
    )}
</ul> */}