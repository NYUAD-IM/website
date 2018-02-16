$(document).ready(function(){
	console.log("Welcome to IM!");

    	//Inject resusable HTML
    	$('#header').load('/website/html/dropdown.html');
    	$('#footer').load('/website/html/footer.html');

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


let createEl = (_type, _class, _content) => {
	let el = document.createElement(_type)
	el.setAttribute('class', _class)
	if(_content != undefined)
	el.innerText = _content

	return el
}

let about = () => {
	let ab = document.getElementById('about')
	console.log(ab);
	if(ab.style.top == '1000px'){
		ab.style.top = '100px'
	}else{
		ab.style.top = '1000px'
	}
}
