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
    title: 'Hoży Seniorzy',
    background: 'logo',
    one: 'Samemu',
    two: 'W grupie',
    three: 'brak',
    four: 'brak',
    five: 'brak',
    six: 'brak'
};

var data_for_list_view = {
    title: 'Hoży Seniorzy',
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
    else if (view == 'list')
        return data_for_list_view;
    else
        return null;
};


Handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});


var togetherBinder = function () {
    $("#together-screen #back-link").bind('click', function () {
        switchView('together', 'main');
    });
    $("#together-screen #one").bind('click', function () {
        switchView('together', 'list');
    });
};

var samBinder = function () {
    $("#sam-screen #back-link").bind('click', function () {
        switchView('sam', 'main');
    });
};


var mainBinder = function () {
    $("#main-screen #one").bind('click', function () {
        switchView('main', 'sam');
    });
    $("#main-screen #two").bind('click', function () {
        switchView('main', 'together');
    });
};


var listBinder = function () {
    $("#list-screen #back-link").bind('click', function () {
        switchView('list', 'together');
    });
};


var switchView = function(from, to) {

    var tmpl = Handlebars.getTemplate(to + '-screen');
    var rendered = tmpl(getData(to));

    $("body").append(rendered);
    $("#"+to+"-screen").css('display','none');
    $("#"+from+"-screen").fadeOut();
    $("#"+to+"-screen").fadeIn({queue: false});


    // Possible scenarios
    if (from == 'main' && to == 'together') {
        $("#main-screen").remove();
        togetherBinder();

    } else if (from == 'main' && to == 'sam') {
        $("#main-screen").remove();
        samBinder();

    }
    else if (from == 'sam' && to == 'main') {
        $("#sam-screen").remove();
        mainBinder();

    }
    else if (from == 'together' && to == 'main') {
        $("#together-screen").remove();
        mainBinder();
    }
    else if (from == 'together' && to == 'list') {
        $("#together-screen").remove();
        listBinder();
    }
    else if (from == 'list' && to == 'together') {
        $("#list-screen").remove();
        togetherBinder();
    }
};

switchView('', 'main');
mainBinder();