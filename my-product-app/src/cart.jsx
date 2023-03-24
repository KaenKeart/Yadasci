import React, { useState } from "react";
import Footer from "./footer";
import Navbar from "./Navbar";
import "./cart.css";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function addItemToCart(item) {
    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + item.price);
  }

  function removeItemFromCart(index) {
    const newCartItems = [...cartItems];
    setTotalPrice(totalPrice - newCartItems[index].price);
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  }

  return (
    <div>
      <Navbar />
      <div id="Shopping">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 && <p>No items in cart</p>}
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeItemFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice}</p>
        <button onClick={() => addItemToCart({ name: "Item 1", price: 10 })}>
          Add Item 1
        </button>
        <button onClick={() => addItemToCart({ name: "Item 2", price: 20 })}>
          Add Item 2
        </button>
        <button onClick={() => addItemToCart({ name: "Item 3", price: 30 })}>
          Add Item 3
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default ShoppingCart;
