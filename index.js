const sidebarItems = [
  { id: 0, to: '/main/dashboard', title: 'Dashboard', allowedRoles: ['ALL'] },
  {
    id: 1,
    to: '/main/orders',
    title: 'Orders',
    allowedRoles: ['TRADER', 'ADMIN'],
  },
  { id: 2, to: '/main/funds', title: 'Funds', allowedRoles: ['ALL'] },
  {
    id: 3,
    to: '/main/categories',
    title: 'Categories',
    allowedRoles: ['TRADER'],
  },
  { id: 4, to: '/main/wallets', title: 'Wallets', allowedRoles: [''] },
  {
    id: 5,
    to: '/main/exchanges',
    title: 'Exchanges',
    allowedRoles: ['TRADER'],
  },
  { id: 6, to: '/main/banks', title: 'Banks', allowedRoles: ['ALL'] },
  { id: 7, to: '/main/cryptos', title: 'Cryptos', allowedRoles: ['TRADER'] },
  {
    id: 8,
    to: '/main/currencies',
    title: 'Currencies',
    allowedRoles: ['TRADER'],
  },
  { id: 9, to: '/main/reports', title: 'Reports', allowedRoles: [''] },
];

const userRoles = [''];

const filter = sidebarItems.filter((item) =>
  item.allowedRoles.some((x) => userRoles.some((role) => role === x))
);

console.log(filter);
