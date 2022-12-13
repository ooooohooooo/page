$(function(){
    $(window).on("scroll load",function(){
        $("div#history > div#imgWrap, div#history > div#imgText > div#hisText > p, div#book > figure, div#test > table, div#helping > span#helpText, div#helping > p").each(function(){
            var winH = $(window).height();
            var obtSB = $(this).offset().top + $(this).outerHeight()/4;
            var winSB = $(window).scrollTop() + winH;
            
            if(obtSB < winSB){
               $(this).css({"opacity":"1","transform":"translateY("+0+"em)"})
               }else{
               $(this).css({"opacity":"0","transform":"translateY("+10+"em)"})
               }
        });
        $("div#mbti > div#threeWrap > div.firstMbti").each(function(){
            var winH = $(window).height();
            var obtSB = $(this).offset().top + $(this).outerHeight()/4;
            var winSB = $(window).scrollTop() + winH;
            
            if(obtSB < winSB){
               $(this).css({"opacity":"1","transform":"translateX("+0+"em)"})
               }else{
               $(this).css({"opacity":"0","transform":"translateX("+-4+"em)"})
               }
        });
        
        $("div#mbti >  div#threeWrap > div.mbtiWrap:last-child").each(function(){
            var winH = $(window).height();
            var obtSB = $(this).offset().top + $(this).outerHeight()/4;
            var winSB = $(window).scrollTop() + winH;
            
            if(obtSB < winSB){
               $(this).css({"opacity":"1","transform":"translateX("+0+"em)"})
               }else{
               $(this).css({"opacity":"0","transform":"translateX("+4+"em)"})
               }
        })
        
        
        
    })
    
    
    
})