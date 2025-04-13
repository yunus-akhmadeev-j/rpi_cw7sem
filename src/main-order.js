import HeaderComponent from './view-review/header-component.js';
import FooterComponent from './view-review/footer-component.js';
import {render, RenderPosition} from './framework/render.js';
import OrderPresenter from './presenter/order-presenter.js';


const headerContainer = document.querySelector('header');
const orderContainer = document.querySelector('.main');
const footerContainer = document.querySelector('footer');

render(new HeaderComponent(), headerContainer, RenderPosition.BEFOREBEGIN);
new OrderPresenter(orderContainer);  
render(new FooterComponent(), footerContainer);