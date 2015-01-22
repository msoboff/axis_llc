
//need a helper that will make sure that users can only see the data they uploaded
//admin can see every upload however; so there are two cases


Template.userDashboard.helpers({
    uploads:function(){
        return Uploads.find();
    },
    social:function(){
        return Social.find();
    },
    hPackage:function() {
        return hPackage.find();
    }
});

Template.userDashboard.events({
    'change .fileInput': function(event, template){
        FS.Utility.eachFile(event, function(file){
            //create a new FS.File object with the file that was submitted
            var fileObj = new FS.File(file);
            //set the owner of the file to be the unique user id
            fileObj.owner = Meteor.user().username;
            fileObj.ownerId = Meteor.userId();
            //now insert the file into the Uploads collection with the associated owner
            Uploads.insert(fileObj, function(err){
                console.log(err);
            })
        })
    },
    'change .social': function(event, template){
        FS.Utility.eachFile(event, function(file){
            var fileObj = new FS.File(file);
            fileObj.owner = Meteor.user().username;
            fileObj.ownerId = Meteor.userId();
            Social.insert(fileObj, function(err){
                console.log(err);
            })
        })
    },
    'change .hPackage': function(event, template){
        FS.Utility.eachFile(event, function(file){
            var fileObj = new FS.File(file);
            fileObj.owner = Meteor.user().username;
            fileObj.ownerId = Meteor.userId();
            hPackage.insert(fileObj, function(err){
                console.log(err);
            })
        })
    }
});