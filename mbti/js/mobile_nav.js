$(document).ready(function(){
    $("header nav ul").slideUp();
    $("header nav div#spanWrap").click(function(){
        $("header nav ul").stop().slideToggle("normal");
    });
});
