$(document).ready(function () {
    $(`.dangnhap`).animate({opacity:0, Left: -100})
    // $(`.dangnhap`).animate({opacity:0, marginLeft: -100})
    $(`.btn-dangky`).click(function () {
        
        $(`.dangky`).animate({opacity:0, marginLeft: -100});
        $(`.dangnhap`).animate({opacity:1, marginLeft: 0});
    });
    $(`.btn-dangnhap`).click(function () {
        
        $(`.dangky`).animate({opacity:1, marginLeft: 0});
        $(`.dangnhap`).animate({opacity:0, marginLeft: -100});
    });
}); //hàm mở đầu của JQuery, đảm báo JQuery đã chạy, tránh lỗi
