var data_for_menu_view = {
    title: 'Aktywności grupowe',
    background: 'W grupie',
    one: 'Turystyka',
    two: 'Kultura',
    three: 'Aktywny wypoczynek',
    four: 'Warsztaty',
    five: 'Edukacja',
    six: 'brak'
};
var data_for_sam_view = {
    title: 'Aktywności indywidualne',
    background: 'Samemu',
    one: 'Gry',
    two: 'Zakupy',
    three: 'Edukacja',
    four: 'Sport',
    five: 'brak',
    six: 'brak'
};

var data_for_together_view = {
    title: 'Aktywności grupowe',
    background: 'W grupie',
    one: 'Turystyka',
    two: 'Kultura',
    three: 'Edukacja',
    four: 'Warsztaty',
    five: 'Aktywny wypoczynek',
    six: 'brak'
};
var data_for_main_view = {
    title: 'Dziarski Dziadek',
    background: 'logo',
    one: 'Samemu',
    two: 'W grupie',
    three: 'brak',
    four: 'brak',
    five: 'brak',
    six: 'brak'
};



var getData = function (view) {
    if (view == 'details')
        return data_for_details_view;
    else if (view == 'menu')
        return data_for_menu_view;
    else if (view == 'together')
        return data_for_together_view;
    else if (view == 'sam')
        return data_for_sam_view;
    else if (view == 'main')
        return data_for_main_view;
    else
        return null;
};


Handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});


var switchView = function(from, to) {

   // if (to=='together','sam','')
    var tmpl = Handlebars.getTemplate('menu-screen');
    var rendered = tmpl(getData(to));

    $("body").append(rendered);
    $("#"+to+"-screen").css('display','none');
    $("#"+from+"-screen").fadeOut();
    $("#"+to+"-screen").fadeIn({queue: false});


    // Possible scenarios
    if (from == 'main' && to == 'menu') {
        $("#main-screen").remove();
        $("#menu-screen #back-link").bind('click', function () {
            switchView('menu', 'main');
        });
        $("#practical-info-link").bind('click',function() {
            switchView('menu','quick-guide');
        })
    } else if (from == 'menu' && to == 'main') {
        $("#menu-screen").remove();
        $("#main-screen #header a").bind('click', function () {
            switchView('main', 'menu');
        });
        initMap();
    } else if (from == 'main' && to == 'details') {
        $("#main-screen").remove();
        $("#details-screen #back-icon").bind('click', function () {
            switchView('details', 'main');
        });
    } else if (from == 'details' && to == 'main') {
        $("#details-screen").remove();
        $("#main-screen #header a").bind('click', function () {
            switchView('main', 'menu');
        });
        initMap();
    } else if (from == 'menu' && to == 'quick-guide') {
        $("#menu-screen").remove();
        $("#quick-guide-screen #back-link").bind('click', function () {
            switchView('quick-guide', 'menu');
        });
    } else if (from == 'quick-guide' && to == 'menu') {
        $("#quick-guide-screen").remove();
        $("#menu-screen #back-link").bind('click', function () {
            switchView('menu', 'main');
        });
        $("#practical-info-link").bind('click',function() {
            switchView('menu','quick-guide');
        })
    }
};

switchView('','main');

$("#main-screen #header a").bind('click', function () {
    switchView('main', 'menu');
});

