/**
 * Created by Jan on 2016-03-12.
 */


var rad = function (x) {
    return x * Math.PI / 180;
};

var getDistance = function (p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p2.lat() - p1.lat);
    var dLong = rad(p2.lng() - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat())) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // returns the distance in meter
};

function performSearch() {
    var atms;
    var container = [];
    if (atm) {
        atms = {
            bounds: map.getBounds(),
            type: 'atm',
            openNow: onlyNowOpened
        };
        container.push(atms)
    }
    var bar = {
        bounds: map.getBounds(),
        type: 'bar',
        openNow: onlyNowOpened

    };
    var restaurant = {
        bounds: map.getBounds(),
        type: 'restaurant',
        openNow: onlyNowOpened

    };
    container.push(bar);
    container.push(restaurant);
    for (con in container) {
        service.nearbySearch(container[con], callback);
    }
}



function callback(results, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
        console.error(status);
        return;
    }

    for (var i = 0, result; result = results[i]; i++) {
        con = true;
        for (loc in riverCenter) {
            if (con == false) {
                con = true;
                break;
            }
            if ((getDistance(riverCenter[loc], result.geometry.location) < 600)) {
                console.log(result);
                addMarker(result);
                con = false;
            }
        }
    }
}

function addMarker(place) {
    var image;
    if (place['types'].indexOf('bar') > -1) {
        image = {
            url: "https://maxcdn.icons8.com/Color/PNG/24/Food/bar-24.png",
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(30, 30)
        }
    } else if (place['types'].indexOf('restaurant') > -1) {
        image = {
            url: "https://maxcdn.icons8.com/iOS7/PNG/25/City/restaurant_membership_card-25.png",
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(30, 30)
        }
    } else if (place['types'].indexOf('atm') > -1) {
        image = {
            url: "http://atmhero.com/wp-content/uploads/2015/12/icon-atm.png",
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(30, 30)
        }
    } else if (place['types'].indexOf('atm') > -1) {
        image = {
            url: "http://atmhero.com/wp-content/uploads/2015/12/icon-atm.png",
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(30, 30)
        }
    }
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: image
    });

    google.maps.event.addListener(marker, 'click', function () {
        service.getDetails(place, function (result, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                console.error(status);
                return;
            }
            infoWindow.setContent('<a href="#" onclick="switchView(\'main\',\'details\');"><p>' + result.name + '</p><p>' + result.vicinity + '</p></a>');
            infoWindow.open(map, marker);
        });
    });

    var longpress = false;
    google.maps.event.addListener(map, 'click', function (event) {
        if (longpress) {
            console.log('longpress');
            addCustomMarker(event.latLng)
        } else {
            console.log('shortpress');
        }
    });
    google.maps.event.addListener(map, 'mousedown', function () {

        start = new Date().getTime();
    });
    google.maps.event.addListener(map, 'mouseup', function () {
        end = new Date().getTime();
        longpress = (end - start >= 500);
    });
}







function callback(results, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
        console.error(status);
        return;
    }

    for (var i = 0, result; result = results[i]; i++) {
        con = true;
        for (loc in riverCenter) {
            if (con == false) {
                con = true;
                break;
            }
            if ((getDistance(riverCenter[loc], result.geometry.location) < 600)) {
                console.log(result);
                addMarker(result);
                con = false;
            }
        }
    }
}

function addMarker(place) {
    var image;
    if (place['types'].indexOf('bar') > -1) {
        image = {
            url: "https://maxcdn.icons8.com/Color/PNG/24/Food/bar-24.png",
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(30, 30)
        }
    } else if (place['types'].indexOf('restaurant') > -1) {
        image = {
            url: "https://maxcdn.icons8.com/iOS7/PNG/25/City/restaurant_membership_card-25.png",
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(30, 30)
        }
    } else if (place['types'].indexOf('atm') > -1) {
        image = {
            url: "http://atmhero.com/wp-content/uploads/2015/12/icon-atm.png",
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(30, 30)
        }
    } else if (place['types'].indexOf('atm') > -1) {
        image = {
            url: "http://atmhero.com/wp-content/uploads/2015/12/icon-atm.png",
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(30, 30)
        }
    }
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: image
    });

    google.maps.event.addListener(marker, 'click', function () {
        service.getDetails(place, function (result, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                console.error(status);
                return;
            }
            infoWindow.setContent('<a href="#" onclick="switchView(\'main\',\'details\');"><p>' + result.name + '</p><p>' + result.vicinity + '</p></a>');
            infoWindow.open(map, marker);
        });
    });

    var longpress = false;
    google.maps.event.addListener(map, 'click', function (event) {
        if (longpress) {
            console.log('longpress');
            addCustomMarker(event.latLng)
        } else {
            console.log('shortpress');
        }
    });
    google.maps.event.addListener(map, 'mousedown', function () {

        start = new Date().getTime();
    });
    google.maps.event.addListener(map, 'mouseup', function () {
        end = new Date().getTime();
        longpress = (end - start >= 500);
    });
}


readURL = function () {

    input = $('[name=obraz]')[0];
    tekst = $('[name=text]')[0];
    console.log(markerTemp.position.toString());
    console.log(places[markerTemp.position.toString()]);
    places[markerTemp.position.toString()] = {'input': input, 'tekst': tekst};

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .css('width', '100px', 'height', 'auto')
                .removeClass('invisible')
        };
        reader.readAsDataURL(input.files[0]);
        $('#descr')
            .text(tekst.value)
            .removeClass('invisible')
    }
};


accept = function (e) {
    markerTemp.addListener('click', function () {
        input = places[markerTemp.position.toString()].input;
        tekst = places[markerTemp.position.toString()].tekst;
        var divA = document.createElement("div");
        divA.className = ('container col-md-12');
        var divI = document.createElement("div");
        var divT = document.createElement("div");

        divI.className = ('col-md-6');
        divT.className = ('col-md-6');

        var image = document.createElement("img");
        var text = document.createElement("p");

        divI.appendChild(image);
        divT.appendChild(text);

        divA.appendChild(divI);
        divA.appendChild(divT);

        var reader = new FileReader();
        reader.onload = function (e) {
            image.src = (e.target.result);
            image.className = 'thumb';

        };
        reader.readAsDataURL(input.files[0]);
        text.textContent = (tekst.value);
        text.className = 'txt';
        infoWindow.setContent(divA);
        infoWindow.open(map, markerTemp);
    });
    infoWindow.close(map, markerTemp);
    return false;
};
addCustomMarker = function (latLng) {
    var marker = new google.maps.Marker({
        map: map,
        position: latLng
    });
    markerTemp = marker;
    google.maps.event.addListener(marker, 'click', function () {
        console.log($('#plate').html());
        infoWindow.setContent($('#plate').html());
        infoWindow.open(map, marker);
    });
};


var data_for_details_view = {
    name: 'Hocki Klocki Bar',
    description: 'Przyjazna klubokawiarnia, w której można usiąść, odprężyć się i delektować chwilą.',
    website: 'http://www.hockiklocki.pl',
    hours: '11:00-02:00',
    price: 'Przystępna',
    photos: ["img/photos/HckKlck/0.jpg","img/photos/HckKlck/1.jpg","img/photos/HckKlck/2.jpg"],
    background: "img/photos/HckKlck/0.jpg"
};

var data_for_menu_view = {
    title: 'Hasta la Wisła, bejbe',
    gastronomy_label: 'Gastronomia',
    sport_label: 'Ruch',
    music_and_dance_label: 'Muzyka & Taniec',
    info_label: 'Informacje praktyczne',
    nature_label: 'Natura',
    inne_label: 'Inne'

};


// Possible scenarios
if (from == 'main' && to == 'menu') {
    $("#main-screen").remove();
    $("#menu-screen #back-link").bind('click', function () {
        switchView('menu', 'main');
    });
    $("#practical-info-link").bind('click', function () {
        switchView('menu', 'quick-guide');
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
    $("#practical-info-link").bind('click', function () {
        switchView('menu', 'quick-guide');
    })
}
}
;


//<img src="img/logo/HastaLaWislaNiskie.png" onclick="if(this.src === 'http://edi.iem.pw.edu.pl/~matlaczm/wawcode/Frontend/img/logo/HastaLaWislaNiskie.png') { this.src='img/logo/HastaLaWislaLunetaNiski.png'} else { this.src='img/logo/HastaLaWislaNiskie.png' }"alt="Hasta la Wisła" id="logo"/>