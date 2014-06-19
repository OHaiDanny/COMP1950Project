/* COMP 1950 Proto-site pages */
$(document).ready(function () {
    var headerHeight = $('header').height();
    $('a[href^="#"]').click(function () {
        $('html, body').animate({
            scrollTop:  $(this.hash).offset().top - 165
        }, 400);
        return false;
        e.preventDefault();
    });
});