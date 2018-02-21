// CATEGORY BAR CLASS
function CategoryBar(tag_object){

	//console.log(tag_object);

	// call these functions

	create_ctg_buttons(tag_object);
	ctg_bar_click_handler();

	// create category buttons

	function create_ctg_buttons(obj){
		for(var ctg in obj){
			new CategoryButton(ctg);
		};
	};

	// create category bar click handler

	function ctg_bar_click_handler(){
		//variables
		var current_active_button;
		var prev_active_button;
		var active_ctg;
		// create click handler
		$('.ctg').click(function(e){
			//save active category
			active_ctg = $(e.target).attr("id").split('-')[1];
			prev_active_button = current_active_button;
			current_active_button = $(e.target);
			$(prev_active_button).removeClass("is-active").addClass("not-active");
			$(".tags").addClass("not-visible");
			//make the clicked object appear active
    	$(current_active_button).removeClass("not-active").addClass("is-active");
    	$(".tag-" + active_ctg).removeClass("not-visible").addClass("is-visible");
		});

	}

}
