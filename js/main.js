let dropdown_height

$(document).ready(function(){
	console.log("Welcome to IM!");

    	//Inject resusable HTML
    	$('#header').load('/website/html/dropdown.html');
    	$('#footer').load('/website/html/footer.html');


	dropdown_height = detectmob() ? '120px' : '40px'
});


let showNavigation = () => {
	if($('#nav-dropdown-list').css('height') == '0px' || $('#nav-dropdown-list').css('height') == '3px'){//show it TODO fix

    		$('#nav-dropdown-list').css('height', dropdown_height);

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
	if(ab.style.top == '200px'){
		ab.style.top = '1400px'
	}else{
		ab.style.top = '200px'
	}
}

let detectmob = () => {
	if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i))
		return true
	else
		return false
}
