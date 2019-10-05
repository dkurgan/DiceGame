var random1;
var random2;

general.addEventListener('click', function(){
  $('.dis').fadeOut(400);
  setTimeout(function(){
  $("#head").show();
  $("#btn").css("display", "inline");
  $('#head').html("Let's Fight!");
  $('.dice').css("visibility", "visible");}, 420);
});

leftDice.addEventListener('click', function(){
  $('#leftDice').addClass("pressed");
  setTimeout(function(){ $('#leftDice').removeClass('pressed'); }, 200);
});

btn.addEventListener('click', function(){
  randomNum();
  changeDice();
  $('#hide').slideDown();
  if (random1 > random2){
    $('#hide').html("Player 1 won!");
  }
 else if(random1 < random2) {
   $('#hide').html("Player 2 won!");
 }
 else { $('#hide').html("Draw won!"); }
  console.log(random1);
  console.log(random2);
});

$(document).keypress(function(event){
  event.key == 's' ? alert("suka") : alert("Dont touch buttons!");
});

function randomNum(){
  random1 = Math.round(Math.random() * 10);
  random2 = Math.round(Math.random() * 10);
  if ((random1 > 6 || random1 == 0) || (random2 > 6 || random2 == 0)){
    randomNum();
  }
}

function changeDice(){
  $('#leftDice').attr("src", 'img/' + random1 + '.png');
  $('#rightDice').attr('src', 'img/' + random2 + '.png');
}
