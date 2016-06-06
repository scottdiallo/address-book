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

    //function show field name when on ocus andhide when blur
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

    // prevent from reloading
    $('form').submit(function (event) {
        event.preventDefault();

        //capturing value from input field
        var userFirstName = $('.firstName').val();
        var userLastName = $('.lastName').val();
        var userPhoneNbr = $('.phoneNbr').val();
        var useremail = $('.email').val();
        var userGitHub = $('.gitHub').val();
        var userLocation = $('.location').val();
        var output = '';
        var outputFirstName = '';

        //appending value to DOM
        outputFirstName += '<br>' + '<b>' + userFirstName + '</b>' + '</br>';

        output += "<ul>";
        output += "<li><b>First Name: </b>" + userFirstName;
        output += "<li><b>Last Name: </b>" + userLastName + "</li>";
        output += "<li><b>Phone Number:</b> " + userPhoneNbr + "</li>";
        output += "<li><b>Email: </b>" + useremail + "</li>";
        output += "<li><b>GitHub link: </b>" + userGitHub + "</li>";
        output += "<li><b>Location: </b>" + userLocation + "</li>";
        output += "</ul>";
        output += "</li>";
        output += "<br>"

        $('.displayContact').append(outputFirstName);
        $('.listOfContact').append(output);

        $('.listOfContact').hide(); //hide contact details on output

        //this reset the form on submit
        $('form').each(function () {
            this.reset();
        });

        //on click should show contact details
        $('.displayContact').on('click', function () {
            $('.listOfContact').show();

        })

    });

});
