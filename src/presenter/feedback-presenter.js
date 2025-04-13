import FeedbackModel from '../model/feedback-model.js';
import FeedbackComponent from '../view-feedback/feedback-component.js';
export default class FeedBackPresenter {
    constructor(container) {
        this.container = container;
        this.model = new FeedbackModel();
        this.component = new FeedbackComponent();
        this._init();
    }

   
    _init() {
        this.renderFeedback();
    }
    renderFeedback() {
        const feedback = this.model.getFeedback();
        this.container.appendChild(this.component.getElement());
    }

    
    
}