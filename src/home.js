import plate from './images/plate.png';

export default function createHome () {
  console.log('I am creating the home page!');
  
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
  const headerText = document.createTextNode("Ken's Kitchen");

  h1.appendChild(headerText);
  header.setAttribute('id', 'header');
  header.appendChild(icon);
  header.appendChild(h1);
  header.appendChild(icon2);

  // create information section for the home page
  const info = document.createElement('div');
  info.setAttribute('id', 'info');

  const description = document.createElement('div');
  const hours = document.createElement('div');
  const location = document.createElement('div');

  const descriptionText = document.createTextNode('Description');
  const hoursText = document.createTextNode('Hours');
  const locationText = document.createTextNode('Location');

  description.appendChild(descriptionText);
  hours.appendChild(hoursText);
  location.appendChild(locationText);

  info.appendChild(description);
  info.appendChild(hours);
  info.appendChild(location);

  body.appendChild(header);
  body.appendChild(info);
}