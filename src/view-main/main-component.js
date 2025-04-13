import {createElement} from '../framework/render.js';
function createMainComponentTemplate(){
return(
    `<main class="main">
        <section class="top">

            <div class="top_container">
                <div class="top_content">
                    <h3 class="top_title "> Студия дизайна Cascabel</h3>
                    <p class="top_text section_text">Лучшее место для поиска квалифированных дизайнеров.
                        У нас можно заказать любой вид дизайна. Сделать с нуля или доработать. 
                    </p>

                    <button class="order_btn"><a href="order.html">Оформить заказ</a></button>
                </div>
                
            </div>
            
        </section>
        <div class="reg-link"><h3>Вы дизайнер? <a href="log-reg.html">Присоединяйтесь</a> к нашей команде!</h3>
        </div>
       

        <section class="services">  
            <h3>Услуги</h3>          
            <div class="services-inner">
                

                <div class="services-dropdown">
                    <ul>
                        <li>Создание дизайна</li>
                    </ul>
                    <ul class="services-dropdown-content">
                        <li>Интерьер квартиры</li>
                        <li>Интерьер офиса</li>
                        <li>Интерьер кафе/ресторана</li>
                        <li>Интерьер загородного дома</li>
                        <li>Интерьер подвальных помещений</li>
                        <li>Интерьер отдельных помещений</li>                        
                    </ul>
                </div>

                <div class="services-dropdown">
                    <ul>
                        <li>Подбор материалов</li>
                    </ul>
                    <ul class="services-dropdown-content">
                        <li>Замена материала</li>
                        <li>Совмещение материалов</li>
                        <li>Подбор материалов</li>
                        <li>Различная работа с материалами</li>                      
                    </ul>
                </div>

                <div class="services-dropdown">
                    <ul>
                        <li>Различная консультация</li>
                    </ul>
                    <ul class="services-dropdown-content">
                        <li>Оценка</li>
                        <li>Проектировка</li>
                        <li>Переделка</li>
                        <li>Кап-ремонт</li>
                        <li>Внешние работы</li>
                        <li>Реставрация поврежденных помещений</li>                       
                    </ul>
                </div>
                <img class="bg_1"src="/img/mainp5.jpg" width="1800px" height="360px
                ">
                <img class="bg_1" src="/img/mainp4.jpg" width="1800px" height="360px">             
            </div>
            
            <button class="button"><a href="feedback.html">Связаться</a></button>                
                <button class="button"><a href="order.html">Оформить заказ</a></button>
        </section>       
<div><br><br><br></div>
        

<section class="requests">

            <h3>Популярные запросы</h3>
            <div class="container_requests">
                <section class="request_item_section">
                    <div class="request_item">
                        
                        <h4 class="stock_item_title">Комплекс профессиональной оценки помещения</h4>
                        <p class="stock_item_text">Поможем оценить стоимость подготовки дизайна и ремонта</p>
                        <button class="button"><a href="order.html">Оформить заказ</a></button>
                    </div>
    
                    <div class="request_item">
                        
                        <h4 class="stock_item_title">Создать дизайн детской комнаты</h4>
                        <p class="stock_item_text">Большая база дизайнов доступна для ознакомления</p>
                        <button class="button"><a href="order.html">Оформить заказ</a></button>
                    </div>
    
                    <div class="request_item">
                        
                        <h4 class="stock_item_title">Спроектировать летнюю кухню</h4>
                        <p class="stock_item_text">Большая база дизайнов доступна для ознакомления</p>
                        <button class="button"><a href="order.html">Оформить заказ</a></button>
                    </div>
                </section>
                 <img src="/img/mainp3.jpg" height="444px" width="1200px" alt="">              
            </div>
            
        </section>

  
        <section class="about_info">
            <div class="container about_inner">
                <div class="about_content">
                    <h3 class="about_title">
                        Мы, студия дизайна с большим количеством профессионалов.
                    </h3>
                    <p class="about_text section_text">
                        Наша студия работает уже больше 10 лет по всей территории РТ. Выполнено огромное количество разнообразных заказов.<br>
                        Вы можете найти здесь помощь по любому вопросу связанному с дизайном помещений.
                    </p>
                </div>                
            </div>
            <div class="list-img">
                <ul class="about_list">
                    <li class="about_item"><img class="about_item_picture" src="img/mainp2.jpg" alt=""></li>
                    <li class="about_item"><img class="about_item_picture" src="img/mainp1.jpg" alt=""></li>                                    
                    <li class="about_item"><img class="about_item_picture" src="img/log5.png" alt=""></li>
                </ul>
            </div>
        </section>
    </main>`
);
}

export default class MainComponent {
  getTemplate() {
    return createMainComponentTemplate();
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