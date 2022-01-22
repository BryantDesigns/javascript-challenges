/*
  WRITE YOUR SOLUTION HERE
*/
const menu = [
  {
    name: 'Chicken parmesan',
    isVegetarian: false,
  },
  {
    name: 'Penne a la vodka',
    isVegetarian: true,
  },
  {
    name: 'Mushroom risotto',
    isVegetarian: true,
  },
  {
    name: 'Veal saltambuca',
    isVegetarian: false,
  },
  {
    name: 'Filet mignon',
    isVegetarian: false,
  },
];

const vegetarianMenuItems = (menu) => {
  const menuItems = document.querySelector('#menu');
  const veggyMenu = menu.filter((menuItem) => menuItem.isVegetarian === true);

  veggyMenu.forEach((menuItem) => {
    let course = document.createElement('li');
    course.textContent = menuItem.name;
    menuItems.appendChild(course);
  });
};

vegetarianMenuItems(menu);
