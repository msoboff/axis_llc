
//check to see if user is admin in order to display admin dashboard nav button
Template.layout.helpers({
    isAdmin: function() {
        return Meteor.userId() === "5M8bzNAJqhhHtBFFm";
    }
});