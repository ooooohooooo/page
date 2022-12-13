$(function(){
    var num = 0;
    var list = $("#ani li").length;
    var wd = $("#ani li").width();
    function gal(c){
       $("#ani").stop(true,true).animate({"marginLeft":c*-wd},"87%") 
    }
    $("#left, #right").click(function(){
        if($(this).attr("id")=="right"){
         if(num<list-1) num++; 
        }else{
            if(num>0) num--;
        }
        gal(num);
    })
})