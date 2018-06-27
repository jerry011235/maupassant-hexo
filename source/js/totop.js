$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#totop").addClass("show") : $("#totop").removeClass("show");
});
$("#totop").click(function() {
  
    $("html, body").animate({
        scrollTop: 0
    }, 500);
   
});
