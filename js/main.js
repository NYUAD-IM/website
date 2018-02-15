$(document).ready(function(){
	console.log("Welcome to IM!");

    	//Inject resusable HTML
    	$('#header-container').load('/website/html/dropdown.html');
    	$('#footer-container').load('/website/html/footer.html');

});

let showNavigation = () => {
	if($('#nav-dropdown-list').css('height') == '0px' || $('#nav-dropdown-list').css('height') == '3px'){//show it

    		$('#nav-dropdown-list').css('height', '40px');

	}else{ //hide it
		$('#nav-dropdown-list').css('height', '0px');
	}
}

let changeColor = (el, color, index) => {

	el.style.color = color;
	$('.'+index).css('color', color);
}

let resetColor = (el) => {
	$('.color-shift').css('color', 'black')
	el.style.color = 'black'
}
