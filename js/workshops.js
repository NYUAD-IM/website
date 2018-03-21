function datePassed(date){
  var workshopyy = Number(date.slice(0,2));
  var workshopMM = Number(date.slice(2,4));
  var workshopdd = Number(date.slice(4,6));
  var workshophh = Number(date.slice(7,9));
  var workshopmm = Number(date.slice(9,11));
  var currentDate = new Date();
  var currentyy = Number(String(currentDate.getFullYear()).slice(2,4));
  var currentMM = currentDate.getMonth()+1;
  var currentdd = currentDate.getDate();
  var currenthh = currentDate.getHours();
  var currentmm = currentDate.getMinutes();

  if (workshopyy == currentyy && workshopMM == currentMM && workshopdd == currentdd) {
    if (workshophh < currenthh) {
      return true;
    } else if (workshophh > currenthh) {
      return false;
    } else {
      if (workshopmm <= currentmm){
        return true;
      } else if (workshopmm > currentmm){
        return false;
      }
    }
  }

  if(workshopyy < currentyy){
    return true;
  } else if (workshopMM < currentMM){
    return true;
  } else if (workshopdd < currentdd){
    return true;
  } else {
    return false;
  }
}

let container
let upcoming
let past
let workshops
let colors = ['pink', 'lightblue', 'lightgreen']

$(document).ready(() => {
  createPastUpcoming();
	fetch()
	container = document.getElementById('workshops-container')
	console.log(container);
})

let populate = (d) => {
	workshops = d
	console.log(workshops)
	for(let index in workshops)
		createWorkshop(workshops[index], index)
}

let createPastUpcoming = () => {
  let c = document.getElementById('workshops-container')

  upcoming = createEl('div', 'workshops-upcoming')
  c.appendChild(upcoming)
  let uTitle = createEl('div', 'workshops-title bg-lightgreen', 'UPCOMING');
  upcoming.appendChild(uTitle);

  past = createEl('div', 'workshops-past')
  c.appendChild(past)
  let pTitle = createEl('div', 'workshops-title bg-lightblue', 'PAST');
  past.appendChild(pTitle);
}

let createWorkshop = (_ws, _i) => {
	let side = _i % 2 == 0 ? 'left' : 'right'
  let hasPassed = datePassed(_ws.date.human);

	let cont = createEl('div', ['workshop-container', 'container-'+side].join(' '))

	let t = createEl('div', ['workshop-title', 'bg-'+colors[_i%3], hasPassed ? 'workshop-past' : 'workshop-upcoming'].join(' '), _ws.title)
	t.setAttribute('onclick', 'expand(this, "'+colors[_i%3]+'")')
	cont.appendChild(t)

	let sub_cont = createEl('div', ['workshop-subcontainer', 'subcontainer-'+side].join(' '))


	let instructor = createEl('div', 'workshop-instructor', _ws.instructor)
	sub_cont.appendChild(instructor)


	let date = createEl('div', 'workshop-date', _ws.date.human);
	sub_cont.appendChild(date);


	let loc = createEl('div', 'workshop-location', _ws.location)
	sub_cont.appendChild(loc)

	let desc = createEl('div', 'workshop-description', _ws.description)
	sub_cont.appendChild(desc)

	let tags = createEl('div', 'workshop-tags', _ws.tags.join(' - '))

	let links = createEl('div', 'workshop-links')
	let link = createEl('a', 'workshop-link', _ws.links.text)
	link.setAttribute('href', _ws.links.url)
	links.appendChild(link)

	sub_cont.appendChild(links)

	cont.appendChild(sub_cont)

  let par = hasPassed ? past : upcoming;
  par.appendChild(cont)

}


let expand = (_el, _col) => {
	let subcont = _el.parentNode.children[1]
	if(subcont.style.color == 'black'){
		subcont.style.width = '0px'
		subcont.style.color = 'white'
	}else{
		subcont.style.width = '800px'
		subcont.style.color = 'black'
	}

	document.body.style.backgroundColor = _col
}
