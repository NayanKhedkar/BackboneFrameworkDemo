define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebar'),
        Mediator = require('../mediator');

    var SampleView = Backbone.View.extend({

        className: "sample-class",
        //model: SampleModel,
        //tagName: 'ol',//default div
        //template: _.template( $('#sampleTemplate').html()),
        events: {
            'click': 'onViewClick'
        },
        initialize: function() {
            this.template = Handlebars.compile(template.get('sampleTemplate')); //provide template name
            //this.model.on('change', this.render, this);
            this.listenTo(Mediator, 'customEventName', this.onCustomEvent);
            console.log("sampleView initialize")
            this.render();
        },
        onCustomEvent: function() {
            console.log("Listen Custom event");
            //Mediator.trigger('customEventName', null);
        },
        onViewClick: function(event) {
            console.log("on click event");
        },

        render: function() {
            //renderning view here.
            this.$el.html(this.template(this.model.toJSON()));
            //$('.container').html(this.$el);
            return this;
        }
    });
    return SampleView;
});