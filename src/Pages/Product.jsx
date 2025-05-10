import React from 'react';
import { Link } from 'react-router-dom';
import productsData from './productsData';
import '../App.css'; // ✅ Correct relative path

function Product() {
  const localProducts = JSON.parse(localStorage.getItem('localProducts')) || [];
  const allProducts = [...productsData, ...localProducts];

  return (
    <>
      <div className="product-header">Product Page</div>
      <Link to="/Create_Product" className="create-link">Create Product</Link>

      <div className="product-container">
        <h1>Product Showcase (Local JSON)</h1>
        <div className="product-grid">
          {allProducts.map(product => (
            <div key={product.id} className="product-card">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
              <h3>{product.title}</h3>
              <p>{product.description.slice(0, 60)}...</p>
              <p><b>Price:</b> ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
