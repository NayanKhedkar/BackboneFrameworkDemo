var template = null;
define(function(require) {
    var $ = require('jquery');
    var SampleCollection = require("js/collections/sampleCollection");
    var SampleModel = require("js/models/sampleModel");
    var SampleView = require('js/views/sampleView');
    template = {
        templates: {},
        templateUrl: 'src/templates/',
        loadTemplates: function(names, callback) {
            var that = this;
            var loadTemplate = function(index) {
                var name = names[index];
                console.log('Loading template: ' + name);
                $.get(that.templateUrl + name + '.html', function(data) {
                    that.templates[name] = data;
                    index++;
                    if (index < names.length) {
                        loadTemplate(index);
                    } else {
                        callback();
                    }
                });
            }
            loadTemplate(0);
        },
        get: function(name) {
            return this.templates[name];
        }
    };
    //provide the template names in array
    template.loadTemplates(['sampleTemplate'], function() {
        // Run App
        //initialize collection
        new SampleCollection();
        new SampleView({
            model: new SampleModel()
        });
    });
});