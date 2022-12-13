$(function () {
  /*  var winW = $(window).width();
        if (winW < 480) {
            $("header nav > ul ul").css("height", winW/5)
        } else if (winW < 1000) {
            $("header nav > ul ul").css("height", winW/6)
        } else if (winW < 1200) {
            $("header nav > ul ul").css("height", winW/6.5)
        } else if (winW < 1400) {
            $("header nav > ul ul").css("height", winW/7)
        } else if (winW < 1600) {
            $("header nav > ul ul").css("height", winW/9)
        } else {
            $("header nav > ul ul").css("height", winW/9.5)
        }
*/
    $(window).resize(function () {
        winW = $(window).width();
        if (winW < 480) {
            $("header nav > ul ul").css("height", winW/5)
        } else if (winW < 1000) {
            $("header nav > ul ul").css("height", winW/6)
        } else if (winW < 1200) {
            $("header nav > ul ul").css("height", winW/6.5)
        } else if (winW < 1400) {
            $("header nav > ul ul").css("height", winW/7)
        } else if (winW < 1600) {
            $("header nav > ul ul").css("height", winW/8)
        } else {
            $("header nav > ul ul").css("height", winW/9.5)
        }
    })
})
