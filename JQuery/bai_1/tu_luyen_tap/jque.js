$(function () {
    $(`.hieuung__content`).slideUp();
    $(`.khoihieuung h3`).click(function (e) { 
        e.preventDefault();
        $(this).next (`.hieuung__content`).slideToggle();
    });
});