import { Routes, Route } from 'react-router-dom';
import { ProductGalleryPage } from '@bit-bazaar/storefront.pages.product-gallery-page';

export function Storefront() {
  return (
    <div id="storefront">
      <Routes>
        <Route path="products" element={<ProductGalleryPage />} />
      </Routes>
    </div>
  );
}
