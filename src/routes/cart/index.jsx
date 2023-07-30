import React, { useState, useEffect } from 'react';
import './Cart.css'; 
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

 
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

 
  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * getQuantityValue(item.quantity), 0);
  };

 
  const getQuantityValue = (quantity) => {
    return quantity || 1;
  };

  return (
    <div className="cart-page">
      <h1>Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">Preço: R${item.price.toFixed(2)}</p>
              <label>
                Quantidade:
                <input
                  type="number"
                  value={getQuantityValue(item.quantity)}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  min="1"
                />
              </label>
              <p className="subtotal">Subtotal: R${(item.price * getQuantityValue(item.quantity)).toFixed(2)}</p>
            </div>
          ))}
          <p className="total">Total da Compra: R${getTotal().toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
