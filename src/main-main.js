import HeaderComponent from './view-review/header-component.js';
import FooterComponent from './view-review/footer-component.js';
import {render, RenderPosition} from './framework/render.js';
import MainPresenter from './presenter/main-presenter.js';


const headerContainer = document.querySelector('header');
const mainContainer = document.querySelector('.main');
const footerContainer = document.querySelector('footer');

render(new HeaderComponent(), headerContainer, RenderPosition.BEFOREBEGIN);
new MainPresenter(mainContainer);  
render(new FooterComponent(), footerContainer);