'use strict'
// Global variables declartions

$(document).ready(function () {
    //    console.log('hi');
    console.log('hello world');
    //hide contact form on page load
    $('.contactDetails').hide();

    $('.addSign').on('click', function () {
        $('.addSign').hide();
        $('.contactDetails').show();
    })

    //function show field name when on focus andhide when blur
    $(".focusEvent").hide();

    $("input").focus(function () {
        $(".focusEvent").show();
    })

    $("input").blur(function () {
        $(".focusEvent").hide();
    });

});
