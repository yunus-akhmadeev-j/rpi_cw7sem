import {createElement} from '../framework/render.js';
function createReviewsComponentTemplate(reviews, onDelete) {
    const reviewsList = reviews.map((review, index) => `
        <div class="reviews_content">
                    <h4>Последние отзывы</h4>
                    <p class="reviews_name">${review.name} (${review.date})</p>
                    <p class="reviews_text section_text">${review.text}</p>
                    <p>Дизайнер</p>
                    <p class="reviews_name_designer">${review.designerName}</p>
                </div>
                <div class="reviews_content">
                    <p class="reviews_name">${review.name} (${review.date})</p>
                    <p class="reviews_text section_text">${review.text}</p>
                    <p>Дизайнер</p>
                    <p class="reviews_name_designer">${review.designerName}</p>
                </div>
    `).join('');

    return `
         <section class="reviews">
            
            <div class="container reviews_inner">
            ${reviewsList}
            </div>   
           
            <div class="reviews_form">
                <h4>Оставить отзыв</h4>
                <form id="commentForm">
                    <label for="name">Ваше имя:</label>
                    <input type="text" id="name" name="name" required>
    
                    <label for="date">Дата:</label>
                    <input type="date" id="date" name="date" required>
    
                    <label for="reviewText">Ваш отзыв:</label>
                    <textarea id="reviewText" name="reviewText" rows="4" required></textarea>
    
                    <label for="designerName">Id дизайнера:</label>
                    <input type="text" id="designerName" name="designerName" required>
    
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </section>
    `;
}

export default class ReviewsComponent {
    constructor(reviews, onDelete) {
        this.reviews = reviews; 
        this.onDelete = onDelete; 
        this.element = null; 
    }

    getTemplate() {
        return createReviewsComponentTemplate(this.reviews, this.onDelete); 
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate()); 
            this._setDeleteButtonListeners();
        }
        return this.element; 
    }

    _setDeleteButtonListeners() {
        const deleteButtons = this.element.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.dataset.index; 
                this.onDelete(index); 
            });
        });
    }

    removeElement() {
        this.element = null; 
    }
}