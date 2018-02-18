/*
	JS lets to deal with non-p5 & non-css related interactions on main page.

	Named 'script' to satisfy Pierre. Sorry, Craig.

	Modified Jan 2018
	James Hosken
*/

let participation = false
let description = false


let descriptionToggle = (_el) => {

	if(!description){
		_el.style.transform = 'translateY(-'+_el.getBoundingClientRect().height+'px)'
		_el.style.border = '3px solid black'
		_el.style.borderBottom = 'none'
		description = true
	}else{
		_el.style.border = '3px solid white'
		_el.style.transform = 'translate(0px)'
		_el.style.backgroundColor = 'white'
		description = false
	}
	
	if($('#description-left').css('opacity') == 1){
		$('#description-left').css('opacity', 0)
		setTimeout(() => {
			$('#button-left-bg').css('left', '-80%');
			$('#description-left').css('display', 'none');
		}, 300)
	}else{
		setTimeout(() => {
			$('#description-left').css('opacity', 1)
		}, 300)
		$('#description-left').css('display', 'block');
		$('#button-left-bg').css('left', '-40%');
	}
}

let participationToggle = (_el) => {


	if(!participation){
		_el.style.transform = 'translateY(-'+_el.getBoundingClientRect().height+'px)'
		_el.style.border = '3px solid black'
		_el.style.borderBottom = 'none'
		participation = true
	}else{
		_el.style.border = '3px solid white'
		_el.style.transform = 'translate(0px)'
		_el.style.backgroundColor = 'white'
		participation = false
	}
	if($('#description-right').css('opacity') == 1){
		$('#description-right').css('opacity', 0)
		setTimeout(() => {
			$('#button-right-bg').css('right', '-105%');
			$('#description-right').css('display', 'none');
		}, 500)
	}else{
		setTimeout(() => {
			$('#description-right').css('opacity', 1)
		}, 300)
		$('#description-right').css('display', 'block');
		$('#button-right-bg').css('right', '-67%')
	}
}

let experienceToggle = () => {
	let el = $('#description-center')
	if(el.css('opacity') == 0){
		document.getElementById('description-center').style.opacity = 1
		setTimeout(() => {
			window.location = '/about'
		}, 2000)
	}else{
		el.css('opacity', 0)
	}
}
