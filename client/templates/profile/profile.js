Template.Profile.events({

    'click #submitChange': function(event)
    {
        event.preventDefault();
        console.log("Updating profile!");
    }


    // get each of the fields
    var name = $('#name').val();
    var age = $('#age').val();
    var height = $('#height').val();
    var weight = $('#weight').val();
    //console.log(firstName);

    var newProfile = {
        userName: name,
        userAge: age,
        userHeight: height,
        userWeight weight,

    };

    // call the create user
    Meteor.call('updateProfile', newProfile, function (error, result) {
        console.log("Calling updateProfile");
        if (error)
        {
            console.log(error.reason);
        }
        console.log("Profile updated!");

    });


});
