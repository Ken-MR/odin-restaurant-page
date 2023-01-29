import plate from './images/plate.png';
import bacon from './images/bacon.png'
import sandwich from './images/breakfast-sandwich.png'
import eggs from './images/eggs.png'
import english from './images/english-breakfast.png'
import lemon from './images/lemon-lime.png'
import milkshake from './images/milkshake.png'
import oatmeal from './images/oatmeal.png'
import orange from './images/orange-juice.png'
import pancakes from './images/pancakes.png'
import valentine from './images/valentine-toast.png'
import waffles from './images/waffles.png'

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

  const side = document.createElement('h2');
  const entree = document.createElement('h2');
  const drink = document.createElement('h2');

  const sideText = document.createTextNode('Sides');
  const entreeText = document.createTextNode('Entrees');
  const drinkText = document.createTextNode('Drinks');

  side.appendChild(sideText);
  side.classList.add('menu_header');
  entree.appendChild(entreeText);
  entree.classList.add('menu_header');
  drink.appendChild(drinkText);
  drink.classList.add('menu_header');

  /* create menu item cards */

  // bacon menu item

  const bacon_card = document.createElement('div');
  bacon_card.classList.add('menu-item');

  let itemName = document.createElement('h3');
  let itemNameText = document.createTextNode('Bacon');
  itemName.appendChild(itemNameText);

  let description = document.createElement('p');
  let descriptionText = 
  document.createTextNode('Two delicious skillet cooked slices; add two more for $1.5');
  description.appendChild(descriptionText);

  let price_image = document.createElement('div');
  let price = document.createElement('h3');
  let priceText = document.createTextNode('$2');
  price.appendChild(priceText);

  const baconImage = new Image();
  baconImage.src = bacon;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(baconImage);

  bacon_card.appendChild(itemName);
  bacon_card.appendChild(description);
  bacon_card.appendChild(price_image);

  // egg menu item

  const egg_card = document.createElement('div');
  egg_card.classList.add('menu-item');

  itemName = document.createElement('h3');
  itemNameText = document.createTextNode('Scrambled Eggs');
  itemName.appendChild(itemNameText);

  description = document.createElement('p');
  descriptionText = 
  document.createTextNode('Delectable fluffy eggs with chives');
  description.appendChild(descriptionText);

  price_image = document.createElement('div');
  price = document.createElement('h3');
  priceText = document.createTextNode('$2');
  price.appendChild(priceText);

  const eggImage = new Image();
  eggImage.src = eggs;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(eggImage);

  egg_card.appendChild(itemName);
  egg_card.appendChild(description);
  egg_card.appendChild(price_image);

  // oatmeal menu item

  const oat_card = document.createElement('div');
  oat_card.classList.add('menu-item');

  itemName = document.createElement('h3');
  itemNameText = document.createTextNode('Oatmeal');
  itemName.appendChild(itemNameText);

  description = document.createElement('p');
  descriptionText = 
  document.createTextNode('Stee cut oats mixed with a nut medley; add fruit for $1');
  description.appendChild(descriptionText);

  price_image = document.createElement('div');
  price = document.createElement('h3');
  priceText = document.createTextNode('$2');
  price.appendChild(priceText);

  const oatImage = new Image();
  oatImage.src = oatmeal;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(oatImage);

  oat_card.appendChild(itemName);
  oat_card.appendChild(description);
  oat_card.appendChild(price_image);

  /* End Menu Item Cards */

  info.appendChild(side);
  info.appendChild(bacon_card);
  info.appendChild(egg_card);
  info.appendChild(oat_card);
  info.appendChild(entree);
  info.appendChild(drink);

  body.appendChild(header);
  body.appendChild(info);
}