var my_data = {

  load_data_from_index: function(data_directory){
    var index_file_path = data_directory + 'index.json';

    $.getJSON(index_file_path,function(data){

        if(Array.isArray(data)){

          var success_count = 0;
          const index_length = data.length;

          data.forEach(function(el,id){
            var project_data_path = data_directory + 'projects/' + el.folder_name + '/data.json';

            (function(){
              $.getJSON(project_data_path,function(d){
                success_count++;
                my_data.populate_category_bar(d);
                new Thumbnail(d,el);
                if(success_count === data.length){
                  my_data.create_category_bar(new_categ_object);
                  createGrid();
                }
              })
            })();

          });

        };

      });
    },


    populate_category_bar: function(proj){

          var trim_string = function(str){
            return str.toLowerCase().trim();
          };

          var push_to_array = function(arr,el){
            if(arr.indexOf(el) === -1){
              arr.push(el);
            }
          }
          //if there is no existing category, make a category AND push the corresponding values to it
          //if the category already exists, check if the tag exists
          for (var key in proj.tags) {

            var tag_value = proj.tags[key];
            if(new_categ_object.hasOwnProperty(key) === false){
              new_categ_object[key] = [];
            };

            if(tag_value && typeof tag_value === 'string'){
              push_to_array(new_categ_object[key],trim_string(tag_value));
            }else if(tag_value && Array.isArray(tag_value)){
              tag_value.forEach(function(tag_el){
                push_to_array(new_categ_object[key],trim_string(tag_el));
              });
            }
          }
    },

    create_category_bar: function(obj){
      new CategoryBar(obj);
      new TagBar(obj);
      // createGrid();
    }

};
