 $( document ).ready(function() {

    var numberToGuess = Math.floor(Math.random() * 120) + 20;

    var counter = 0;

    var numbers = Math.floor(Math.random() *12) +1;

   // var wins = 0;

   // var losses = 0;

    $('#number').text(numberToGuess);

    for (var i=0; i< numbers.length; i++){

      var imageCrystal = $('<img >');
      
      imageCrystal.attr('data-num', numbers[i]);

      imageCrystal.attr('rocks');

      imageCrystal.attr('alt', 'crystals');

      imageCrystal.addClass('rocks');

      $('#crystals').append(imageCrystal);
    }

    //function record(){

   // }

    
    $('.rocks').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#yourNumber').text(counter);

      var wins = 0;
      var losses = 0;

      if (counter == numberToGuess){
        wins++;
      }else if( counter > numberToGuess){
        losses++;
      }
    });

  });