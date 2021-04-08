$(function () {
    $(`.ndmotkhoi`).slideUp();
    $(`.motkhoi h3`).click(function (e) { 
        e.preventDefault();
        $(this).next(`.ndmotkhoi`).slideToggle();
        $(this).toggleClass(`xanh`);
        // consol.log ($(this).children().innerHTML);
    });
});