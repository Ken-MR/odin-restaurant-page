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

  const info = document.createElement('div');
  info.setAttribute('id', 'info');

  // description section
  const description = document.createElement('div');
  description.classList.add('home-item');
  const descriptionText =
  document.createTextNode("Come to the best diner in the state! Our top notch staff will serve you a breakfast you'll never forget! We guarantee you'll want to come back again and again!");
  let name = document.createElement('h2');
  let nameText = document.createTextNode('Ken');
  name.appendChild(nameText);

  description.appendChild(descriptionText);
  description.appendChild(name);

  // hours section
  const hours = document.createElement('div');
  hours.classList.add('home-item');

  const hoursHeader = document.createElement('h2');
  const hoursHeaderText = document.createTextNode('Hours');
  hoursHeader.appendChild(hoursHeaderText);

  const dateList = document.createElement('ul');

  const sunday = document.createElement('li');
  const sundayText = document.createTextNode('Sunday: 8am - 5pm');
  sunday.appendChild(sundayText);

  const monday = document.createElement('li');
  const mondayText = document.createTextNode('Monday: Closed');
  monday.appendChild(mondayText);

  const tuesday = document.createElement('li');
  const tuesdayText = document.createTextNode('Tuesday: 6am - 2pm');
  tuesday.appendChild(tuesdayText);

  const wednesday = document.createElement('li');
  const wednesdayText = document.createTextNode('Wednesday: 6am - 2pm');
  wednesday.appendChild(wednesdayText);

  const thursday = document.createElement('li');
  const thursdayText = document.createTextNode('Thursday: 6am - 2pm');
  thursday.appendChild(thursdayText);

  const friday = document.createElement('li');
  const fridayText = document.createTextNode('Friday: 6am - 4pm');
  friday.appendChild(fridayText);

  const saturday = document.createElement('li');
  const saturdayText = document.createTextNode('Saturday: 8am - 4pm');
  saturday.appendChild(saturdayText);

  dateList.appendChild(sunday);
  dateList.appendChild(monday);
  dateList.appendChild(tuesday);
  dateList.appendChild(wednesday);
  dateList.appendChild(thursday);
  dateList.appendChild(friday);
  dateList.appendChild(saturday);

  hours.appendChild(hoursHeader);
  hours.appendChild(dateList);

  // location section
  const location = document.createElement('div');
  location.classList.add('home-item');

  const locationHeader = document.createElement('h2');
  const locationHeaderText = document.createTextNode('Location');
  locationHeader.appendChild(locationHeaderText);

  const locationText = document.createTextNode('123 Main Street, Towson, Maryland');

  location.appendChild(locationHeader);
  location.appendChild(locationText);

  // append all sections to finish page generation
  info.appendChild(description);
  info.appendChild(hours);
  info.appendChild(location);

  body.appendChild(header);
  body.appendChild(info);
}