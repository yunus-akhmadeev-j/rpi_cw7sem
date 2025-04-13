import {createElement} from '../framework/render.js';
function createFeedbackComponentTemplate(){
return(
    `<main class="main">
    <div class="contacts">
        <form class="form_contacts">
            <h4>Наши контакты для консультации</h4>
            <p>Почта: cascabel-interior-qa@mail.ru</p>
            <p>Телефон: +7 985 698 69 84, +7 920 340 50 40</p>
            <p>Адрес: РФ, г. Москва, ул. Беговая, д18-кв12</p>
            <p>Адрес: РФ, г. Казань, ул. Гвардейская, д44-кв7</p>

            <h4>При наличии претензий</h4>
            <p>Почта: cascabel-interior-report@mail.ru</p>
            <p>Телефон: +7 917 854 54 74</p>
        </form>
       
    </div>
</main>`
);
}

export default class FeedbackComponent {
  getTemplate() {
    return createFeedbackComponentTemplate();
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