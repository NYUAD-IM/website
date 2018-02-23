let max_height = {
	"desktop": '600px',
	"mobile": '250px'
}

let min_height = {
	"desktop": '100px',
	"mobile": '30px'
}

let _expand, _retract

$(document).ready(() => {
	attachListener()

	_expand =  detectmob() ? max_height.mobile : max_height.desktop
	_retract =  detectmob() ? min_height.mobile : min_height.desktop
})

let attachListener = () => {

	document.body.onmousemove = (e) => {
		let x = (e.clientX / window.innerWidth)*127
		let y = (e.clientY / window.innerHeight)*127
		let sum = 255 - (x+y)
		let col = 'rgb('+sum+','+sum+','+sum+')'

		$('body').css('background-color', col)
	}
}

let expand = (el) => {
	if(el.style.height == _expand)
		el.style.height = _retract
	else
		el.style.height = _expand
}

let colorize = (color) => {
	document.body.onmousemove = null
	document.body.style.backgroundColor = color
}
