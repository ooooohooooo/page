$(function(){
    $(window).on("scroll load",function(){
        $("body > article > div.product").each(function(){
            var winH = $(window).height();
            var obtSB = $(this).offset().top + $(this).outerHeight()/4;
            var winSB = $(window).scrollTop() + winH;
            
            if(obtSB < winSB){//스크롤 값이 더 높다면
               $(this).css({"opacity":"1","transform":"translateY("+0+"em)"})
               }else{
               $(this).css({"opacity":"0","transform":"translateY("+10+"em)"})
               }
        })
    })
})