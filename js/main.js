$(document).ready(function() {
    var headerBtn = $('#header-btn');
    var modalClose = $('.modal-call__close');
    
    headerBtn.on("click", openModal);
    modalClose.on("click", closeModal);

    function openModal() {
        var modal = $('.modal-call');
        modal.addClass('modal-call--active');
    }

    function closeModal(event) {
        event.preventDefault();
        var modal = $('.modal-call');
        modal.removeClass('modal-call--active');
    }
});
