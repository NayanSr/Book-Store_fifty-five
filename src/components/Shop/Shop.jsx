// import React from "react";
import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Book from "../Book/Book";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {books.map((book) => (
          <Book
            key={book.title}
            book={book}
            handelAddToCart={handelAddToCart}
          ></Book>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
