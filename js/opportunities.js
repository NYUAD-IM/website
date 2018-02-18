let container
let opportunities
let title, category, loc, link, deadline, description

$(document).ready(() => {
	fetch()
	container = document.getElementById('opportunities')
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

	let t = createEl('div', 'opportunity-list-title', _o.title)
	cont.appendChild(t)

	let c = createEl('div', 'opportunity-list-category', _o.category.main)
	cont.appendChild(c)

	container.appendChild(cont)
}

let replace = (el, _title) => {
	let current
	for(let opp of opportunities)
		if(opp.title == _title)
			current = opp

	if(current == null) return

	title.innerText = current.title
	category.innerText = current.category.sub.join(' - ')
	loc.innerText = current.location
	link.setAttribute('href', current.link)
	deadline.innerText = current.deadline
	description.innerText = current.description
}
