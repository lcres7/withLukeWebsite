$(window).scroll(function() {
    if ($(window).scrollTop() > 15) {
        $('#floatingNavBar').addClass('floatingNav');
    } else {
        $('#floatingNavBar').removeClass('floatingNav');
    }
});
