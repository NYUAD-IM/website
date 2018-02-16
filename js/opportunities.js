let container
let workshops

$(document).ready(() => {
	fetch()
	container = document.getElementById('workshops-container')
})

let populate = (d) => {
	workshops = d
	console.log(workshops)
	for(let workshop, index of workshops)
		createWorkshop(workshop, index)
}

let createWorkshop = (_ws, _i) => {
	let side = _i % 2 == 0 ? 'left' : 'right'

	let cont = createEl('div', ['workshop-container', 'container-'+side].join(' '))

	let t = createEl('div', 'workshop-title', _ws.title)
	cont.appendChild(t)

	let sub_cont = createEl('div', ['workshop-subcontainer', 'subcontainer-'+side].join(' ')])
	let instructor = creatEl('div', 'workshop-instructor', _ws.instructor)
	sub_cont.appendChild(instructor)

	let date = createEl('div', 'workshop-date', _ws.date)
	sub_cont.appendChild(date)

	let loc = createEl('div', 'workshop-location', _ws.location)
	sub_cont.appendChild(loc)

	let desc = createEl('div', 'workshop-description', _ws.description)
	sub_cont.appendChild(desc)

	let tags = createEl('div', 'workshop-tags', _ws.tags.join(' - '))
	sub_cont.appendChild(tags)

	let links = createEl('div', 'workshop-links')
	for(let l of _ws.links){
		let link = createEl('a', 'workshop-link', l.text)
		link.setAttribute('href', l.url)
		links.appendChild(links)
	}

	sub_cont.appendChild(links)

	cont.appendChild(sub_cont)

	containter.appendChild(cont)

}
