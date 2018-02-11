var $INSTRUCTIONS;
var g_width;
var g_height;

var INSTRUCTIONS_ARRAY = [
  'Hello there! Move around with your mouse and see what happens!',
  'Want to challenge a computer at pong? Go ahead! (Move your paddle up and down with arrow keys)',
  'You\'re doing great! Now press any number key on your keyboard!'
];

function counter_update(up){
  //console.log('update sketch!');
  var old_counter = g_sketch_array_counter;
  if(up){
    g_sketch_array_counter++;
    if(g_sketch_array_counter == g_num_of_sketches){
      g_sketch_array_counter = 0;
    }
  }else{
    g_sketch_array_counter--;
    if(g_sketch_array_counter < 0){
      g_sketch_array_counter = g_num_of_sketches-1;
    }
  }
  var new_counter = g_sketch_array_counter;
  text_update(old_counter,new_counter);
}

function text_update(prev_counter,new_counter){
  console.log('prev counter is',prev_counter,'new counter is', new_counter);

  //fade out old
  $INSTRUCTIONS.hide();
  setTimeout(function(){
    new_counter === 1 ? $INSTRUCTIONS.css({"color":"white","background-color":"black"}) : $INSTRUCTIONS.css({"color":"black","background-color":"none"});
    $INSTRUCTIONS.text(INSTRUCTIONS_ARRAY[new_counter]).fadeIn();
    setTimeout(function(){
      $INSTRUCTIONS.fadeOut();
    },3000);
  },1000);



  // fade in new
};


$(document).ready(function(){
  $INSTRUCTIONS = $('.instructions_text');
  console.log('we have loaded!');
  g_width = $( window ).width();
  g_height = $( window ).height();
  //fill in text
  $INSTRUCTIONS.text(INSTRUCTIONS_ARRAY[0]);
  //setTimeout(function(){ $('.instructions_text').text(INSTRUCTIONS_ARRAY[1]);}, 3000);

  $('.update_button').click(function(e){
    //console.log('forward button is pressed!');
    console.log(e.target.id);
    var move_on = e.target.id === "forward_button" ? true : false;
    counter_update(move_on);
    //text_update();
  });

});

/*<iframe src="./myPage.aspx" id="myIframe" scrolling="no" frameborder="0"
    style="position: relative; height: 100%; width: 100%;">
...
</iframe>*/
