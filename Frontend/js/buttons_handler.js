var data_for_details_view = {
    name: '',
    description: '',
    website: '',
    hours: '',
    price: '',
    photos: ["img/photos/HckKlck/0.jpg","img/photos/HckKlck/1.jpg","img/photos/HckKlck/2.jpg"]
};

var data_for_menu_view = {
    title: 'Aktywności grupowe',
    background: 'grupa3',
    one: 'Turystyka',
    two: 'Kultura',
    three: 'Aktywny wypoczynek',
    four: 'Warsztaty',
    five: 'Edukacja'
    //,six: 'szesc'
};

//var data_for_together_view = {
//    title: 'Aktywności grupowe',
//    one: 'Turystyka',
//    two: 'Kultura',
//    three: 'Aktywny wypoczynek',
//    four: 'Warsztaty',
//    five: 'Edukacja'
//    //,six: 'szesc'
//};




var getData = function (view) {
    if (view == 'details')
        return data_for_details_view;
    else if (view == 'menu')
        return data_for_menu_view;
    else if (view == 'together')
        return data_for_together_view;
    else
        return null;
};


var switchView = function(from, to) {

    var tmpl = Handlebars.getTemplate(to+'-screen');
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

switchView('','menu');
$("#main-screen #header a").bind('click', function () {
    switchView('main', 'menu');
});

