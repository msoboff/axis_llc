
//This validates that a user creates a user name based on the format firstname.middleinitial.lastname
Accounts.validateNewUser(function(user) {
    var fields = user.username.split(".");
    if(user.username && fields.length == 3) {
        return true;
    } else {
        throw new Meteor.Error(403, "Username must be of form firstname.middleinitial.lastname");
    }
});