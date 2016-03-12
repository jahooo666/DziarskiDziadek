# -*- coding: utf-8 -*-
from flask import json

categories_group = ["turystyka", "kultura", "aktywny wypoczynek", "warsztaty", "edukacja"]
categories_indv = ["gry", "kultura", "edukacja","sport"]

events_lists = {'turystyka': [], 'kultura': [], 'aktywny wypoczynek': [], 'warsztaty': [], 'edukacja': []}


events = [
     {'category': ['kultura', 'aktywny_wypoczynek'], 'nazwa': "Migoświat", 'adres': u'Klub na Hożej', 'datetime': '05.03.2016', 'opis': ''},
     {'category': ['turystyka', "kultura"], 'nazwa': "Spacer filmowy", 'adres': u'Waryńskiego 10', 'datetime': '1.10.2015 15:10'},
     {'category': ['aktywny_wypoczynek'], 'nazwa': u"Ćwiczenia filmowe", 'adres': u'Waryńskiego 10', 'datetime': '1.10.2015 15:10'},
     {'category': ['edukacja'], 'nazwa': "Wykład filmowy", 'adres': u'Waryńskiego 10', 'datetime': '1.10.2015 15:10'}
]

events = [
  {
    "adres": "Klub na Hoża 41",
    "nazwa": "Migoświat",
    "opis": "Spotkanie autorskie z poetką Agnieszką Metko, wiersze autorki czyta: Joanna Kołakowska, wstęp wolny",
    "zdjecie": "http://dks.art.pl/uploads/acf11cd6kolejka2.jpg",
    "datetime": "05.03.2016 19.00",
    "url": "http://dks.art.pl/index.php?p=rep&s=1687val=&f=2016-03",
    "cena": 0,
    "category": [
      "kultura"
    ],
    "typ": "indw",
    "lat/long": "52.225658,21.0118732"
  },
  {
    "adres": "Międzypokoleniowa Klubokawiarnia, Anielewicza 5",
    "nazwa": "Pisanki - ozdoby wielkanocne",
    "opis": "Warsztaty prowadzone przez panią Krystynę Grzegocką, wstęp wolny.",
    "zdjęcie": 0,
    "datetime": "12.03.2016 13:00",
    "url": "http://dks.art.pl/index.php?p=rep",
    "cena": 0,
    "typ": "grup",
    "category": [
      "warsztaty"
    ],
    "lat/long": "52.2489492,20.996592"
  },
  {
    "adres": "ul. Zielna 39",
    "nazwa": "Akademia dobrego wychowania",
    "opis": "jak rozumiesz i jak radzisz sobie ze zmianami w zachowaniu osób starszych, w tym zachowaniami będącymi wynikiem procesów otępiennych",
    "zdjecie": 0,
    "datetime": "10.04.2016 11-16",
    "typ": "grup",
    "url": "http://syntonia.jimdo.com/blisko-bliskich/warsztaty-tematyczne-dla-rodzinnych-opiekun%C3%B3w-os%C3%B3b-starszych/",
    "cena": 0,
    "category": [
      "warsztaty",
      "edukacja"
    ],
    "lat/long": "52.236309,21.0040083"
  },
  {
    "adres": 0,
    "nazwa": "Klub Internetowy Seniorów",
    "opis": "Można dowiedzieć się jak bezpiecznie korzystać z internetu i nie paść ofiarom internetowych przestępców. Informacje: Stow. Kreatywni 50 Plus",
    "zdjecie": 0,
    "datetime": "17.03.2016 14:00",
    "url": 0,
    "typ": "grup",
    "cena": 0,
    "category": [
      "edukacja",
      "warsztaty"
    ],
    "lat/long": 0
  },
  {
    "adres": 0,
    "nazwa": "Funkcjonowanie Rad Osiedli",
    "opis": "spotkania dyskusyjne na temat samoorganizacji społeczności lokalnych, spotkania z radnymi rad osiedli",
    "zdjecie": 0,
    "datetime": "16.03.2016 17:00",
    "url": 0,
    "typ": "grup",
    "cena": 10,
    "category": [
      "edukacja"
    ],
    "lat/long": 0
  },
  {
    "adres": "Muzeum Woli. Laboratorium Miasta, ul. Srebrna 12",
    "nazwa": "Po woli do woli",
    "opis": "Podczas spotkania: zaprezentujemy i rozdamy wydrukowaną mapę oraz przeprowadzimy quiz z nagrodami, zaprosimy na wino oraz niespodziankę! :)  Po Woli spacerujemy z Wami już 5 lat! Przez ten czas zorganizowaliśmy kilkadziesiat wycieczek, odwiedziliśmy setki miejsc i przeszliśmy z Wami wiele, bardzo wiele kilometrów.  Teraz możecie przemierzyć samodzielnie szlaki naszych wycieczek dzięki wydanej przy wsparciu Dzielnicy Wola mapie Po Woli do woli.",
    "zdjecie": "http://www.maslaw.org.pl/images/phocagallery/2015-07-08_po-woli-do-woli-5-zapowiedz-mapy.png",
    "datetime": "07.07.2016 18.00",
    "url": "https://www.facebook.com/events/755044094593774/",
    "cena": 0,
    "typ": "indw",
    "category": [
      "kultura"
    ],
    "lat/long": 0
  },
  {
    "adres": "cmentarz od strony ul. Ostrowieckiej",
    "nazwa": "Powązki Wojskowe i film",
    "opis": "Spacer. Projekt   Warszawa też jest seniorka 2016!    wspófinansuje m.st. Warszawa.",
    "zdjecie": "http://i.wp.pl/a/f/jpeg/30963/net-13410074.jpeg",
    "datetime": "14.03.2016 11:00",
    "url": "http://zlotakaczka.waw.pl/#-informacja-pl-398.html",
    "cena": 0,
    "typ": "grup",
    "category": [
      "turystyka"
    ],
    "lat/long": 0
  },
  {
    "adres": "Plac Hallera",
    "nazwa": "Wycieczka Palmowe Podlasie",
    "opis": "Celem wyprawy jest tym razem pogranicze Mazowsza i Podlasia, a konkretnie, pewne miasto..  Urokliwy Ciechanowiec pamięta czasy księcia Witolda. Z dawien dawna nad Nurcem, prawym dopływem Bugu. W lewobrzeżnej częścci miasta ujrzymy stary rynek, piękny barokowy kościół Trójcy Przenajświętszej z pierwszej połowy XVIII wieku.",
     "zdjecie": "http://www.pttk-ciechanow.pl/aktualna/palmowa1.jpg",
    "datetime": "20.03.2016 7.00",
    "url": "http://zlotakaczka.waw.pl/#-informacja-pl-396.html",
    "cena": 85,
    "typ": "grup",
    "category": [
      "turystyka"
    ],
    "lat/long": 0
  },
  {
    "adres": "Czytelnia Naukowa nr 1, ul. św. Wincentego 85",
    "nazwa": "Warszawa i dobroczynność",
    "opis": "Zapraszamy na spotkanie varsavianistyczne!  Projekt   Warszawa też jest seniorką 2016!   współfinansuje m.st. Warszawa.",
    "zdjecie": "https://upload.wikimedia.org/wikipedia/commons/8/89/Palace_of_Culture_and_Science_nightshot.JPG",
    "datetime": "29.03.2016 17.00",
    "url": "http://zlotakaczka.waw.pl/#-informacja-pl-399.html",
    "cena": 0,
    "typ": "grup",
    "category": [
      "kultura"
    ],
    "lat/long": 0
  }
]


