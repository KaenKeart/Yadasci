import React, { useState } from "react";

function Cart() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} baht
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} baht
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
