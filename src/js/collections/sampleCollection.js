define(function(require) {
    var Backbone = require('backbone');
    var SampleModel = require('js/models/sampleModel');

    var SampleCollection = Backbone.Collection.extend({

        model: SampleModel,
        //url: 'api/emps',
        url: 'src/json/sampleJson.json',

        initialize: function() {
            console.log("Collection Initialized");
            this.loadData();

        },
        loadData: function() {
            this.fetch({
                success: function(response, xhr) {
                    console.log("Inside success");
                    console.log(response);
                },
                error: function(errorResponse) {
                    console.error("ERROR: unable to load file " + this.url);
                }
            });
        }
        /*,
        parse: function(response) {
            console.log("employees",response);
            return response.data;
        }*/

    });
    return SampleCollection;
});