let container

$(document).ready(() => {
	fetch()
	container = document.getElementById('page-container')
})

let populate = (d) => {
	const CONTENT = d

	console.log(CONTENT)

	for(let course of CONTENT)
		addElement(course)

}

let addElement = (_course) => {

	for(let term of _course.terms){

	let track = ""
	let offered = ""
	let _track = _course.track
	if(_track == "Foundation"
	  || _track == "Computational Media"
	  || _track == "Physical Computing"
	  || _track == "Media & Design Thinking"){
		track = _course.track.toLowerCase().split(' ').join('-')
		track = track.replace('&', 'and')
	  }
	
	if(_course.currently_offered)
		offered = "offered"

	let cluster = "" //whether requirement, elective, or none
	if(_course.title == "Introduction to Interactive Media" || _course.title == "Communications Lab" || _course.title == "Communication & Technology" || _course.title == "Capstone Seminar" || _course.title == "Capstone Project")
		cluster = "requirements"
	else if(track != "") //if track is either CompMed, PComp or MDT:
		cluster = "electives"
	else
		cluster = "crosslisted"

	let course = document.createElement('div')
	course.setAttribute('class', ['course-container ', track, cluster, offered].join(' '))
	console.log(course.getAttribute('class'));

	let _t = createEl('div', 'course-title', _course.title)
	course.appendChild(_t)

	let _n = createEl('div', 'course-number', _course.number)
	course.appendChild(_n)

	let _p = createEl('div', 'course-program', _course.program)
	course.appendChild(_p)

	let _tr = createEl('div', 'course-track', _course.track)
	course.appendChild(_tr)

	let _i = createEl('div', 'course-instructors', '')
	for(let instructor of _course.instructors)
		_i.innerText += instructor+' / '
	course.appendChild(_i)	

	let _te = createEl('div', 'course-terms', '')
	for(let term of _course.terms)
		_te.innerText += term + ' -'
	course.appendChild(_te)

	if(_course.link != ""){
		let _l = createEl('a', 'course-link', 'course website')
		_l.src = _course.link
		course.appendChild(_l)
	}

	let _ds = createEl('div', 'course-desc-short', _course.description.short)
	course.appendChild(_ds)

	let _dl = createEl('div', 'course-desc-long', _course.description.long)
	course.appendChild(_dl)
	
	let _ta = createEl('div', 'course-tags', '')
	for(let tag of _course.tags)
		_ta.innerText += tag + " |"
	course.appendChild(_ta)

	//concat the track+semester to add the class(foundation, elective, cross-listed) + (fall, spring, etc)
		document.getElementById(term.toLowerCase()+'-'+cluster).appendChild(course)
	}
}

let createEl = (_type, _class, _content) => {
	let el = document.createElement(_type)
	el.setAttribute('class', _class)
	el.innerText = _content

	return el
}
