import React from 'react';
import './storefront.css';

const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 39.99 },
  { id: 3, name: 'Product 3', price: 49.99 },
];

const Storefront = () => {
  return (
    <div className="storefront">
      <header className="header">
        <h1>My Storefront</h1>
      </header>
      <main className="main">
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Storefront</p>
      </footer>
    </div>
  );
};

export default Storefront;
