<div class="modal-call">
        <a href="#" class="modal-call__close">
            <img src="image/modal/close.svg" alt="button close">
        </a>
        <h2 class="modal-call__title">Заказать обратный звонок</h2>
        <p class="modal-call__subtitle">Мы перезвоним Вам в рабочее время.</p>
        <form action="#" class="modal-form">
            <input type="text" class="modal-form__input" placeholder="Имя *" required>
            <input type="email" class="modal-form__input" placeholder="Ваш e-mail" required>
            <input type="tel" class="modal-form__input" placeholder="Телефон" required>
            <textarea name="message" rows="10" class="modal-form__message" placeholder="Комментарий"></textarea>
            
            <div class="checked">
                <input type="checkbox" id="check" class="modal-form__checkbox custom-checkbox" required>
                <label for="check" class="checked__text">
                    Я даю Согласие на обработку персональных данных на условиях, определенных
                    Политикой конфиденциальности
                </label>
            </div>
            <!-- /.checked -->

            <button class="modal-form__btn" id="form-btn">Заказать звонок</button>
        </form>
    </div>
    <!-- /.modal-call -->