let container
let positions = ['left', 'center', 'right']

$(document).ready(() => {
  fetch()
  container = document.getElementById('activities-container')
})


let populate = (d) => {
  const ACTIVITIES = d

  let index = 0
  let pitch = 0
  if(detectmob()){
    for(let act of ACTIVITIES)
      createActivity(act)
  }else{
    //make sure we always have an activity first
    createActivity(ACTIVITIES[index], positions[index%3])
    index++

    while(index < ACTIVITIES.length){
  	  if(Math.random() > 0.5){
  		  createNote(pitch)
  		  pitch++
  	  }else{
  		  createActivity(ACTIVITIES[index], positions[index%3])
  		  index++
  	  }
    }
  }
}

let createNote = (pitch) => {
  let type = Math.floor(Math.random()*3)

	let cont = document.createElement('div')
	cont.setAttribute('class', 'note-container')

	let notation = document.createElement('div')
  notation.setAttribute('onmouseenter', 'play(this)')
  notation.setAttribute('rotation', 45)

  switch (type) {
    case 0:
      notation.setAttribute('class', 'note-display pink')
      break;
    case 1:
      notation.setAttribute('class', 'note-display lightgreen')
      break;
    case 2:
      notation.setAttribute('class', 'note-display lightblue')
      break;
    default:

  }

	let note = document.createElement('audio')
	note.setAttribute('src', '/media/audio/'+type+'.wav')
	note.setAttribute('visibility', 'hidden')
  note.setAttribute('volume', '0.5')


	notation.appendChild(note)
	cont.appendChild(notation)
	container.appendChild(cont)
}

let play = (_el) => {
  _el.children[0].currentTime = 0
  _el.children[0].play()
  let rot = parseInt(_el.getAttribute('rotation')) + 45
  _el.style.transform = 'rotate('+rot+'deg)'
  _el.setAttribute('rotation', rot)
}

let createActivity = (act, pos) => {
	let row = document.createElement('div')
	row.setAttribute('class', 'activity-row')

	let cont = document.createElement('div')
	cont.setAttribute('class', 'activity-container')

	let img = document.createElement('div')
	img.setAttribute('class', 'img-container')
	let _i = document.createElement('img')
	_i.setAttribute('src', '/media/img/'+act.image)
	_i.setAttribute('class', 'activity-image')
  _i.setAttribute('alt',act.alt)
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
  _l.setAttribute('target', '_blank')
	_l.innerText = 'Learn more!'
	link.appendChild(_l)
	cont.appendChild(link)

	container.appendChild(cont)
}
