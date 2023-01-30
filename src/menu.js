import plate from './images/plate.png';
import bacon from './images/bacon.png'
import sandwich from './images/breakfast-sandwich.png'
import eggs from './images/eggs.png'
import english from './images/english-breakfast.png'
import lemon from './images/lemon-lime.png'
import smoothie from './images/smoothie.png'
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
  document.createTextNode('Steel cut oats mixed with a nut medley; add fruit for $1');
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

  // pancakes menu item

  const pancake_card = document.createElement('div');
  pancake_card.classList.add('menu-item');

  itemName = document.createElement('h3');
  itemNameText = document.createTextNode('Pancakes');
  itemName.appendChild(itemNameText);

  description = document.createElement('p');
  descriptionText = 
  document.createTextNode('Four delicious fluffy pancakes, served with syrup and fruit');
  description.appendChild(descriptionText);

  price_image = document.createElement('div');
  price = document.createElement('h3');
  priceText = document.createTextNode('$6');
  price.appendChild(priceText);

  const pancakeImage = new Image();
  pancakeImage.src = pancakes;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(pancakeImage);

  pancake_card.appendChild(itemName);
  pancake_card.appendChild(description);
  pancake_card.appendChild(price_image);

  // waffles menu item

  const waffle_card = document.createElement('div');
  waffle_card.classList.add('menu-item');

  itemName = document.createElement('h3');
  itemNameText = document.createTextNode('Loaded Waffle');
  itemName.appendChild(itemNameText);

  description = document.createElement('p');
  descriptionText = 
  document.createTextNode('A melt in your mouth waffle, served with fruit and whipped cream');
  description.appendChild(descriptionText);

  price_image = document.createElement('div');
  price = document.createElement('h3');
  priceText = document.createTextNode('$6');
  price.appendChild(priceText);

  const waffleImage = new Image();
  waffleImage.src = waffles;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(waffleImage);

  waffle_card.appendChild(itemName);
  waffle_card.appendChild(description);
  waffle_card.appendChild(price_image);

  // breakfast sandwich menu item

  const sandwich_card = document.createElement('div');
  sandwich_card.classList.add('menu-item');

  itemName = document.createElement('h3');
  itemNameText = document.createTextNode('Breakfast Sandwich');
  itemName.appendChild(itemNameText);

  description = document.createElement('p');
  descriptionText = 
  document.createTextNode('Bacon, eggs, and sausage served on your choice of toast, muffin, or bagel ($1 extra)');
  description.appendChild(descriptionText);

  price_image = document.createElement('div');
  price = document.createElement('h3');
  priceText = document.createTextNode('$5');
  price.appendChild(priceText);

  const sandwichImage = new Image();
  sandwichImage.src = sandwich;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(sandwichImage);

  sandwich_card.appendChild(itemName);
  sandwich_card.appendChild(description);
  sandwich_card.appendChild(price_image); 
  
  // english breakfast menu item

  const english_card = document.createElement('div');
  english_card.classList.add('menu-item');

  itemName = document.createElement('h3');
  itemNameText = document.createTextNode('English Breakfast');
  itemName.appendChild(itemNameText);

  description = document.createElement('p');
  descriptionText = 
  document.createTextNode('A full English breakfast, including bacon, eggs, sausage, two slices of toast, hashbrown, and cup of beans');
  description.appendChild(descriptionText);

  price_image = document.createElement('div');
  price = document.createElement('h3');
  priceText = document.createTextNode('$9');
  price.appendChild(priceText);

  const englishImage = new Image();
  englishImage.src = english;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(englishImage);

  english_card.appendChild(itemName);
  english_card.appendChild(description);
  english_card.appendChild(price_image);

  // valentine's toast menu item

  const valentine_card = document.createElement('div');
  valentine_card.classList.add('menu-item');

  itemName = document.createElement('h3');
  itemNameText = document.createTextNode('Valentine Toast');
  itemName.appendChild(itemNameText);

  description = document.createElement('p');
  descriptionText = 
  document.createTextNode('A special treat for you and your special someone; two slices of toast including sunny side up eggs and bacon; available all through February');
  description.appendChild(descriptionText);

  price_image = document.createElement('div');
  price = document.createElement('h3');
  priceText = document.createTextNode('$10');
  price.appendChild(priceText);

  const valentineImage = new Image();
  valentineImage.src = valentine;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(valentineImage);

  valentine_card.appendChild(itemName);
  valentine_card.appendChild(description);
  valentine_card.appendChild(price_image);

  // orange juice menu item

  const orange_card = document.createElement('div');
  orange_card.classList.add('menu-item');

  itemName = document.createElement('h3');
  itemNameText = document.createTextNode('Orange Juice');
  itemName.appendChild(itemNameText);

  description = document.createElement('p');
  descriptionText = 
  document.createTextNode('A glass of orange juice, tangy and guaranteed to quench a thirst');
  description.appendChild(descriptionText);

  price_image = document.createElement('div');
  price = document.createElement('h3');
  priceText = document.createTextNode('$2');
  price.appendChild(priceText);

  const orangeImage = new Image();
  orangeImage.src = orange;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(orangeImage);

  orange_card.appendChild(itemName);
  orange_card.appendChild(description);
  orange_card.appendChild(price_image);

  // lemon-lime menu item

  const lemon_card = document.createElement('div');
  lemon_card.classList.add('menu-item');

  itemName = document.createElement('h3');
  itemNameText = document.createTextNode('Lemon-limeade');
  itemName.appendChild(itemNameText);

  description = document.createElement('p');
  descriptionText = 
  document.createTextNode('Freshly squeezed lemon and lime in a delicious sour mix');
  description.appendChild(descriptionText);

  price_image = document.createElement('div');
  price = document.createElement('h3');
  priceText = document.createTextNode('$2');
  price.appendChild(priceText);

  const lemonImage = new Image();
  lemonImage.src = lemon;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(lemonImage);

  lemon_card.appendChild(itemName);
  lemon_card.appendChild(description);
  lemon_card.appendChild(price_image);  

  // smoothie menu item

  const smoothie_card = document.createElement('div');
  smoothie_card.classList.add('menu-item');

  itemName = document.createElement('h3');
  itemNameText = document.createTextNode('Fruit Smoothie');
  itemName.appendChild(itemNameText);

  description = document.createElement('p');
  descriptionText = 
  document.createTextNode('A mixed berry smoothie to excite your tastebuds');
  description.appendChild(descriptionText);

  price_image = document.createElement('div');
  price = document.createElement('h3');
  priceText = document.createTextNode('$3');
  price.appendChild(priceText);

  const smoothieImage = new Image();
  smoothieImage.src = smoothie;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(smoothieImage);

  smoothie_card.appendChild(itemName);
  smoothie_card.appendChild(description);
  smoothie_card.appendChild(price_image);  

  /* End Menu Item Cards */

  info.appendChild(side);
  info.appendChild(bacon_card);
  info.appendChild(egg_card);
  info.appendChild(oat_card);

  info.appendChild(entree);
  info.appendChild(pancake_card);
  info.appendChild(waffle_card);
  info.appendChild(sandwich_card);
  info.appendChild(english_card);
  info.appendChild(valentine_card); 

  info.appendChild(drink);
  info.appendChild(orange_card);  
  info.appendChild(lemon_card);  
  info.appendChild(smoothie_card);   

  body.appendChild(header);
  body.appendChild(info);
}