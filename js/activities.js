let container
let positions = ['left', 'center', 'right']

$(document).ready(() => {
  fetch()
  container = document.getElementById('activities-container')
})


let populate = (d) => {
  const CONTENT = d

  console.log(CONTENT);

  let index = 0
  let pitch = 0
  while(index < CONTENT.length){
	  if(Math.random() > 0.4){
		  createNote(pitch)
		  pitch++
	  }else{
		  createActivity(CONTENT[index], positions[index%3])
		  index++
	  }
  }
}

let createNote = (pitch) => {
	let cont = document.createElement('div')
	cont.setAttribute('class', 'note-container')

	let notation = document.createElement('div')
	notation.setAttribute('class', 'note-display')
	
	let note = document.createElement('audio')
	note.setAttribute('src', '')
	note.setAttribute('visibility', 'hidden')
	
	notation.appendChild(note)
	cont.appendChild(notation)
	container.appendChild(cont)
}

let createActivity = (act, pos) => {
	let row = document.createElement('div')
	row.setAttribute('class', 'activity-row')

	let cont = document.createElement('div')
	cont.setAttribute('class', 'activity-container')

	let img = document.createElement('div')
	img.setAttribute('class', 'img-container')
	let _i = document.createElement('img')
	_i.setAttribute('src', '/website/media/img/'+act.image)
	_i.setAttribute('class', 'activity-image')
	img.appendChild(_i)
	cont.appendChild(img)

	let title = document.createElement('div')
	title.setAttribute('class', 'activity-title')
	title.innerText = act.title
	cont.appendChild(title)

	let blurb = document.createElement('div')
	blurb.setAttribute('class', 'activity-blurb')
	blurb.innerText = act.blurb
	cont.appendChild(blurb)

	let link = document.createElement('div')
	link.setAttribute('class', 'activity-link')
	let _l = document.createElement('a')
	_l.setAttribute('href', act.link)
	_l.innerText = 'Learn more!'
	link.appendChild(_l)
	cont.appendChild(link)


	//row.appendChild(cont)
	container.appendChild(cont)
}
