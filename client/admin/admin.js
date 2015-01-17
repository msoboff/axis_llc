Template.admin.helpers({
    uploads: function() {
        return Uploads.find();
    },
    social: function() {
        return Social.find();
    },
    hPackage: function() {
        return hPackage.find();
    }
});