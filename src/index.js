console.log('I am a console log statement!');

import './style.css';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

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
            generateNavigation('home');
        });
    }

    if (tab !== 'menu') {
        menuButton.addEventListener('click', () => {
            erasePage();
            createMenu();
            generateNavigation('menu');
        });
    }
    
    if (tab !== 'contact') {
        contactButton.addEventListener('click', () => {
            erasePage();
            createContact();
            generateNavigation('contact');
        });
    }

    if (tab === 'home') {
        homeButton.classList.add('current_tab');
    }
    else if (tab === 'menu') {
        menuButton.classList.add('current_tab');
    }
    else {
        contactButton.classList.add('current_tab');
    }

}