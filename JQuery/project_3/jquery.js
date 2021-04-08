$(function () {
    $(`.tieudekhoi`).click(function (e) { 
        // e.preventDefault();
        $(this).toggleClass (`click`);

        // hien nd

        $(this).next().slideToggle (800);

        // su dung ham animate chuyen nd len

        $(`.noidung`).animate({scrollTop: $(this).offset().top},200);
    });

    $('.anh a').fancybox({
        buttons : [ 
          'slideShow',
          'share',
          'zoom',
          'fullScreen',
          'close'
        ],
        thumbs : {
          autoStart : true
        }
      });

    //   xu ly co gian

    $(`.ndkhoi`).slideUp();

});