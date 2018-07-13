$(document).ready(function () {
    $("#nav-icon").click(function () {
        $("#main-nav").toggleClass("nav-visible");

    });
});
$(document).ready(function () {
    $("#main-nav").click(function () {
        $("#nav-icon").removeClass("nav-visible");
    });
});

$(window).resize(function () {
    if ($(document).width() > 992 && $("#main-nav").hasClass('nav-visible') && $('.collapse').hasClass('show')) {
        $("#main-nav").removeClass("nav-visible");
        $(".collapse").removeClass("show");

    }
});

console.log($(window).width());


$(".scroll").each(function () {
    $($(this)).click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500);
    });
});