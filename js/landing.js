/* ---------------- POPULATING ANNOUNCEMENTS -------------- */

$(document).ready(() => {
	fetch()
})

let populate = (_data) => {
	if(!_data[0].isCurrent) return

	document.getElementById("announcement").style.display = 'block';
	document.getElementById("announcement").style.opacity = 1;

	document.getElementById('a-title').innerText = _data[0].title
	document.getElementById('a-description').innerText = _data[0].description
	document.getElementById('a-location').innerText = _data[0].location
	document.getElementById('a-date').innerText = _data[0].date
	document.getElementById('a-link').innerText = _data[0].link.text
	document.getElementById('a-link').setAttribute('href', _data[0].link.url)
}


let closeAnnouncement = () => {
	document.getElementById("announcement").style.opacity = 0;

	setTimeout(() => {document.getElementById("announcement").style.display = 'none';}, 200)
}



/* ---------------- MOVING INTERFACE -------------- */

let participation = false
let description = false

let _leftblock, _rightblock
let left = {
		"desktop": "-50%",
		"mobile": "-80%"
}

let right = {
		"desktop": "-45%",
		"mobile": "-80%"
}

let _left, _right

$(document).ready(function(){
	_leftblock = document.getElementById('description-left')
	_rightblock = document.getElementById('description-right')

	_left = detectmob() ? left.mobile : left.desktop
	_right = detectmob() ? right.mobile : right.desktop
})


let descriptionToggle = (_el) => {

	if(!description){
		_el.style.transform = 'translateY(-'+_el.getBoundingClientRect().height+'px)'
		_el.style.border = '3px solid black'
		_el.style.borderBottom = 'none'

		_leftblock.style.left = '3%'

		description = true
	}else{
		_el.style.border = '3px solid white'
		_el.style.transform = 'translate(0px)'
		_el.style.backgroundColor = 'white'

			_leftblock.style.left = _left

		description = false
	}
}

let participationToggle = (_el) => {
	if(!participation){
		_el.style.transform = 'translateY(-'+_el.getBoundingClientRect().height+'px)'
		_el.style.border = '3px solid black'
		_el.style.borderBottom = 'none'

		_rightblock.style.display = 'block'
		_rightblock.style.right = '3%'

		participation = true
	}else{
		_el.style.border = '3px solid white'
		_el.style.transform = 'translate(0px)'
		_el.style.backgroundColor = 'white'

 		_rightblock.style.right = _right

		participation = false
	}

}

let experienceToggle = () => {
	let el = document.getElementById('description-center')
	if(el.style.opacity == 0){
		el.style.opacity = 1
		setTimeout(() => {
			window.location = '/website'
		}, 2000)
	}else{
		el.style.opacity = 0
	}
}
