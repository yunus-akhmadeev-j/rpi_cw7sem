import LibraryModel from '../model/library-model.js';
import LibraryComponent from '../view-library/library-component.js';
export default class LibraryPresenter {
    constructor(container) {
        this.container = container;
        this.model = new LibraryModel();
        this.component = new LibraryComponent();
        this._init();
    }

   
    _init() {
        this.renderLibrary();
    }
    renderLibrary() {
        const library = this.model.getLibrary();
        this.container.appendChild(this.component.getElement());
    }

    
    
}