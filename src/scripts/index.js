// bootstrap
import '../styles/app.scss';
import '../styles/styles.css';
import 'bootstrap';
import 'regenerator-runtime';
// component
import './component/carousel-bar';
import './component/navbar';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('nav-bar').shadowRoot.querySelector('#hamburgerButton'),
  drawer: document.querySelector('nav-bar').shadowRoot.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
