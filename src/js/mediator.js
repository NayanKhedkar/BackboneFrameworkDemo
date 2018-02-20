define(function(require) {
    var Backbone = require('backbone');
    var Mediator = {};
    _.extend(Mediator, Backbone.Events);

    Mediator.initialize = _.once(function() {
        //Backbone.history.start();
        Mediator.trigger('mediator:initialize');
    });
    Mediator.register = function(name, obj) {
        console.log("Register here", +name);

    }
    return Mediator;

});