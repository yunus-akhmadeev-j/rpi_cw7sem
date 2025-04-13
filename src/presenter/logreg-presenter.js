import LogRegModel from '../model/logreg-model.js';
import LogRegComponent from '../view-logreg/logreg-component.js';
export default class LogRegPresenter {
    constructor(container) {
        this.container = container;
        this.model = new LogRegModel();
        this.component = new LogRegComponent();
        this._init();
    }

   
    _init() {
        this.renderLogReg();
    }
    renderLogReg() {
        const logreg = this.model.getLogReg();
        this.container.appendChild(this.component.getElement());
        const signInBtn =document.querySelector('.signin-btn');
const signUpBtn =document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const logReg = document.querySelector('.log-reg');

signUpBtn.addEventListener('click', function(){
    formBox.classList.add('active');
    logReg.classList.add('active');
});
signInBtn.addEventListener('click', function(){
    formBox.classList.remove('active');
    logReg.classList.remove('active');
});
    }

    
    
}