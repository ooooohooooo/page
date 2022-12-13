$(function(){
    $("header div#mobile_nav div#toggle").click(function() {
      $(this).toggleClass("open");
      $("header div#mobile_nav div#menu").toggleClass("opened");
    });
})

