// TAG BAR CLASS
function TagBar(tag_object){

	// call these methods
	create_tag_buttons();
	tag_bar_click_handler();

	// create tag buttons

	function create_tag_buttons(){
		for(var ctg in tag_object){
			tag_object[ctg].forEach(function(e){
				new TagButton(ctg,e);
			});
		};
	}

	// create tag bar click handler

	function tag_bar_click_handler(){

		var $active_button;
		var $prev_button;
		var prev_active_tag = null;
		var active_tag;
		var active_ctg;

		$('.tags').click(function(e){

			//set active button and tag
			$active_button = $(e.target).is("img") ? $(e.target).parent() : $(e.target);
			active_tag = $active_button.attr("id").split('-')[1];
			// active_ctg = $active_button.attr("id").split('-')[1];

			//if a tag button is pressed back to back assume the user wants to close it, otherwise set a new active button
			if(prev_active_tag === active_tag){
				$active_button.removeClass("tag-is-active").find('.x-icon').addClass('hidden');
				Thumbnail.apply_no_filter();
			}else{
				//find the category corresponding to the tag, so you can call the thumbnail filter
				for(var ctg in tag_object){
					var ctg_class = "tag-" + ctg;
					if($(e.target).hasClass(ctg_class)){
						active_ctg = ctg;
						Thumbnail.filter(active_ctg,active_tag);
					};
				};

				// make sure that the previous button exists
				if($prev_button){
					$prev_button.removeClass("tag-is-active").find('.x-icon').addClass('hidden');
				};
				$active_button.addClass("tag-is-active").find('.x-icon').removeClass('hidden');

				//make the clicked object appear active
				$prev_button = $active_button;
				prev_active_tag = active_tag;

			}
		});
	};
	
};
