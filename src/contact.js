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

  const staff = [];

  function staffmember (staffName, staffRole, staffNumber, staffEmail, staffPicture) {
    this.staffName = staffName;
    this.staffRole = staffRole;
    this.staffNumber = staffNumber;
    this.staffEmail = staffEmail;
    this.staffPicture = staffPicture;  
  }

  // manager contact card

  staff.push(new staffmember(
      'Ken',
      'Manager',
      '555-555-5555',
      'ken@fakemail.com',
      ken,
    )
  )

  // chef chef card

  staff.push(new staffmember(
      'Luna',
      'Chef',
      '555-555-5556',
      'luna@fakemail.com',
      luna,
    )
  )

  // waiter chef card

  staff.push(new staffmember(
      'Sol',
      'Waiter',
      '555-555-5557',
      'sol@fakemail.com',
      sol,
    )
  )

  // append created name cards

  for (let i = 0; i < staff.length; i++) {
    info.appendChild(
      generateContactCard (staff[i].staffName, staff[i].staffRole, staff[i].staffNumber, staff[i].staffEmail, staff[i].staffPicture
    ));
  }

  body.appendChild(header);
  body.appendChild(info);
}

function generateContactCard (nameText, roleText, numberText, emailText, picture) {
  const card = document.createElement('div');
  card.classList.add('contact-item');

  const roleInfo = document.createElement('div');
  roleInfo.classList.add('contact-card');

  let name = document.createElement('h2');
  let staffName = document.createTextNode(nameText);
  name.appendChild(staffName);

  let contactInfo = document.createElement('ul');

  let role = document.createElement('li');
  let staffRole = document.createTextNode(roleText);
  role.appendChild(staffRole);

  let number = document.createElement('li');
  let staffNumber = document.createTextNode(numberText);
  number.appendChild(staffNumber);

  let email = document.createElement('li');
  let staffEmail = document.createTextNode(emailText);
  email.appendChild(staffEmail);

  contactInfo.appendChild(role);
  contactInfo.appendChild(number);
  contactInfo.appendChild(email);

  roleInfo.appendChild(name);
  roleInfo.appendChild(contactInfo);

  const photo = new Image();
  photo.src = picture;

  card.appendChild(roleInfo);
  card.appendChild(photo);

  return card;
}