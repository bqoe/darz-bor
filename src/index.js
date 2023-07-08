import "./styles/index.scss"
import 'bootstrap'

let headerElement = document.querySelector("header")

document.addEventListener("scroll", () => {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 1) {
        headerElement.classList.add('background-header');
    } else {
        headerElement.classList.remove('background-header');
    }
    
})

if (screen.width < 770) {
    let dropdownElement = document.querySelector('a.menu-trigger');
    
}