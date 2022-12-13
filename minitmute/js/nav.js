$(function(){
    $("#main ul > li").click(function(){
        $(this).find("ul").slideToggle();
    });
    
})