Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {return Meteor.subscribe('uploads', Meteor.userId()),
        Meteor.subscribe('social', Meteor.userId()),
        Meteor.subscribe('hPackage', Meteor.userId());}
});


Router.route('/', {name: 'login'
});

Router.route('/admin', {name: 'admin',
    waitOn: function(){
        return Meteor.subscribe('allUploads'), Meteor.subscribe('allSocial'), Meteor.subscribe('allPackage');
    }
});


var requireLogin = function() {
    if(Meteor.userId() !== "XCTMw5caDHJJZG3C8") {
        this.render('accessDenied');
    } else {
        this.next();
    }
}


Router.onBeforeAction(requireLogin, {only: 'admin'});