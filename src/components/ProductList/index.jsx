
import React from 'react';
import ProductCard from '../ProductCard';
import productsData from '../../server/productsData';

import './ProductList.css';
const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
