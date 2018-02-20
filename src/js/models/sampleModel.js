define(function(require) {
    var Backbone = require('backbone');

    var SampleModel = Backbone.Model.extend({ //class

        defaults: {
            id: 1,
            name: "abc",
            address: "BBBB",
            cellPhone: 90000000,
            email: "abc@gmail.com"
        },
        //urlRoot: 'api/emps',
        initialize: function(options) {
            console.log('sampleModel has been intialized',options);
            // Lets hook up some event handers to listen to model change
            this.on('change', function() {
                if (this.hasChanged('ID')) {
                    console.log('ID has been changed');
                }
                if (this.hasChanged('BookName')) {
                    console.log('BookName has been changed');
                }
            });
        },

       /*constructor: function(attributes, options) {
            console.log('constructor had been called', attributes);
        },*/

        showAlert: function() {
            alert('ID: ' + this.get('ID') + ', BookName: ' + this.get('BookName'));
        }
    });

    return SampleModel;
});