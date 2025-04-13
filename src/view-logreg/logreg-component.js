import {createElement} from '../framework/render.js';
function createFeedbackComponentTemplate(){
return(
    `<main class="log-reg">
        <article class="container">
            <div class="block">
                <section class="block_item block-item">
                    <h2 class="block-item_title">У вас уже есть аккаунт?</h2>
                    <button class="block-item_btn signin-btn">Войти</button>
                </section>
                <section class="block_item block-item">
                    <h2 class="block-item_title">У вас нет аккаунта?</h2>
                    <button class="block-item_btn signup-btn">Зарегистрироваться</button>
                </section>
            </div>
            <div class="form-box">
                <form action="#" class="form form_signin">
                    <h3 class="form_title">Вход</h3>
                    <p>
                        <input type="text" class="form_input" placeholder="Логин">      
                    </p>
                    <p>
                        <input type="text" class="form_input" placeholder="Пароль">
                    </p>
                    <p>
                        <button class="form_btn">Войти</button>
                    </p>
                    <p>
                        <a href="#" class="form_forgot">Восстановить пароль</a>
                    </p>
                </form>

                <form action="#" class="form form_signup">
                    <h3 class="form_title">Регистрация</h3>
                    <p>
                        <input type="text" class="form_input" placeholder="Логин">      
                    </p>
                    <p>
                        <input type="email" class="form_input" placeholder="Email"> 
                    </p>
                    <p>
                        <input type="text" class="form_input" placeholder="Пароль">
                    </p>
                    <p>
                        <input type="text" class="form_input" placeholder="Подтвердите пароль">
                    </p>
                    <p>
                        <button class="form_btn form_btn_signup">Зарегистрироваться</button>
                    </p>
                    <p>
                        
                    </p>
                </form>
            </div>
        </article>
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