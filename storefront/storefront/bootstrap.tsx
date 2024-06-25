import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Storefront } from './storefront.js';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Storefront />
    </BrowserRouter>
  </StrictMode>
);
