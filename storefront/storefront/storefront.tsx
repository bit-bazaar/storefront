import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductGalleryPage } from '@bit-bazaar/storefront.pages.product-gallery-page';

export function Storefront() {
  return (
    <div>
      <h1>Store</h1>
      <Routes>
        <Route path="products" element={<ProductGalleryPage />} />
      </Routes>
    </div>
  );
}
