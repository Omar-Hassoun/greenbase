
$(document).ready(function () {
    'use strict'
    /**
     * display/hide edit button on mousenter/mouseleave category div
     */
    $('div.cat div.img-wrapper').on({
        mouseenter: function () {
            $(this).find('div.shadow').fadeIn(600);
        },
        mouseleave: function () {
            $(this).find('div.shadow').fadeOut(800);
        }
    })
    
})