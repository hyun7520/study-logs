const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4 },
    { id: 2, product: "Easy Bake Oven", price: 28 },
    { id: 3, product: "Peach Pie", price: 6.5 }
];

// Adding to an Array by making a copy
[...shoppingCart, { id: 4, product: "Coffe Mug", price: 7.99 }];

// Removing from an Array
shoppingCart.filter((item) => item.id !== 2);

// updating all elements in an array
shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLowerCase(),
    };
});

// modify particulat element
shoppingCart.map((item) => {
    if (item.id === 3) {
        return { ...item, price: 10.99 };
    } else {
        return item;
    }
})