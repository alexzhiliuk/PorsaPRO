$(".header__droplist").click(function() {
    $(this).toggleClass("header__droplist_active")
})

$(window).click(function() {
    $(".header__droplist").removeClass("header__droplist_active")
});

$('.header__droplist').click(function(event){
    event.stopPropagation();
});


$(".mobile-menu__droplist").click(function() {
    $(this).toggleClass("mobile-menu__droplist_active")
})