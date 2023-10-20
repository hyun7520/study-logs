export default function PropertyListItem({ name, rating, price }) {

    return (
        <div className="Property">
            <h2>{name}</h2>
            <h3>${price} a night</h3>
            <h4>{rating}&#9734;</h4>
        </div>
    )
}

// { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 }