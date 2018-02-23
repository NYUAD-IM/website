let participation = false
let description = false

let _leftblock, _rightblock
let left = {
		"desktop": "-50%",
		"mobile": "-80%"
}

let right = {
		"desktop": "-35%",
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

		setTimeout(() => {
			_leftblock.style.color = 'rgba(0, 0, 0, 1)'
		}, 300)
		_leftblock.style.left = '3%'

		description = true
	}else{
		_el.style.border = '3px solid white'
		_el.style.transform = 'translate(0px)'
		_el.style.backgroundColor = 'white'

		_leftblock.style.color = 'rgba(0, 0, 0, 0)'
		setTimeout(() => {
			_leftblock.style.left = _left
		}, 300)

		description = false
	}
}

let participationToggle = (_el) => {
	if(!participation){
		_el.style.transform = 'translateY(-'+_el.getBoundingClientRect().height+'px)'
		_el.style.border = '3px solid black'
		_el.style.borderBottom = 'none'

		setTimeout(() => {
			_rightblock.style.color = 'rgba(0, 0, 0, 1)'
		}, 300)
		_rightblock.style.display = 'block'
		_rightblock.style.right = '3%'

		participation = true
	}else{
		_el.style.border = '3px solid white'
		_el.style.transform = 'translate(0px)'
		_el.style.backgroundColor = 'white'

		_rightblock.style.color = 'rgba(0, 0, 0, 0)'
		setTimeout(() => { _rightblock.style.right = _right }, 300)

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
