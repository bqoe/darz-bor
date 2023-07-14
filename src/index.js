import {createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import "./styles/index.scss"

const headerRoot = createRoot(document.getElementById('header'));
headerRoot.render(<Header />);

const footerRoot = createRoot(document.getElementById('footer'));
footerRoot.render(<Footer />);