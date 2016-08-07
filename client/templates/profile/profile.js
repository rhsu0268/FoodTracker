Template.Profile.events({

    'click #submitChange': function(event)
    {
        event.preventDefault();
        console.log("Updating profile!");
    }

    /*
    // get each of the fields
       var firstName = $('#firstName').val();
       var lastName = $('#lastName').val();
       var email = $('#email').val();
       var password = $('#password').val();
       var roles = $('#roles').val();
       var territories = $('#territories').val();
       //console.log(firstName);

       var newUser = {
           userFirstName: firstName,
           userLastName: lastName,
           userEmail: email,
           userPassword: password,
           userRoles: roles,
           userTerritories: territories
       };

       // call the create user
       Meteor.call('addUser', newUser, function (error, result) {
           console.log("Calling addUser");
           if (error)
           {
               console.log(error.reason);
           }
           console.log("User created!");

       });
       */

});
