$(function () {
    var count = 0;
    var lastH = 0;
    var pos = new Array();
    //pos는 section의 상단값을 담기 위한 Array배열 함수로 지정한다는 뜻을 가지고 있다. 
    //담는 예시 : pos[i] = $("#con section:eq("+i+")").offset().top
    var wH = $(window).height(); //브라우저 높이
    var lH = $("#con > section:last-child").height(); //마지막 섹션높이
    if (wH > lH) {
        lastH = wH - lH;
    }

    function active(a) { //누구든지 쓸수 있도록 하는 것
        /*alert(a);*/
        $("#quick a").removeClass("on");
        $("#quick a:eq(" + a + ")").addClass("on");
    }

    for (var i = 0; i < $("#con > section").length; i++) {
        if (i == $("#con > section").length - 1) {
            /*pos[i]의 i 값이 마지막 section이 담겼을때를 말한다. 
            i는 숫자 3을 말하며 pos[3]이라고 보면된다. 
            pos["#con section:first-child","#con section:nth-child(2)","#con section:nth-child(3)","#con section:last-child",]*/

            pos[i] = $("#con > section:eq(" + i + ")").offset().top - lastH;
        } else {
            pos[i] = $("#con > section:eq(" + i + ")").offset().top;
            //.offset()은 연산식이라고 생각하면 된다. bottom은 얼만큼 늘어날지 모르기때문에 top값을 찾는다
        }
    }

    $("#quick a").click(function () {
        count = $(this).index();

        active(count);

        $("body, html").animate({
            scrollTop: pos[count]
        }, 800)
        return false;
    })

    $(window).scroll(function () {
        $("#con > section").each(function () {
            if ($(window).scrollTop()+80>= pos[$(this).index()]) {
                count = $(this).index();
            }
        })
        active(count);
    })
    
    $(window).resize(function(){
        $(window).scroll(function () {
        $("#con > section").each(function () {
            if ($(window).scrollTop()+80>= pos[$(this).index()]) {
                count = $(this).index();
            }
        })
        active(count);
    })
        
    });
    
    
    

})
