console.log('I am a console log statement!');

import './style.css';
import createHome from './home';

// window.onload is used to make sure page loads before trying to generate elements
window.onload = function() {
    createHome();
    generateNavigation('home');
}

function erasePage() {
    console.log('I am erasing the page!');
    let content = document.getElementById('content');
    while (content.lastChild) {
        content.removeChild(content.lastChild);
    }
}

function generateNavigation (tab) {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const contactButton = document.getElementById('contact');

    if (tab !== 'home') {
        homeButton.addEventListener('click', () => {
            erasePage();
            createHome();
            console.log('I made the home page!');
            generateNavigation('home');
        });
    }

    if (tab !== 'menu') {
        menuButton.addEventListener('click', () => {
            erasePage();
            // createMenu(); using createHome for testing purposes
            createHome();
            console.log('I made the menu page!');
            generateNavigation('menu');
        });
    }
    
    if (tab !== 'contact') {
        contactButton.addEventListener('click', () => {
            erasePage();
            // createContact(); using createHome for testing purposes
            createHome();
            console.log('I made the contact page!');
            generateNavigation('contact');
        });
    }

}