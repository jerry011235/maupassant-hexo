$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#totop").addClass("show") : $("#totop").removeClass("show");
});
$("#totop").click(function() {
    //$("#totop").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function() {
        //$("#totop").removeClass("show launch");
    });
    return false;
});
