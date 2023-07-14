import {createRoot } from 'react-dom/client';
import header from './components/header';
import footer from './components/footer';
import "./styles/index.scss"

const headerRoot = createRoot(document.getElementById('header'));
headerRoot.render(<header />);

const footerRoot = createRoot(document.getElementById('footer'));
footerRoot.render(<footer />);