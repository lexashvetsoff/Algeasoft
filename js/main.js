$(document).ready(function() {
    var headerBtn = $('#header-btn');
    var modalClose = $('.modal-call__close');
    
    headerBtn.on("click", openModal);
    modalClose.on("click", closeModal);

    var modalBtn = $('#form-btn');
    var modalThanksClose = $('.modal-thanks__close');

    modalBtn.on("click", clickFormBtn);
    modalThanksClose.on("click", thanksClose);

    function openModal() {
        var modal = $('.modal-call');
        modal.addClass('modal-call--active');
    }

    function closeModal(event) {
        event.preventDefault();
        var modal = $('.modal-call');
        modal.removeClass('modal-call--active');
    }

    function clickFormBtn() {
        var modal = $('.modal-call');
        var thanks = $('.modal-thanks');

        modal.removeClass('modal-call--active');
        thanks.addClass('modal-thanks--active')
    }

    function thanksClose(event) {
        event.preventDefault();
        var thanks = $('.modal-thanks');
        thanks.removeClass('modal-thanks--active');
    }
});
