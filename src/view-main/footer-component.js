import {createElement} from '../framework/render.js';



function createFooterComponentTemplate() {
    return (
        `   <footer>
        <div class="footer_contacts">
            <p>&copy; 2025 Студия дизайна <a href="index.html">Cascabel</a>. Все права защищены.</p>
            <p><a name="bottom">Телефон: +7 985 698 69 84</a></p>
            <p><a class="feedback" href="feedback.html">Связаться с нами</a></p>
             <a class="email" href="cascabel-interior-qa@mail.ru">cascabel-interior-qa@mail.ru</a>           
         </div>
    </footer>`
      );
}


export default class FooterComponent {
  getTemplate() {
    return createFooterComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}