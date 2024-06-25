import { Routes, Route } from 'react-router-dom';
import { ProductGalleryPage } from '@bit-bazaar/storefront.pages.product-gallery-page';
import { Layout } from './layout.js';

export function Storefront() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/products" element={<ProductGalleryPage />} />
      </Route>
    </Routes>
  );
}
