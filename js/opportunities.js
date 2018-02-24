let container
let opportunities
let opportunity, title, category, loc, link, deadline, description

let height = {
	"desktop": '250px',
	"mobile": '400px'
}

$(document).ready(() => {
	fetch()
	container = document.getElementById('opportunities')
	opportunity = document.getElementById('opportunity')
	title = document.getElementById('title')
	category = document.getElementById('categories')
	loc = document.getElementById('location')
	link = document.getElementById('link')
	deadline = document.getElementById('deadline')
	description = document.getElementById('description')
})

let populate = (d) => {
	opportunities = d
	console.log(opportunities)
	for(let opportunity of opportunities)
		create(opportunity)
}

let create = (_o) => {
	let cont = createEl('div', 'opportunity-list-container')
	cont.setAttribute('onclick', 'replace(this, "'+_o.title+'")')
	cont.setAttribute('category', _o.category.main)

	let t = createEl('div', 'opportunity-list-title', _o.title)
	cont.appendChild(t)

	let c = createEl('div', 'opportunity-list-category', _o.category.main)
	cont.appendChild(c)

	container.appendChild(cont)
}

// ---------- SHOWING / HIDING SINGLE OPPORTUNITY -------------
let current = {}

let replace = (_el, _title) => {
	if(_title == current.title){
		retract()
		current = {}
	}else{
		retract()
		setTimeout(() => {expand(_el, _title)}, 300)
	}
}

let retract = () => {
	opportunity.style.height = '20px'
	opportunity.style.color = 'rgba(0, 0, 0, 0)'
	opportunity.style.backgroundColor = 'white'
	opportunity.style.borderColor = 'white'

	title.innerText = ''
	category.innerText = ''
	loc.innerText = ''
	link.setAttribute('href', '')
	link.innerText = ''
	deadline.innerText = ''
	description.innerText = ''
}

let expand = (_el, _title) => {
	opportunity.style.height = detectmob() ? height.mobile : height.desktop
	opportunity.style.color = 'black'
	opportunity.style.borderColor = 'black'

	if(_el.getAttribute('category') == 'jobs')
		opportunity.style.backgroundColor = 'lightgreen'
	if(_el.getAttribute('category') == 'calls')
		opportunity.style.backgroundColor = 'pink'
	if(_el.getAttribute('category') == 'education')
		opportunity.style.backgroundColor = 'lightblue'


	for(let opp of opportunities)
		if(opp.title == _title)
			current = opp

	if(current == null) return

	title.innerText = current.title
	category.innerText = current.category.sub.join(' - ')
	loc.innerText = current.location
	link.setAttribute('href', current.link)
	link.innerText = 'link'
	deadline.innerText = current.deadline
	description.innerText = current.description
}

let filters = {
	'jobs': false,
	'calls': false,
	'education': false
}



let filter = (_el, _tag) => {
	filters[_tag] = !filters[_tag]

	//button feedback
  if(filters[_tag]){
		_el.style.transform = 'translateY(-'+(_el.getBoundingClientRect().height)+'px)'
		_el.style.border = '3px solid black'
		_el.style.borderBottom = 'none'

		if(_tag == 'jobs') _el.style.backgroundColor= 'lightgreen'
		if(_tag == 'calls') _el.style.backgroundColor= 'pink'
		if(_tag == 'education') _el.style.backgroundColor= 'lightblue'

	}else{
		_el.style.border = '3px solid white'
		_el.style.transform = 'translateY(0px)'
		_el.style.backgroundColor = 'white'
	}


	//filter elements

	let courses = document.getElementsByClassName('opportunity-list-container')
	for(let course of courses)
		course.style.opacity = '0.2'

	let nofilter = true
	for(let tag in filters){
		if(filters[tag]){
			nofilter = false
			for(let course of courses){
				if(course.getAttribute('category') == tag)
					course.style.opacity = '1'
			}
		}
	}

	if(nofilter)
		for(let course of courses)
			course.style.opacity = '1'
}
