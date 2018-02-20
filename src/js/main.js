require.config({
   baseUrl: "../src/",
    paths: {
        jquery: 'libs/jquery',
        //bootstrap:'libs/bootstrap',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        handlebar: 'libs/handlebars'
    },
    shim: {
        'backbone': {
            deps: ['jquery','underscore'],
            exports:'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        /*'bootstrap':{
            deps:['jquery'],
            exports:'Bootstrap'
        },*/
        'handlebar': {
            exports: 'Handlebars'
        }
    }
});
//called initial view
require(['js/app'], function(App) {
    console.log("start application",App);
});