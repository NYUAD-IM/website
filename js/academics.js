let container

$(document).ready(() => {
	fetch()
	container = document.getElementById('page-container')
})

let populate = (d) => {
	const CONTENT = d

	console.log(CONTENT);

	for(let course of CONTENT)
		addElement(course);

};

let addElement = (_course) => {

	for(let term of _course.terms){

		let course = document.createElement('div')

		let track = ''
		let offered = ''
		let _track = _course.track
		if(_track == 'Foundation' || _track == 'Computational Media' || _track == 'Physical Computing'|| _track == 'Media & Design Thinking'){
			track = _course.track.toLowerCase().split(' ').join('-')
			track = track.replace('&', 'and')
	  	}

		if(!_course.currently_offered)
			offered = 'not-offered'

		let cluster = '' //whether requirement, elective, or none
		let _req = null
		if(_course.title == 'Introduction to Interactive Media' || _course.title == 'Communications Lab' || _course.title == 'Communication & Technology' || _course.title == 'Capstone Seminar' || _course.title == 'Capstone Project'){
			cluster = 'requirements'
			_req = createEl('div','req-course', '[Required]')
		}else if(track != ''){ //if track is either CompMed, PComp or MDT:
			cluster = 'electives'
		}else{
			cluster = 'crosslisted'
		}

		course.setAttribute('class', ['course-container ', track, cluster, offered].join(' '))
		course.setAttribute('track', track)


		let _t = createEl('div', 'course-title', _course.title)
		course.appendChild(_t)

		let _n = createEl('div', 'course-number', _course.number)
		course.appendChild(_n)

		if (_req !=null)
			course.appendChild(_req), cluster = 'requirements';;



		let _p = createEl('div', 'course-program', _course.program)
		course.appendChild(_p)

		let _ds = createEl('div', 'course-desc-short', _course.description.short)
		course.appendChild(_ds)

		let _divider = document.createElement('hr')
		course.append(_divider)

		let expand_container = createEl('div', 'expand-container')

		/*
		let _tr = createEl('div', 'course-track', _course.track)
		course.appendChild(_tr)
		*/
		let _i = createEl('div', 'course-instructors', '')
		_i.innerText = _course.instructors.join(' & ')
		expand_container.appendChild(_i)

		/*
		let _te = createEl('div', 'course-terms', '')
		for(let term of _course.terms)
			_te.innerText += term + ' -'
		course.appendChild(_te)
		*/

		if(_course.link != ''){
			let _l = createEl('a', 'course-link', 'course website')
			_l.setAttribute('href', _course.link)
			expand_container.appendChild(_l)
		}

		let _dl = createEl('div', 'course-desc-long', _course.description.long)
		expand_container.appendChild(_dl)

		let _ta = createEl('div', 'course-tags', '')
		for(let tag of _course.tags)
			_ta.innerText += tag + ' |'
		expand_container.appendChild(_ta)
		expand_container.expanded = 'false'

		course.appendChild(expand_container)
		course.setAttribute('onclick', 'expand(this)')

		//concat the track+semester to add the class(foundation, elective, cross-listed) + (fall, spring, etc)
			document.getElementById(term.toLowerCase()+'-'+cluster).appendChild(course)
	}
}


let expand = (el) => {
	let ex = el.children[5]
	if(ex.style.height == '200px'){
		ex.style.height = '0px';
		ex.style.overflow = 'hidden'
	}else{
		ex.style.height = '200px'
		ex.style.overflow = 'scroll'
	}
}

let filters = {
	'computational-media': false,
	'physical-computing': false,
	'media-and-design-thinking': false
}

let filter = (_el, _tag) => {

	filters[_tag] = !filters[_tag]

	//button feedback
  if(filters[_tag]){
		_el.style.transform = 'translateY(-'+(_el.getBoundingClientRect().height)+'px)'
		// _el.style.border = '3px solid black'
		// _el.style.borderBottom = 'none'

		_el.setAttribute('class', 'selected '+_el.getAttribute('class').replace('unselected', ''))

		if(_tag == 'computational-media') _el.style.backgroundColor= 'lightgreen'
		if(_tag == 'physical-computing') _el.style.backgroundColor= 'pink'
		if(_tag == 'media-and-design-thinking') _el.style.backgroundColor= 'lightblue'

	}else{
		// _el.style.border = '3px solid white'
		_el.style.transform = 'translateY(0px)'
		_el.style.backgroundColor = 'white'

		_el.setAttribute('class', 'unselected '+_el.getAttribute('class').replace('selected', ''))
	}


	//filter elements

	let courses = document.getElementsByClassName('course-container')
	for(let course of courses)
		course.style.opacity = '0.2'

	let nofilter = true
	for(let tag in filters){
		if(filters[tag]){
			nofilter = false
			for(let course of courses){
				if(course.getAttribute('track') == tag)
					course.style.opacity = '1'
			}
		}
	}

	if(nofilter)
		for(let course of courses)
			course.style.opacity = '1'
}
