Meteor.publish('allUploads', function() {
    return Uploads.find();
});

Meteor.publish('uploads', function(owner, owner){
    //first find the id of the current user
    var currentOwner = this.userId;
    //publish the files in the uploads collection where the owner id is the same as the current meteor user
    return Uploads.find({owner: currentOwner});
});

Meteor.publish('allSocial', function() {
    return Social.find();
});

Meteor.publish('social', function(owner, owner){
    //first find the id of the current user
    var currentOwner = this.userId;
    //publish the files in the social collection where the owner id is the same as the current meteor user
    return Social.find({owner: currentOwner});
});

Meteor.publish('allPackage', function () {
    return hPackage.find();
});

Meteor.publish('hPackage', function(owner, ownerName) {
    //first find the id of the current user
    var currentOwner = this.userId;
    //publish the files in the hPackage collection where the owner id is the same as the current meteor user
    return hPackage.find({owner: currentOwner});
});