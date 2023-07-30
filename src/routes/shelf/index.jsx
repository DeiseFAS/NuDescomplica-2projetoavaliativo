
import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList';
import {Link } from 'react-router-dom';

import './Shelf.css'; 

const Shelf = () => {
  const [cartItems, setCartItems] = useState([]);

 
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

 
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <div className="app">
      <h1>Produtos Disponíveis</h1>
      <ProductList onAddToCart={addToCart} />
      <h2>Carrinho de Compras</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Preço: R${item.price.toFixed(2)}</p>
          </div>
        ))}

        <Link to="/cart">  
          <button>Ir para o Carrinho</button>
        </Link>
      </div>
    </div>
  );
};

export default Shelf;
