// global variables
var $grid;
var new_categ_object = {};
var DATA_PATH_JS = '../../website/gallery/data/'; //relative to the JS file
var DATA_PATH_HTML = '../website/gallery/data/'; // relative to the index.html file
var IMG_PATH_HTML = '../website/gallery/img/';
//method to create a grid with isotope

function createGrid(){
  $grid = $('#gallery-container').isotope({
    itemSelector: '.thumb',
    getSortData: {
      category:'[data-class]',
      semester: function( itemElem) { // function
        var semester_string = $( itemElem ).data('semester');
        var num = 0;
        var arr = semester_string.split(" ");
        var year = isNaN(parseInt(arr[1]*3)) ? 0 : parseInt(arr[1]*3);

        //console.log(year);
        num += year;
        if(arr[0].toLowerCase() === 'fall'){
          num += 2;
        }else if(arr[0].toLowerCase() === 'spring'){
          num += 1;
        }else{
          num += 0;
        };
        return num
      }
    },
    sortBy: 'semester',
    sortAscending: false
  });

  //load isotope images

  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

};

// initiate

$(document).ready(function(){

  // load data, will populate the gallery thumbnails + create category and tag buttons

  my_data.load_data_from_index(DATA_PATH_JS);

  // click handler for the show-all button

  $("#filter-none").click(function(){
    Thumbnail.apply_no_filter();
  });

  // click handler for the yolo button

  $("#filter-random").click(function(){
    Thumbnail.random_sort();
  });

});
