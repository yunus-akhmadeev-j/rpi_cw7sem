import {createElement} from '../framework/render.js';
function createOrderComponentTemplate() {
    

    return `
        <main class="main">
        <div class="form-order">
            <h4>Оформить заказ</h4>
            <form id="commentForm">

                <label for="name">Ваше имя:</label>
                <input type="text" id="name" name="name" required>
                <label for="request">Требования</label>
                <input type="text" id="request" name="request" required>
                <label for="work-type">Категория</label>
                <input type="text" id="work-type" name="work-type" required>
                <label for="designerID">Id дизайнера</label>
                <input type="text" id="designerID" name="designerID" required>

                <button type="submit">Оформить заказ</button>

                <p>Заявка будет обработана в течении 3х дней.</p>
            </form>
        </div>
    </main>
    `;
}

export default class OrderComponent {
  getTemplate() {
    return createOrderComponentTemplate();
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