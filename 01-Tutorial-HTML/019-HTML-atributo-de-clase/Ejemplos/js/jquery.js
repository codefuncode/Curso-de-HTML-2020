jQuery(document).ready(function($) {
    // =======================================
    $('.cities').click(function(event) {
        $(this).hide();
    });
    // =======================================
    $('.note').click(function(event) {
        $(this).css("background", "red");
    });

});