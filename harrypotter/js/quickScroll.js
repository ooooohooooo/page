$(window).scroll(function(){
        var sct = $(window).scrollTop()+200;
        $("div#quick").stop().animate({top:sct},1000)
    })


