let offset

$(document).ready(() => {
	fetch()
	offset = document.getElementById('headshots').offsetTop*1.2
})

let everybody
let img_path_prefix = '/media/img/people/'

let populate = (d) => {
	everybody = d
	console.log(everybody)

	for(let one of everybody)
		createHeadshots(one)
}

let createHeadshots = (_people) => {
	let cont =  createEl('div', 'single-headshot')
	cont.setAttribute('onclick', 'switchBio(this,"'+_people.name+'")')
	// cont.setAttribute('onmouseover', 'guideBio(event)')

	let _ih = createEl('div', 'headshot-image-container')
	let _i = createEl('img', 'headshot-image')
	_i.setAttribute('src', img_path_prefix+_people.image)
	_i.setAttribute('alt',_people.name)

	_ih.appendChild(_i)
	cont.appendChild(_ih)

	let _n = createEl('div', 'headshot-name', _people.name)
	cont.appendChild(_n)

	let _d = createEl('div', 'headshot-description', _people.description.short)
	cont.appendChild(_d)

	if(_people.roles[0].indexOf("Lab Assistant") > -1)
		document.getElementById('monitors').appendChild(cont)
	else
		document.getElementById('instructors').appendChild(cont)

}

let guideBio = (evt) => {
	document.getElementById('bio').style.top = (evt.pageY-offset)+'px'
}

let switchBio = (_el, _name) => {
	if(previous != null && _name == previous.name) return

	if(previous == null){
		replace(_el, _name)
		slide('400px', 'black')
	}else{
		slide('0px', 'white')
		setTimeout(() => {
			replace(_el, _name)
			slide('400px', 'black')
		}, 600)
	}

}

let slide = (_h, _c) => {
	let els = document.getElementsByClassName('current-expand')
	for(let el of els){
		el.style.maxHeight = _h
		el.style.color = _c
	}
}


let current = null
let previous = null

let replace = (_el, _name) => {
  document.getElementsByClassName("current-name")[0].style = "border-bottom: 3px solid black;";
  document.getElementsByClassName("current-roles")[0].style = "border-bottom: 3px solid black;";
  document.getElementsByClassName("current-courses")[0].style = "border-bottom: 3px solid black;";
  document.getElementsByClassName("current-description")[0].style = "border-bottom: 3px solid black;";
  document.getElementsByClassName("current-website")[0].style = "border-bottom: 3px solid black;";
  document.getElementsByClassName("current-email")[0].style = "border-bottom: 3px solid black;";
	for(let one of everybody)
		if(one.name == _name)
			current = one

	if(current == null || current == previous) return

	let img = document.getElementById('headshot')
	img.setAttribute('src', img_path_prefix + current.image)

	changeContent('name', current.name)
	changeContent('roles', current.roles.join('\n'))
	changeContent('description', current.description.long)

	let courses = document.getElementById('courses')
	if(current.courses.length > 0 && current.courses[0] != ""){
		courses.style.visibility = 'visible'
		courses.innerHTML = "<b>Courses: </b>" + current.courses.join(', ')
	}else{
		courses.style.visibility = 'hidden'
		courses.innerText = ''
	}


	let website = document.getElementById('website')
	website.innerText = current.website
	website.setAttribute('href', current.website)
	website.setAttribute('target', '_blank')

	let email = document.getElementById('email')
	email.innerText = current.email
	email.setAttribute('href', 'mailto:'+current.email)
	email.setAttribute('target', '_blank')

	previous = current
}

let changeContent = (_id, _content) => {
	let el = document.getElementById(_id)
	el.innerText = _content
}
