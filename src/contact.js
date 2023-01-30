import plate from './images/plate.png';
import ken from './images/ken.png';
import luna from './images/luna.png';
import sol from './images/sol.png';

export default function createContact () {
  console.log('I am creating the contact page!');

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
  const headerText = document.createTextNode("Contact Us");

  h1.appendChild(headerText);
  header.setAttribute('id', 'header');
  header.appendChild(icon);
  header.appendChild(h1);
  header.appendChild(icon2);

  // create information section for the home page
  const info = document.createElement('div');
  info.setAttribute('id', 'info');

  /* create contact cards */

  // manager contact card
  const manager = document.createElement('div');
  manager.classList.add('contact-item');

  const managerInfo = document.createElement('div');
  managerInfo.classList.add('contact-card');

  let name = document.createElement('h2');
  let nameText = document.createTextNode('Ken');
  name.appendChild(nameText);

  let managerContact = document.createElement('ul');

  let managerRole = document.createElement('li');
  let managerRoleText = document.createTextNode('Manager');
  managerRole.appendChild(managerRoleText);

  let managerNumber = document.createElement('li');
  let managerNumberText = document.createTextNode('555-555-5555');
  managerNumber.appendChild(managerNumberText);

  let managerEmail = document.createElement('li');
  let managerEmailText = document.createTextNode('ken@fakemail.com');
  managerEmail.appendChild(managerEmailText);

  managerContact.appendChild(managerRole);
  managerContact.appendChild(managerNumber);
  managerContact.appendChild(managerEmail);

  managerInfo.appendChild(name);
  managerInfo.appendChild(managerContact);

  const managerPhoto = new Image();
  managerPhoto.src = ken;

  manager.appendChild(managerInfo);
  manager.appendChild(managerPhoto);

  // chef chef card
  const chef = document.createElement('div');
  chef.classList.add('contact-item');

  const chefInfo = document.createElement('div');
  chefInfo.classList.add('contact-card');

  name = document.createElement('h2');
  nameText = document.createTextNode('Luna');
  name.appendChild(nameText);

  let chefContact = document.createElement('ul');

  let chefRole = document.createElement('li');
  let chefRoleText = document.createTextNode('Chef');
  chefRole.appendChild(chefRoleText);

  let chefNumber = document.createElement('li');
  let chefNumberText = document.createTextNode('555-555-5556');
  chefNumber.appendChild(chefNumberText);

  let chefEmail = document.createElement('li');
  let chefEmailText = document.createTextNode('luna@fakemail.com');
  chefEmail.appendChild(chefEmailText);

  chefContact.appendChild(chefRole);
  chefContact.appendChild(chefNumber);
  chefContact.appendChild(chefEmail);

  chefInfo.appendChild(name);
  chefInfo.appendChild(chefContact);

  const chefPhoto = new Image();
  chefPhoto.src = luna;

  chef.appendChild(chefInfo);
  chef.appendChild(chefPhoto);

  // waiter chef card
  const waiter = document.createElement('div');
  waiter.classList.add('contact-item');

  const waiterInfo = document.createElement('div');
  waiterInfo.classList.add('contact-card');

  name = document.createElement('h2');
  nameText = document.createTextNode('Sol');
  name.appendChild(nameText);

  let waiterContact = document.createElement('ul');

  let waiterRole = document.createElement('li');
  let waiterRoleText = document.createTextNode('Waiter');
  waiterRole.appendChild(waiterRoleText);

  let waiterNumber = document.createElement('li');
  let waiterNumberText = document.createTextNode('555-555-5557');
  waiterNumber.appendChild(waiterNumberText);

  let waiterEmail = document.createElement('li');
  let waiterEmailText = document.createTextNode('sol@fakemail.com');
  waiterEmail.appendChild(waiterEmailText);

  waiterContact.appendChild(waiterRole);
  waiterContact.appendChild(waiterNumber);
  waiterContact.appendChild(waiterEmail);

  waiterInfo.appendChild(name);
  waiterInfo.appendChild(waiterContact);

  const waiterPhoto = new Image();
  waiterPhoto.src = sol;

  waiter.appendChild(waiterInfo);
  waiter.appendChild(waiterPhoto);

  // append created name cards
  info.appendChild(manager);
  info.appendChild(chef);
  info.appendChild(waiter);

  body.appendChild(header);
  body.appendChild(info);
}