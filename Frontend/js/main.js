var places = {};

var markerTemp;
var type;
var map;
var service;
var infoWindow;

Handlebars.getTemplate = function (name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        $.ajax({
            url: 'templates/' + name + '.handlebars',
            success: function (data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(data);
            },
            async: false
        });
    }
    return Handlebars.templates[name];
};

var nowMode = function() {
    if (window.onlyNowOpened == true) {
        window.onlyNowOpened = false;
    } else {
        window.onlyNowOpened = true;
    }
}