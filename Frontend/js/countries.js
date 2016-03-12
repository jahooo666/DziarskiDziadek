 var country = new Array();

/* generates a random integer between 0 to 179 */

 var sr = Math.floor(Math.random() * 180);

/* stores the country name */

 var temp = country[sr];

/* declaring and initializing tries */

 var tries = 0;

/* the main function */

 function guessit()
 {

   var guess = $('#guess1');

   tries++;

   window.status = "Tries : " + tries;

   switch(tries)
   {

     case 1:
     $('#hint').html( "Podpowiedź: Nazwa kraju zaczyna się na literę " + temp.charAt(0));
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

   if(guess.val().toUpperCase() == temp)  /* if guess equals to temp */
   {

     if(window.confirm("Absolutely Right ! Yes the country was " + temp + "\nDo you want to play again?"))
      window.location.reload();     /* reloads the page for a new game */

   }

   else
   {

     if(tries == 5) /* game over */
     {

    if(window.confirm("Sorry ! Your chances over. The country was  " + temp + "\nDo you want to play again?"))
    {
      window.location.reload(); /* reloads the page for a new game */

      $('#hint').html( "Wpisz nazwę państwa i kliknij ZGADUJ!");

    }

     }

   }

 }


 function catchKeyCode() //calls when the user press the RETURN key
 {

   if(event.keyCode == 13)
    guessit();

 }

 function clearBox()
 {

   $('#guess1').val("");

 }

 function newGame()
 {
     window.location.reload();  /* reloads the page for a new game */

     $('#hint').html("Odgadnij nazwę kraju");
 }

