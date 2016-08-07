Meteor.methods({
    updateProfile: function (userUpdate)
    {
        check(userUpdate, {
            userId: String,
            userName: String,
            userAge: String,
            userHeight: String,
            userWeight: String
        });
        console.log(userId);

        var userName = userUpdate.userName;
        var userAge = userUpdate.userAge;
        var userHeight = userUpdate.userheight;
        var userWeight = userUpdate.userWeight;

        var updatedUser = Meteor.users.update(userId, {$set: {

            userName: userName,
            userAge: userAge,
            userHeight: userHeight,
            userWeight: userWeight
        }
    });


}
});
