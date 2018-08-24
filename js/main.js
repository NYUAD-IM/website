let dropdown_height
let nav_shown = false

$(document).ready(function(){
	console.log("Welcome to the IM website! Look at our code at https://github.com/nyuad-im/website");

  //Inject resusable HTML
  $('#header').load('/html/header.html');
  $('#footer').load('/html/footer.html');

	dropdown_height = detectmob() ? '280px' : '40px'
});


let showNavigation = () => {
	if(!nav_shown){
    		$('#nav-dropdown-list').css('height', dropdown_height)
				nav_shown = true
	}else{
		$('#nav-dropdown-list').css('height', '0px')
		nav_shown = false;
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
