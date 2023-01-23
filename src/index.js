console.log('I am a console log statement!');

import './style.css';
import createHome from './home';

// window.onload is used to make sure page loads before trying to generate elements
window.onload = function() {
    createHome();
}