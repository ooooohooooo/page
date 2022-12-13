$(function () {
    var winW = $(window).width();

    if (winW < 600 && winW > 320) {
       $("div#front").removeClass("rot");
        $("div#back").removeClass("rot");
        $("div#as div#asCircle div#asCircleWrap").click(function () {
            $("div#front").addClass("rot");
            $("div#back").addClass("rot");
        })
        
    } else {
        $("div#front").removeClass("rot");
        $("div#back").removeClass("rot");
    }
    
})
