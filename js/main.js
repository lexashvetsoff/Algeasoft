$(document).ready(function() {
    var headerBtn = $('#header-btn');
    var footerBtn = $('#footer-wrapper-btn');
    var modalClose = $('.modal-call__close');
    
    headerBtn.on("click", openModal);
    footerBtn.on("click", openModal);
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

    // слайдер slick
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        variableWidth: true
    });

    // Мобильное меню
    var burger = $('.burger-btn');
    burger.on("click", mobileMenu);

    function mobileMenu() {
        $('.burger-btn').toggleClass('burger-btn--activ');
        $('.burger-btn__item').toggleClass('burger-btn__item--activ');
        $('.mobile').toggleClass('mobile--activ');
    }
});
