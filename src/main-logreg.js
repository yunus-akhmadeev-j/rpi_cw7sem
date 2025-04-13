import HeaderComponent from './view-review/header-component.js';
import FooterComponent from './view-review/footer-component.js';
import {render, RenderPosition} from './framework/render.js';
import LogRegPresenter from './presenter/logreg-presenter.js';


const headerContainer = document.querySelector('header');
const logregContainer = document.querySelector('.log-reg');
const footerContainer = document.querySelector('footer');

render(new HeaderComponent(), headerContainer, RenderPosition.BEFOREBEGIN);
new LogRegPresenter(logregContainer);  
render(new FooterComponent(), footerContainer);
