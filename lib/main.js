jQuery(document).ready(function($) {
    $('#block-endymion-main-menu li').hover(function(){
        $(this).find('.sub-menu').toggle();
    });    
});