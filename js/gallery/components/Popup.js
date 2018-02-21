// POPUP WINDOW CLASS
function Popup(project,index){

  // console.log("new popup!");

  // variables
  var $popup_wrapper = '#popup-wrapper';
  var $exit_button = '.popup-window__exit-button';

  // call these functions

  create_html_element(project,$popup_wrapper);
  exit_button_click_handler($exit_button,$popup_wrapper);
  enable_window_scrolling(false);

  // create popup element

  function create_html_element(d){

    var first_img = DATA_PATH_HTML + index.folder_name + '/img/' + index.img[0];

    var html_string = '';
    html_string += '<div class="popup-window">';
    html_string += '<img class="popup-window__exit-button" src="' + IMG_PATH_HTML + 'x-icon-white.png" />';
    html_string += '<section><h1 class="popup-window__title">' + d.title+ '</h1>';
    html_string += '<p class="popup-window__description--short">' + d.description.short + '</p></section>';
    // if there is a video show video first otherwise show image
    if(d.video.length > 1){
      html_string += '<div class="popup-window__video-container">';
      html_string += '<iframe frameBorder="0" src="' + d.video +'"> </iframe></div>';
    }else{
      html_string += '<img class="popup-window__image--main" src="' + first_img + '" />';
    };
    html_string += '<section><p class="popup-window__description--long">' + 'Lorem ipsum' + '</p></section>';
    html_string += '</div>';

    // append popup window to the wrapper element
    $('#popup-wrapper').html(html_string);
    $('#popup-wrapper').css("display","block");
  };

  // enable/disable window scrolling

  function enable_window_scrolling(scrolling_bool){
    if(scrolling_bool){
      $('body').removeClass("js-prevent-scrolling");
    }else{
      $('body').addClass("js-prevent-scrolling");
    }
  }

  // set up the click handler for button wrapper

  function exit_button_click_handler(button,wrapper){
      $(button).click(function(){
        $(wrapper).css("display","none");
        enable_window_scrolling(true);
    });
  }

}
