import OrderModel from '../model/order-model.js';
import OrderComponent from '../view-order/order-component.js';
export default class OrderPresenter {
    constructor(container) {
        this.container = container;
        this.model = new OrderModel();
        this.component = new OrderComponent();
        this._init();
    }

   
    _init() {
        this.renderOrder();
    }
    renderOrder() {
        const order = this.model.getOrder();
        this.container.appendChild(this.component.getElement());
    }

    
    
}