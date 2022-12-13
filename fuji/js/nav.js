$(function(){
    $("header nav > ul > li > ul").slideUp();
    $("header nav > ul > li").mouseenter(function(){
      $("header nav > ul > li > ul").stop().slideDown("normal");  
    }).mouseleave(function(){
        $("header nav > ul > li > ul").stop().slideUp("normal")
    })
})