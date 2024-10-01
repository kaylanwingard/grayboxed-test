$(document).ready(function(){
    $('#navbutton').on('click', e => {
        $('#navigation').addClass('foo');
        $('.nav-parent').delay( 2000 ).fadeIn(400);
       });
    $('#close').on('click', e => {
        $('.nav-parent').fadeOut(400);
        $('#navigation').delay(400).removeClass('foo');
    });
});
