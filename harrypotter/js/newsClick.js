$(function(){
    $("div#news div.fl div:not(:first)").hide();
    //var cnt = $(this).attr("data-new"); ==> 전역변수
    $("div.fl>ul>li").click(function(){
       // var cnt = $(this).attr("data-new"); ==> 지역변수
       cnt = $(this).attr("data-new"); //==> 전역변수
        
        /*
        cnt = $(this).index()+1;
        index() 메소드는 body의 출력 배열 숫자0번부터 시작을 하고 div#list선택자는 숫자 1로 시작을 하고 있어 $(this).index()+1로 1을 추가해서 작업해야 한다. 
        */
        
        //실행문 안에 var를 선언하지 않고 변수를 지정한 것을 전역변수라 할 수 있다. 
       //실행문 안에 var cnt = 값; 으로 선언을 하면 지역변수로 실행문안에서만 움직일 수 있다.
        
       /*
       전역변수는 실행문 안과 밖에 모두 활용가능하며 증감식이나 어디든지 호출가능하도록 하는 변수이다.
       지역변수는 실행문 안에 사용하는 것이고 1회성으로 휘방성이 있고, 실행문이 끝나면 증감식이나 감소식으로 활용할 수 없다.
       */
        
        $("div#news div.fl div").hide();
        $("div#news div.fl div#list"+cnt).show();
    });
})