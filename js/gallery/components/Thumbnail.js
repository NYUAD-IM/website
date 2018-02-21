function Thumbnail(project,index){

    // console.log(project,index);

    //call these functions

    var metadata_string = create_metadata_string(project.tags);
    create_html_element(metadata_string);

    // create metadata string, embedded as data attributes to the html element

    function create_metadata_string(tag_obj){
      var tag_keys = Object.keys(tag_obj);
      var tag_values = Object.values(tag_obj);
      var string = '';
      tag_keys.forEach(function(e,i){
          string += 'data-' + e + '="' + tag_values[i] + '" ';
      });
      return string;
  }

  //create HTML elements

    function create_html_element(metadata){
      // thumbnail img path
      var thumbnail_img = PROJECTS_PATH_HTML + index.folder_name + '/img/' + index.img[0];
      var htmlString = '';
      htmlString = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 thumb" ' + metadata + ' >';
      htmlString += '<div class="overlay-container"> ';
      htmlString += '<div class="overlay-image-container"><img class="img-responsive" src=' + thumbnail_img + ' alt=""/></div>';
      // htmlString += '<div class="overlay-image-container">'+ create_image_element(project.images[0]) + '</div>';
      htmlString += '<div class="overlay-container::after"><div class="title-line"><strong>' + project.title + '</strong>  <span class="title-line-author"><br>by ' + project.authors + '</span></div>';
      htmlString += '<div class="meta-line">' + project.tags.semester + '</div></div>';
      htmlString += '</div> </div>';
      var $my_el = $(htmlString).appendTo('#gallery-container');
      create_click_handler($my_el,project);
    }

    function create_click_handler($el,project){
      $el.click(function(e){
        new Popup(project,index);
      });
    }

};


//utility methods for filtering data

Thumbnail.filter = function(filterCategory,filterName){

    $grid.isotope({
        filter: function() {
            //read the data for the target category appended to thumbnail items previously. $(this) refers to the thumbnail item (.thumb)
            var classFilter = $(this).data(filterCategory).toLowerCase();
            //in case the data value for a specific category is an array, split it into an array of values
            var dataArray = classFilter.split(",");
            //display a thumbnail item if it's metadata contains a tag value that matches the filter tag
            for(var i = 0; i < dataArray.length; i++){
              if(dataArray[i] == filterName){
                return dataArray[i] == filterName; // return true to show, false to hide
            };

          };
        }
    });

};

Thumbnail.apply_no_filter = function(){
  console.log("called!");
  $grid.isotope({
    filter: '*'
  });
};

Thumbnail.random_sort = function(){
  console.log("called!");
  $grid.isotope({
    sortBy : 'random'
  });
};
