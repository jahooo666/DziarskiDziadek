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
    two: 'Kultura',
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
    title: '',
    background: 'logo',
    one: 'Samemu',
    two: 'W grupie',
    three: 'brak',
    four: 'brak',
    five: 'brak',
    six: 'brak'
};




var data_for_turystyka_list_view = {title: 'Turystyka'};
var data_for_kultura_list_view = {title: 'Kultura'};
var data_for_edukacja_list_view = {title: 'Edukacja'};
var data_for_warsztaty_list_view = {title: 'Warsztaty'};
var data_for_AktywnyWypoczynek_list_view = {title: 'Aktywny wypoczynek'};



var data_for_gry_list_view = { title: 'Gry'};


//var data_for_list_view = { title: 'turystyka'};

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
    else if (view == 'turystyka-list')
        return data_for_turystyka_list_view;
    else if (view == 'kultura-list')
        return data_for_kultura_list_view;
    else if (view == 'edukacja-list')
        return data_for_edukacja_list_view;
    else if (view == 'warsztaty-list')
        return data_for_warsztaty_list_view;
    else if (view == 'aktywny wypoczynek-list')
        return data_for_AktywnyWypoczynek_list_view;
    else if (view == 'gry-list')
        return data_for_gry_list_view;
    else
        return null;
};


Handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

Handlebars.registerHelper('list', function (items, options) {
    var out = '<ul id="listaEventow/">';
    for (var i = 0, l = items.length; i < l; i++) {
        out = out + "<li>" + items[i] + "</li>";
    }
    return out + "</ul>";
});


var togetherBinder = function () {
    $("#together-screen #back-link").bind('click', function () {
        switchView('together', 'main');
    });
    $("#together-screen #one").bind('click', function () {
        switchView('together', 'turystyka-list');
    });
    $("#together-screen #two").bind('click', function () {
        switchView('together', 'kultura-list');
    });
    $("#together-screen #three").bind('click', function () {
        switchView('together', 'edukacja-list');
    });
    $("#together-screen #four").bind('click', function () {
        switchView('together', 'warsztaty-list');
    });

    $("#together-screen #five").bind('click', function () {
        switchView('together', 'aktywny wypoczynek-list');
    });
};


var samBinder = function () {
    $("#sam-screen #back-link").bind('click', function () {
        switchView('sam', 'main');
    });
    $("#sam-screen #one").bind('click', function () {
        switchView('sam', 'gry-list');
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

var listBinderSam = function () {
    $("#list-screen #back-link").bind('click', function () {
        switchView('list', 'sam');
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
    else if (from == 'together' && to == 'turystyka-list') {
        $("#together-screen").remove();
        listBinder();
    }
    else if (from == 'together' && to == 'kultura-list') {
        $("#together-screen").remove();
        listBinder();
    }
    else if (from == 'together' && to == 'edukacja-list') {
        $("#together-screen").remove();
        listBinder();
    }
    else if (from == 'together' && to == 'warsztaty-list') {
        $("#together-screen").remove();
        listBinder();
    }
    else if (from == 'together' && to == 'aktywny wypoczynek-list') {
        $("#together-screen").remove();
        listBinder();
    }
    else if (from == 'sam' && to == 'gry-list') {
        $("#sam-screen").remove();
        listBinderSam();
    }
    else if (from == 'gry-list' && to == 'sam') {
        $("#gry-list-screen").remove();
        samBinder();
    }

};

switchView('', 'main');
mainBinder();