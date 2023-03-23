import React, { useState } from "react";

function Cart() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const total = items.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <button onClick={() => addItem({ name: "Item", price: 10 })}>
        Add Item
      </button>
    </div>
  );
}

export default Cart;
