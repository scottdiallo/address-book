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

    //function show field name when on focus andhide when blur
    $(".firstNameE").hide();

    $(".firstName").focus(function () {
            $(".firstNameE").show();
        })
        //    console.log('hi');
    $(".firstName").blur(function () {
        $(".firstNameE").hide();
    });

});
