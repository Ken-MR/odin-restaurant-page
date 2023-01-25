import plate from './plate.png';

export default function createMenu () {
  console.log('I am creating the menu page!');

  const content = document.getElementById('content');
  const body = document.createElement('div');
  const nav = document.createElement('div');

  body.setAttribute('id', 'body');
  nav.setAttribute('id', 'nav');

  content.appendChild(nav);
  content.appendChild(body);

  // create home page navigation bar
  const homeTab = document.createElement('div');
  const menuTab = document.createElement('div');
  const contactTab = document.createElement('div');

  const homeTabText = document.createTextNode('Home');
  const menuTabText = document.createTextNode('Menu');
  const contactTabText = document.createTextNode('Contact');

  homeTab.setAttribute('id', 'home');
  homeTab.classList.add('nav_button');

  menuTab.setAttribute('id', 'menu');
  menuTab.classList.add('nav_button');

  contactTab.setAttribute('id', 'contact');
  contactTab.classList.add('nav_button');

  homeTab.appendChild(homeTabText);
  menuTab.appendChild(menuTabText);
  contactTab.appendChild(contactTabText);

  nav.appendChild(homeTab);
  nav.appendChild(menuTab);
  nav.appendChild(contactTab);

  // create header for the home page
  const icon = new Image();
  const icon2 = new Image();
  icon.src = plate;
  icon2.src = plate;

  const header = document.createElement('div');
  const h1 = document.createElement('h1');
  const headerText = document.createTextNode("Menu");

  h1.appendChild(headerText);
  header.setAttribute('id', 'header');
  header.appendChild(icon);
  header.appendChild(h1);
  header.appendChild(icon2);

  // create information section for the menu page
  const info = document.createElement('div');
  info.setAttribute('id', 'info');

  const app = document.createElement('h2');
  const entree = document.createElement('h2');
  const drink = document.createElement('h2');

  const appText = document.createTextNode('Appetizers');
  const entreeText = document.createTextNode('Entrees');
  const drinkText = document.createTextNode('Drinks');

  app.appendChild(appText);
  app.classList.add('menu_header');
  entree.appendChild(entreeText);
  entree.classList.add('menu_header');
  drink.appendChild(drinkText);
  drink.classList.add('menu_header');

  /* Create Menu Item Cards */

  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const itemName = document.createElement('h3');
  const itemNameText = document.createTextNode('Placeholder');
  itemName.appendChild(itemNameText);

  const description = document.createElement('p');
  const descriptionText = document.createTextNode('Placeholder');
  description.appendChild(descriptionText);

  const price_image = document.createElement('div');
  const price = document.createElement('h3');
  const priceText = document.createTextNode('$X');
  price.appendChild(priceText);

  const menuImage = new Image();
  menuImage.src = plate;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(menuImage);

  menuItem.appendChild(itemName);
  menuItem.appendChild(description);
  menuItem.appendChild(price_image);

  /* End Menu Item Cards */

  info.appendChild(app);
  info.appendChild(menuItem);
  info.appendChild(entree);
  info.appendChild(drink);

  body.appendChild(header);
  body.appendChild(info);
}