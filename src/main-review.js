import HeaderComponent from './view-review/header-component.js';
import FooterComponent from './view-review/footer-component.js';
import {render, RenderPosition} from './framework/render.js';
import ReviewsPresenter from './presenter/review-presenter.js';


const headerContainer = document.querySelector('header');
const reviewsContainer = document.querySelector('.main');
const footerContainer = document.querySelector('footer');

render(new HeaderComponent(), headerContainer, RenderPosition.BEFOREBEGIN);
new ReviewsPresenter(reviewsContainer);  
render(new FooterComponent(), footerContainer);