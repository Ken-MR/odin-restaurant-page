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

  const menu = [];

  function menuItem (itemName, itemDescription, itemPrice, itemImage, itemType) {
    this.itemName = itemName;
    this.itemDescription = itemDescription;
    this.itemPrice = itemPrice;
    this.itemImage = itemImage;
    this.itemType = itemType;  
  }

  // bacon menu item

  menu.push(new menuItem(
    'Bacon',
    'Two delicious skillet cooked slices; add two more for $1.5',
    '$2',
    bacon,
    'side',
    )
  )

  // egg menu item

  menu.push(new menuItem(
    'Scrambled Eggs',
    'Delectable fluffy eggs with chives',
    '$2',
    eggs,
    'side',
    )
  )

  // oatmeal menu item

  menu.push(new menuItem(
    'Oatmeal',
    'Steel cut oats mixed with a nut medley; add fruit for $1',
    '$2',
    oatmeal,
    'side',
    )
  )

  // pancakes menu item

  menu.push(new menuItem(
    'Pancakes',
    'Four delicious fluffy pancakes, served with syrup and fruit',
    '$6',
    pancakes,
    'entree',
    )
  )

  // waffles menu item

  menu.push(new menuItem(
    'Loaded Waffle',
    'A melt in your mouth waffle, served with fruit and whipped cream',
    '$6',
    waffles,
    'entree',
    )
  )

  // breakfast sandwich menu item

  menu.push(new menuItem(
    'Breakfast Sandwich',
    'Bacon, eggs, and sausage served on your choice of toast, muffin, or bagel ($1 extra)',
    '$5',
    sandwich,
    'entree',
    )
  )
  
  // english breakfast menu item

  menu.push(new menuItem(
    'English Breakfast',
    'A full English breakfast, including bacon, eggs, sausage, two slices of toast, hashbrown, and cup of beans',
    '$9',
    english,
    'entree',
    )
  )

  // valentine's toast menu item

  menu.push(new menuItem(
    'Valentine Toast',
    'A special treat for you and your special someone; two slices of toast including sunny side up eggs and bacon; available all through February',
    '$10',
    valentine,
    'entree',
    )
  )

  // orange juice menu item

  menu.push(new menuItem(
    'Orange Juice',
    'A glass of orange juice, tangy and guaranteed to quench a thirst',
    '$2',
    orange,
    'drink',
    )
  )

  // lemon-lime menu item

  menu.push(new menuItem(
    'Lemon-limeade',
    'Freshly squeezed lemon and lime in a delicious sour mix',
    '$2',
    lemon,
    'drink',
    )
  )

  // smoothie menu item

  menu.push(new menuItem(
    'Fruit Smoothie',
    'A mixed berry smoothie to excite your tastebuds',
    '$3',
    smoothie,
    'drink',
    )
  )

  /* End Menu Item Cards */

  info.appendChild(side);

  generateSection(info, menu, 'side');

  info.appendChild(entree);

  generateSection(info, menu, 'entree');

  info.appendChild(drink);

  generateSection(info, menu, 'drink');

  body.appendChild(header);
  body.appendChild(info);
}

function generateSection (info, menu, section) {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].itemType === section) {
      info.appendChild(generateMenuCard(
        menu[i].itemName, 
        menu[i].itemDescription, 
        menu[i].itemPrice, 
        menu[i].itemImage
      ));
    }
  }
}

function generateMenuCard(nameText, descriptionText, priceText, picture) {
  const card = document.createElement('div');
  card.classList.add('menu-item');

  let item = document.createElement('h3');
  let itemName = document.createTextNode(nameText);
  item.appendChild(itemName);

  let description = document.createElement('p');
  let itemDescription = document.createTextNode(descriptionText);
  description.appendChild(itemDescription);

  let price_image = document.createElement('div');
  let price = document.createElement('h3');
  let itemPrice = document.createTextNode(priceText);
  price.appendChild(itemPrice);

  const image = new Image();
  image.src = picture;

  price_image.classList.add('price-image');
  price_image.appendChild(price);
  price_image.appendChild(image);

  card.appendChild(item);
  card.appendChild(description);
  card.appendChild(price_image);
  return card;
}