$(document).ready(() => {
	attachListener()
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
	if(el.style.height == '500px')
		el.style.height = '100px'
	else
		el.style.height = '500px'
}

let colorize = (color) => {
	document.body.onmousemove = null
	document.body.style.backgroundColor = color
}
