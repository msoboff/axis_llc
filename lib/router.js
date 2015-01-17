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