import { Routes, Route } from 'react-router-dom';
import { ProductGalleryPage } from '@bit-bazaar/storefront.pages.product-gallery-page';
import { Container } from '@bit-bazaar/design.layout.container';

export function Storefront() {
  return (
    <Container maxWidth="md">
      <Routes>
        <Route path="products" element={<ProductGalleryPage />} />
      </Routes>
    </Container>
  );
}
