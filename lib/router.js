Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {return Meteor.subscribe('uploads', Meteor.userId()),
        Meteor.subscribe('social', Meteor.userId()),
        Meteor.subscribe('hPackage', Meteor.userId());}
});


Router.route('/', {name: 'userDashboard'});

//route to admin dashboard, which will subscribe to all the files uploaded to the databases
Router.route('/admin', {name: 'admin',
    waitOn: function(){
        return Meteor.subscribe('allUploads'), Meteor.subscribe('allSocial'), Meteor.subscribe('allPackage');
    }
});

//requires general login before getting access to the route by checking if a user is currently logged in
//if they are not, then render the login template so that they can login
var genLogin = function() {
    if(! Meteor.userId()) {
        this.render('login');
    } else {
        this.next();
    }
}

//this checks the id of a user to check that it is one of the designated admins.
//if the user is not an admin, then render acess denied template, otherwise let the admin go to admin page
var requireLogin = function() {
    if(Meteor.userId() !== "XCTMw5caDHJJZG3C8" && Meteor.userId() !== "fjQdftzNY2LYA93Np") {
        this.render('accessDenied');
    } else {
        this.next();
    }
}

//hook that requires login in order to access user dashboard
Router.onBeforeAction(genLogin, {only: 'userDashboard'});
//hook that requires admin authentication to access admin dashboard
Router.onBeforeAction(requireLogin, {only: 'admin'});