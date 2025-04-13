import HeaderComponent from './view-review/header-component.js';
import FooterComponent from './view-review/footer-component.js';
import {render, RenderPosition} from './framework/render.js';
import LibraryPresenter from './presenter/library-presenter.js';


const headerContainer = document.querySelector('header');
const libraryContainer = document.querySelector('.main');
const footerContainer = document.querySelector('footer');

render(new HeaderComponent(), headerContainer, RenderPosition.BEFOREBEGIN);
new LibraryPresenter(libraryContainer);  
render(new FooterComponent(), footerContainer);