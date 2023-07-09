import {createRoot } from 'react-dom';
import App from './components/App'

let headerElement = document.querySelector("header")

document.addEventListener("scroll", () => {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 1) {
        headerElement.classList.add('background-header');
    } else {
        headerElement.classList.remove('background-header');
    }
    
})

const footerRoot = createRoot(document.getElementById('footer'));
footerRoot.render(<App />)