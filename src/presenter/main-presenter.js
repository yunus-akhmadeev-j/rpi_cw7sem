import MainModel from '../model/main-model.js';
import MainComponent from '../view-main/main-component.js';
export default class MainPresenter {
    constructor(container) {
        this.container = container;
        this.model = new MainModel();
        this.component = new MainComponent();
        this._init();
    }

   
    _init() {
        this.renderMain();
    }
    renderMain() {
        const main = this.model.getMain();
        this.container.appendChild(this.component.getElement());
    }

    
    
}