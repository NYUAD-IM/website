// CATEGORY BUTTON CLASS
  function CategoryButton(selector){

    // call these functions

    createDomElement();

    //method to capitalize first letter of category name - used in createDomElement method

    function capitalizeFirstLetter(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // method to create dom element for the given category

    function createDomElement(){
      var htmlString = '';
      htmlString += '<li><a class="ctg not-active"';
      htmlString += 'id=filter-' + selector + '>' + capitalizeFirstLetter(selector) + '</a></li>';
      $(htmlString).prependTo('#filters');
    };
  
};
