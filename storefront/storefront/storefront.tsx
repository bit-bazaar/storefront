import { Routes, Route } from 'react-router-dom';
import { ProductGalleryPage } from '@bit-bazaar/storefront.pages.product-gallery-page';

export function Storefront() {
  return (
    <Routes>
      <Route path="/" element={<h1>Store</h1>} />
      <Route path="/products" element={<ProductGalleryPage />} />
    </Routes>
  );
}
