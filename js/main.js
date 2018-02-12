$(document).ready(function(){
	console.log("Welcome to IM!");

    	//Inject resusable HTML
    	$('#header-container').load('/html/navigation.html');
    	$('#footer-container').load('/html/footer.html');
    
});

let showNavigation = () => {
	if($('#nav-dropdown-list').css('height') == '0px' || $('#nav-dropdown-list').css('height') == '3px'){//show it

    		$('#nav-dropdown-list').css('height', '40px');

	}else{ //hide it
		$('#nav-dropdown-list').css('height', '0px');
	}
}
