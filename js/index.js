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

    //capturing user input and and displaying them

    $('.saveBtn').on('click', function () {
        $('input').val().append('#displayContact');
    });

    //
    //    $('input').val()
    //
    //    function ({
    //        $('#displayContact').appendTo('input');
    //    })


    //implement attachment && display user contact on dom

//sample code
    // btn variables
//    var addBtn = document.getElementById('addBtn');
//    var saveBtn = document.getElementById('saveBtn');
//    var clearForm = document.getElementById('clearForm');
//    var addressBookDisplay = document.querySelector('.addressBookDisplay');
//
//    //input field
//    var firstName = document.getElementById('firstName');
//    var lastName = document.getElementById('lastName');
//    var number = document.getElementById('number');
//    var email = document.getGetElementById('email');
//    var gitHub = document.getElementById('gitHub');
//    var location = document.getElementById('location');
//    var profilePic = document.getElementById('profilePic');
//    //address book display
//    var addressBookDisplay = document.querySelector('.addressBookDisplay');
//
//    // create an array to hold all input from user
//    var addressBook = [];
//
//    function jsonStructure(firstName, lastName, number, email, email, gitHub, location, profilePic) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.number = number;
//        this.email = email;
//        this.gitHub = gitHub;
//        this.location = location;
//        this.profilePic = profilePic;
//
//        var obj = new jsonStructure(firstName.value, lastName.value, number.value, email.value, gitHub.value, location.value, profilePic.value);
//        addressBook.push(obj);
//        localStorage['addBook'] = JSON.stringify(addressBook); //local storage built into the browser, local str only take ''
//    }
//
//    $('.saveBtn').on('click', function (addressToBook) {
//
//    })
});
