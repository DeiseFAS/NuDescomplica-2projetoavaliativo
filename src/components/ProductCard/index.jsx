
import React from 'react';

import './ProductCard.css'; 

const ProductCard = ({ product, onAddToCart }) => {
  const { name, description, price,image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={`${name} Imagem`} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Preço: R${price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;
