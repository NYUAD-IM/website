/*
	JS lets to deal with non-p5 & non-css related interactions on main page.

	Named 'script' to satisfy Pierre. Sorry, Craig.

	Modified Jan 2018
	James Hosken
*/

let participationToggle = () => {

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

let descriptionToggle = () => {
	
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

let experienceToggle = () => {
	let el = $('#description-center')
	if(el.css('opacity') == 0){
		el.css('opacity', 1)
		el.css('top', '10%')
	}else{
		el.css('opacity', 0)
		el.css('top', '80%')
	}
}
