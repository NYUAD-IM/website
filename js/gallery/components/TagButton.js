//tag object class
function TagButton(category,selector){

    // call these functions

    create_html_element(category,selector);

    //method to create DOM element

    function create_html_element(ctg,tag){
      //create HTML string
      var htmlString = '';
      htmlString += '<li class="tags tag-' + ctg + ' not-visible" ';
      htmlString += 'id="filter-' + tag + '">' + tag;
      htmlString += '<img src="' + IMG_PATH_HTML + 'x-icon-white.png" class="x-icon hidden"></li>';
      $(htmlString).data("toggleBool",false).prependTo('#active-tags-bar');
    };

};
