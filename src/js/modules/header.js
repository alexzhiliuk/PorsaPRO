$(".header__burger").click(function() {
    
    $(this).toggleClass("header__burger_active")

    $(".header").toggleClass("header_active")
    $(".mobile-menu").toggleClass("mobile-menu_active")
    $("body, html").toggleClass("lock")
    
    // Change logo
    let logo = $(".header__logo img"),
        currentLogoSrc = logo.attr("src"),
        secondLogoSrc = logo.attr("data-second-src")

    logo.attr("src", secondLogoSrc).attr("data-second-src", currentLogoSrc)

})

$("[data-search]").click(function() {
    $(".header__search").show()
    $(".header__contacts").hide()
    $(this).hide()
})
$("[data-close-search]").click(function() {
    $(".header__search").hide()
    $(".header__contacts").show()
    $("[data-search]").show()
})