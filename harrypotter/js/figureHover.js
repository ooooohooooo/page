$(function(){
    $("figure").hover(function(){
        $(this).find("figcaption").stop().animate({"top":0})
    },function(){
        $("figcaption").stop().animate({top:"90%"})
    })
})