 var country =[
"Abchazja",
"Afganistan",
"Albania",
"Algieria",
"Andora",
"Angola",
"Antigua i Barbuda",
"Arabia Saudyjska",
"Argentyna",
"Armenia",
"Australia",
"Austria",
"Azerbejdżan",
"Bahamy",
"Bahrajn",
"Bangladesz",
"Barbados",
"Belgia",
"Belize",
"Benin",
"Bhutan",
"Białoruś",
"Birma",
"Boliwia",
"Bośnia i Hercegowina",
"Botswana",
"Brazylia",
"Brunei",
"Bułgaria",
"Burkina Faso",
"Burundi",
"Chile",
"Chiny",
"Chorwacja",
"Cypr",
"Cypr Północny",
"Czad",
"Czarnogóra",
"Czechy",
"Dania",
"Demokratyczna Republika Konga",
"Dominika",
"Dominikana",
"Dżibuti",
"Egipt",
"Ekwador",
"Erytrea",
"Estonia",
"Etiopia",
"Fidżi",
"Filipiny",
"Finlandia",
"Francja",
"Gabon",
"Gambia",
"Ghana",
"Górski Karabach",
"Grecja",
"Grenada",
"Gruzja",
"Gujana",
"Gwatemala",
"Gwinea",
"Gwinea Bissau",
"Gwinea Równikowa",
"Haiti",
"Hiszpania",
"Holandia",
"Honduras",
"Indie",
"Indonezja",
"Irak",
"Iran",
"Irlandia",
"Islandia",
"Izrael",
"Jamajka",
"Japonia",
"Jemen",
"Jordania",
"Kambodża",
"Kamerun",
"Kanada",
"Katar",
"Kazachstan",
"Kenia",
"Kirgistan",
"Kiribati",
"Kolumbia",
"Komory",
"Kongo",
"Korea Południowa",
"Korea Północna",
"Kosowo",
"Kostaryka",
"Kuba",
"Kuwejt",
"Laos",
"Lesotho",
"Liban",
"Liberia",
"Libia",
"Liechtenstein",
"Litwa",
"Luksemburg",
"Łotwa",
"Macedonia",
"Madagaskar",
"Malawi",
"Malediwy",
"Malezja",
"Mali",
"Malta",
"Maroko",
"Mauretania",
"Mauritius",
"Meksyk",
"Mikronezja",
"Mołdawia",
"Monako",
"Mongolia",
"Mozambik",
"Naddniestrze",
"Namibia",
"Nauru",
"Nepal",
"Niemcy",
"Niger",
"Nigeria",
"Nikaragua",
"Norwegia",
"Nowa Zelandia",
"Oman",
"Osetia Południowa",
"Pakistan",
"Panama",
"Papua-Nowa Gwinea",
"Paragwaj",
"Peru",
"Polska",
"Portugalia",
"Republika Południowej Afryki",
"Republika Środkowoafrykańska",
"Republika Zielonego Przylądka",
"Rosja",
"Rumunia",
"Rwanda",
"Sahara Zachodnia",
"Saint Kittsi Nevis",
"Saint Lucia",
"Salwador",
"Samoa",
"San Marino",
"Senegal",
"Serbia",
"Seszele",
"Sierra Leone",
"Singapur",
"Słowacja",
"Słowenia",
"Somalia",
"Somaliland",
"Sri Lanka",
"Stany Zjednoczone",
"Suazi",
"Sudan",
"Sudan Południowy",
"Surinam",
"Syria",
"Szwajcaria",
"Szwecja",
"Tadżykistan",
"Tajlandia",
"Tajwan",
"Tanzania",
"Timor Wschodni",
"Togo",
"Tonga",
"Trynidadi Tobago",
"Tunezja",
"Turcja",
"Turkmenistan",
"Tuvalu",
"Uganda",
"Ukraina",
"Urugwaj",
"Uzbekistan",
"Vanuatu",
"Watykan",
"Wenezuela",
"Węgry",
"Wielka Brytania",
"Wietnam",
"Włochy",
"Wybrzeże Kości Słoniowej",
"Wyspy Salomona",
"Wyspy Świętego Tomasza i Książęca",
"Zambia",
"Zimbabwe",
"Zjednoczone Emiraty Arabskie"
        ]


/* generates a random integer between 0 to 179 */

 var sr = Math.floor(Math.random() * 217);

/* stores the country name */

 var temp = country[sr];

/* declaring and initializing tries */

 var tries = 0;

/* the main function */

 function guessit() {
     var xmlHttp = new XMLHttpRequest();
     xmlHttp.onreadystatechange = function () {
         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
             console.log(xmlHttp.responseText);
     }
     xmlHttp.open("GET", "http://127.0.0.1:5000/event/1", true); // true for asynchronous
     xmlHttp.send(null);


     var guess = $('#guess1');

     tries++;

     window.status = "Tries : " + tries;

     switch (tries) {

         case 1:
             $('#hint').html("Podpowiedź: Nazwa kraju zaczyna się na literę " + temp.charAt(0));
             break;

         case 2:
             $('#hint').html("Podpowiedź: Nazwa kończy się na literę: " + temp.charAt(temp.length - 1));
             break;

         case 3:
             $('#hint').html("Ostatnia podpowiedź: Nazwa składa się z " + temp.length + " liter");
             break;

         default:
             $('#hint').html("Nie mam więcej podpowiedzi:(");

     }

     if (guess.val().toUpperCase() == temp)  /* if guess equals to temp */
     {

         if (window.confirm("Absolutely Right ! Yes the country was " + temp + "\nDo you want to play again?"))
             window.location.reload();
         /* reloads the page for a new game */

     }

     else {

         if (tries == 5) /* game over */
         {

             if (window.confirm("Sorry ! Your chances over. The country was  " + temp + "\nDo you want to play again?")) {
                 window.location.reload();
                 /* reloads the page for a new game */

                 $('#hint').html("Wpisz nazwę państwa i kliknij ZGADUJ!");

             }

         }

     }


     function catchKeyCode() //calls when the user press the RETURN key
     {

         if (event.keyCode == 13)
             guessit();

     }

     function clearBox() {

         $('#guess1').val("");

     }

     function newGame() {
         window.location.reload();
         /* reloads the page for a new game */

         $('#hint').html("Odgadnij nazwę kraju");
     }
 }

