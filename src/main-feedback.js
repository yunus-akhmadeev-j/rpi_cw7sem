import HeaderComponent from './view-review/header-component.js';
import FooterComponent from './view-review/footer-component.js';
import {render, RenderPosition} from './framework/render.js';
import FeedBackPresenter from './presenter/feedback-presenter.js';


const headerContainer = document.querySelector('header');
const feedbackContainer = document.querySelector('.main');
const footerContainer = document.querySelector('footer');

render(new HeaderComponent(), headerContainer, RenderPosition.BEFOREBEGIN);
new FeedBackPresenter(feedbackContainer);  
render(new FooterComponent(), footerContainer);