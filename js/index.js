'use strict'

$(document).ready(function () {
    //    console.log('hello world');

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

        //appending value to DOM

        output += "<li><b>First Name: </b>" + userFirstName;
        output += "<ul><li><b>Last Name: </b>" + userLastName + "</li>";
        output += "<li><b>Phone Number:</b> " + userPhoneNbr + "</li>";
        output += "<li><b>Email: </b>" + useremail + "</li>";
        output += "<li><b>GitHub link: </b>" + userGitHub + "</li>";
        output += "<li><b>Location: </b>" + userLocation + "</li>";
        output += "</ul>";
        output += "</li>";


        $('.listOfContact').append(output);

        $('.listOfContact ul ').hide(); //hide contact details on output

        //this reset the form on submit
        $('form').each(function () {
            this.reset();
        });

        //on click should show / hide contact details

        $('.listOfContact > li').click(function () {
            $(this).children().show();
        })
        $('.listOfContact  ul ').click(function () {
            $(this).children().hide();
        })


    });

});
