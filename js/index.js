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
    $(".firstName").blur(function () {
        $(".firstNameE").hide();
    });
    // event for last name
    $(".lastNameE").hide();
    $(".lastName").focus(function () {
        $(".lastNameE").show();
    })
    $(".lastName").blur(function () {
        $(".lastNameE").hide();
    });
    // event for phone number
    $(".phoneNumberE").hide();
    $(".phoneNbr").focus(function () {
        $(".phoneNumberE").show();
    })
    $(".phoneNbr").blur(function () {
        $(".phoneNumberE").hide();
    });
    // event for email
    $(".emailE").hide();
    $(".email").focus(function () {
        $(".emailE").show();
    })
    $(".email").blur(function () {
        $(".emailE").hide();
    });
    // event for gitHub
    $(".gitHubE").hide();
    $(".gitHub").focus(function () {
        $(".gitHubE").show();
    })
    $(".gitHub").blur(function () {
        $(".gitHubE").hide();
    });
    // event for location
    $(".locationE").hide();
    $(".location").focus(function () {
        $(".locationE").show();
    })
    $(".location").blur(function () {
        $(".locationE").hide();
    });

    // work on aligning input name with field
    //implement attachment && display user contact on dom


});
