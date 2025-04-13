import {createElement} from '../framework/render.js';
function createHeaderComponentTemplate() {
    return (
        ` <header>
        <div class="container header_inner">
            <a class="logo" href="#">
                <img class="logo_img" src="/img/logo1.png" style="width: 200px" alt="">
                <p>Студия дизайна Cascabel</p>
            </a>

            <nav class="menu header_menu">                
                <ul class="menu_list header_menu_list">
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="index.html">Главная</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="library.html">Работы дизайнеров</a>
                    </li>                   
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="log-reg.html">Авторизоваться</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="review.html">Отзывы</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href='#bottom'>Контакты</a>
                    </li>
                </ul>
            </nav>          
        </div>
    </header>`
      );
}


export default class HeaderComponent {
    getTemplate() {
        return createHeaderComponentTemplate();
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