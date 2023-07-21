import {createRoot } from 'react-dom/client';
import Header from './components/header';
import Footer from './components/footer';
import "./styles/index.scss"

const headerRoot = createRoot(document.getElementById('header'));
headerRoot.render(<Header />);

const footerRoot = createRoot(document.getElementById('footer'));
footerRoot.render(<Footer />);