function changeLogo(toColor) {
    let logo = $(".header__logo img"),
        currentLogoSrc = logo.attr("src"),
        secondLogoSrc = logo.attr("data-second-src")

    if (logo.attr("data-type") != toColor) {
        logo.attr("src", secondLogoSrc).attr("data-second-src", currentLogoSrc)
        logo.attr("data-type") == "white" ? logo.attr("data-type", "black") : logo.attr("data-type", "white")
    }

}

$(".header__burger").click(function() {
    
    $(this).toggleClass("header__burger_active")

    $(".header").toggleClass("header_active")
    $(".mobile-menu").toggleClass("mobile-menu_active")
    $("body, html").toggleClass("lock")
    
    if ($(this).hasClass("header__burger_active")) {
        changeLogo("black")
    } else {
        if (!$(".header").hasClass("header_scrolled")) {
            changeLogo("white")
        }
    }

})

$("[data-search]").click(function() {
    $(".header__search").show()
    $(".header__contacts").hide()
    $(this).hide()
})
$("[data-close-search]").click(function() {
    $(".header__search").hide()
    $(".header__contacts").css("display", "")
    $("[data-search]").show()
})

$(window).scroll(function(event){

    var st = $(this).scrollTop();
    if (st > 100){
        $(".header").addClass("header_scrolled")
        changeLogo("black")
    } else {
        $(".header").removeClass("header_scrolled")
        changeLogo("white")
    }

});