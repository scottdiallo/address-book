'use strict'
// Global variables declartions

$(document).ready(function () {
    console.log('hello world');
    //hide contact form on page load
    $('.contactDetails').hide();

    $('.addSign').on('click', function () {
        $('.addSign').hide();
        $('.contactDetails').show();
    })


});
