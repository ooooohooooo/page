$(function(){
    $("nav ul ul").slideUp(0);
    $("nav>ul>li").mouseenter(function(){
        $(this).find("ul").stop().slideDown();
    }).mouseleave(function(){
        $("nav ul ul").stop().slideUp();
    });
    
    /*
    .mouseover()와 .mouseenter()의 차이점
    .mouseover()는 부모와 자식요소를 넓게 잡는다.
    .mouseover()는 .mouseout()과 함께 사용한다.
    
    .mouseenter()는 정확히 위치를 잡아야 하는것이다.
    .mouseenter()는 .mouseleave()와 함께 사용한다.
    */
});