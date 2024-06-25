import type { NavItem } from '@bit-bazaar/shell-app.types.navigation';

export const storefrontNavItems: NavItem = {
  label: 'Store',
  path: '/',
  children: [
    {
      label: 'Products',
      path: '/products',
    },
  ],
};

export default storefrontNavItems;
