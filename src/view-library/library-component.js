import {createElement} from '../framework/render.js';
function createLibraryComponentTemplate(){
return(
    ` <main class="main">
        <h2>
            Лучшие работы за этот месяц.
        </h2>
  <!-- Сетка карточек товаров -->
<div class="cards">
    <!-- Карточка товара -->
    <div class="card">
        <!-- Верхняя часть -->
        <div class="card__top">
          <!-- Изображение-ссылка товара -->
          <a href="#" class="card__image">
            <img
              src="/img/mainp4.jpg"
              alt="Интерьер. Гостиная."
            />
          </a>
          <!-- Скидка на товар -->
          <div class="card__label">1</div>
        </div>
        <!-- Нижняя часть -->
        <div class="card__bottom">
          <!-- Цены на товар (с учетом скидки и без)-->
          <div class="card__prices">
            <div class="card__price card__price--discount">Классицизм</div>
            <div class="card__price card__price--common">Дерево, ткань</div>
          </div>
          <!-- Ссылка-название товара -->
          <a href="#" class="card__title">
            Интерьер. Гостиная (Темная).
          </a>
          <!-- Кнопка добавить в корзину -->
          <button class="card__add">Подробнее</button>
        </div>
      </div><div class="card">
        <!-- Верхняя часть -->
        <div class="card__top">
          <!-- Изображение-ссылка товара -->
          <a href="#" class="card__image">
            <img
              src="/img/mainp2.jpg"
              alt="Интерьер. Студия под офис"
            />
          </a>
          <!-- Скидка на товар -->
          <div class="card__label">2</div>
        </div>
        <!-- Нижняя часть -->
        <div class="card__bottom">
          <!-- Цены на товар (с учетом скидки и без)-->
          <div class="card__prices">
            <div class="card__price card__price--discount">Модерн</div>
            <div class="card__price card__price--common">Дерево, камень</div>
          </div>
          <!-- Ссылка-название товара -->
          <a href="#" class="card__title">
            Интерьер. Студия под офис (Светлая).
          </a>
          <!-- Кнопка добавить в корзину -->
          <button class="card__add">Подробнее</button>
        </div>
      </div><div class="card">
        <!-- Верхняя часть -->
        <div class="card__top">
          <!-- Изображение-ссылка товара -->
          <a href="#" class="card__image">
            <img
              src="/img/mainp3.jpg"
              alt="Интерьер. Комната для отдыха"
            />
          </a>
          <!-- Скидка на товар -->
          <div class="card__label">3</div>
        </div>
        <!-- Нижняя часть -->
        <div class="card__bottom">
          <!-- Цены на товар (с учетом скидки и без)-->
          <div class="card__prices">
            <div class="card__price card__price--discount">Модерн</div>
            <div class="card__price card__price--common">Дерево, ткань</div>
          </div>
          <!-- Ссылка-название товара -->
          <a href="#" class="card__title">
            Интерьер. Комната для отдыха.
          </a>
          <!-- Кнопка добавить в корзину -->
          <button class="card__add">Подробнее</button>
        </div>
      </div><div class="card">
        <!-- Верхняя часть -->
        <div class="card__top">
          <!-- Изображение-ссылка товара -->
          <a href="#" class="card__image">
            <img
              src="/img/mainp5.jpg"
              alt="Интерьер. Спальня."
            />
          </a>
          <!-- Скидка на товар -->
          <div class="card__label">4</div>
        </div>
        <!-- Нижняя часть -->
        <div class="card__bottom">
          <!-- Цены на товар (с учетом скидки и без)-->
          <div class="card__prices">
            <div class="card__price card__price--discount">Барокко</div>
            <div class="card__price card__price--common">Шелк, Дерево</div>
          </div>
          <!-- Ссылка-название товара -->
          <a href="#" class="card__title">
            Интерьер. Спальня (Большая).
          </a>
          <!-- Кнопка добавить в корзину -->
          <button class="card__add">Подробнее</button>
        </div>
      </div><div class="card">
        <!-- Верхняя часть -->
        <div class="card__top">
          <!-- Изображение-ссылка товара -->
          <a href="#" class="card__image">
            <img
              src="/img/mainp6.jpg"
              alt="Интерьер. Приемная."
            />
          </a>
          <!-- Скидка на товар -->
          <div class="card__label">5</div>
        </div>
        <!-- Нижняя часть -->
        <div class="card__bottom">
          <!-- Цены на товар (с учетом скидки и без)-->
          <div class="card__prices">
            <div class="card__price card__price--discount">Пост-модерн</div>
            <div class="card__price card__price--common">Стекло, Камень</div>
          </div>
          <!-- Ссылка-название товара -->
          <a href="#" class="card__title">
            Интерьер. Приемная (Офис).
          </a>
          <!-- Кнопка добавить в корзину -->
          <button class="card__add">Подробнее</button>
        </div>
      </div><div class="card">
        <!-- Верхняя часть -->
        <div class="card__top">
          <!-- Изображение-ссылка товара -->
          <a href="#" class="card__image">
            <img
              src="/img/mainp7.jpg"
              alt="Интерьер. Кабинет психолога."
            />
          </a>
          <!-- Скидка на товар -->
          <div class="card__label">6</div>
        </div>
        <!-- Нижняя часть -->
        <div class="card__bottom">
          <!-- Цены на товар (с учетом скидки и без)-->
          <div class="card__prices">
            <div class="card__price card__price--discount">Модерн</div>
            <div class="card__price card__price--common">Пластик, Камень</div>
          </div>
          <!-- Ссылка-название товара -->
          <a href="#" class="card__title">
            Интерьер. Кабинет психолога.
          </a>
          <!-- Кнопка добавить в корзину -->
          <button class="card__add">Подробнее</button>
        </div>
      </div><div class="card">
        <!-- Верхняя часть -->
        <div class="card__top">
          <!-- Изображение-ссылка товара -->
          <a href="#" class="card__image">
            <img
              src="/img/mainp8.jpg"
              alt="Интерьер. Детская"
            />
          </a>
          <!-- Скидка на товар -->
          <div class="card__label">7</div>
        </div>
        <!-- Нижняя часть -->
        <div class="card__bottom">
          <!-- Цены на товар (с учетом скидки и без)-->
          <div class="card__prices">
            <div class="card__price card__price--discount">Классицизм</div>
            <div class="card__price card__price--common">Дерево,Пластик</div>
          </div>
          <!-- Ссылка-название товара -->
          <a href="#" class="card__title">
            Интерьер. Детская Комната (Светлая).
          </a>
          <!-- Кнопка добавить в корзину -->
          <button class="card__add">Подробнее</button>
        </div>
      </div><div class="card">
        <!-- Верхняя часть -->
        <div class="card__top">
          <!-- Изображение-ссылка товара -->
          <a href="#" class="card__image">
            <img
              src="/img/mainp2.png"
              alt="Интерьер. Подвальное помещение"
            />
          </a>
          <!-- Скидка на товар -->
          <div class="card__label">8</div>
        </div>
        <!-- Нижняя часть -->
        <div class="card__bottom">
          <!-- Цены на товар (с учетом скидки и без)-->
          <div class="card__prices">
            <div class="card__price card__price--discount">Барокко</div>
            <div class="card__price card__price--common">Дерево, Камень</div>
          </div>
          <!-- Ссылка-название товара -->
          <a href="#" class="card__title">
            Интерьер. Подвальное помещение.
          </a>
          <!-- Кнопка добавить в корзину -->
          <button class="card__add">Подробнее</button>
        </div>
      </div>
  </div>
    </main>`
);
}

export default class LibraryComponent {
  getTemplate() {
    return createLibraryComponentTemplate();
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