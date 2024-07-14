$('.hide-menu').hide();
$('.mobile-menu-item').hide();

$('.show-menu').click(function() {
    $('.mobile-menu-item').slideDown();
    $('.hide-menu').show();
    $('.show-menu').hide();
});

$('.hide-menu').click(function() {
    $('.mobile-menu-item').slideUp();
    $('.hide-menu').hide();
    $('.show-menu').show();
})