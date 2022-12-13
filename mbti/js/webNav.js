$(function(){
    $("header div#webNav ul > li > ul").slideUp();
    $("header div#webNav ul > li").mouseenter(function(){
        $("header div#webNav ul > li > ul").stop().slideDown();
    }).mouseleave(function(){
        $("header div#webNav ul > li > ul").stop().slideUp();
    });
    
})