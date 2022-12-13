$(function(){
    var wd = $(".aniWrap ul li").width()+10;
    $(".aniWrap ul li:last").prependTo(".aniWrap ul");
    $(".aniWrap ul").css("margin-left",-wd);
    $("#ltBtn").click(function(){
        $(".aniWrap ul").stop().animate({
            marginLeft:parseInt($(".aniWrap ul").css("margin-left"))+wd
        },function(){
            $(".aniWrap ul li:last").prependTo(".aniWrap ul");
            $(".aniWrap ul").css("margin-left",-wd);
        })
    })
    
    $("#gtBtn").click(function(){
        $(".aniWrap ul").stop().animate({
            marginLeft:parseInt($(".aniWrap ul").css("margin-left"))-wd
        },function(){
            $(".aniWrap ul li:first").appendTo(".aniWrap ul");
            $(".aniWrap ul").css("margin-left",-wd); 
        })
    })
})