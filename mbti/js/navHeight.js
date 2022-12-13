$(function(){
    $(window).resize(function () {
        winW = $(window).width();
        if (winW < 1200) {
            $("header nav > ul ul").css("height", winW/4)
        } else if (winW < 1400) {
            $("header nav > ul ul").css("height", winW/4.5)
        } else if (winW < 1600) {
            $("header nav > ul ul").css("height", winW/5)
        } else {
            $("header nav > ul ul").css("height", winW/5.5)
        }
    })
})