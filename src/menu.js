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
  entree.appendChild(entreeText);
  drink.appendChild(drinkText);

  info.appendChild(app);
  info.appendChild(entree);
  info.appendChild(drink);

  body.appendChild(header);
  body.appendChild(info);
}