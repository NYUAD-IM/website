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

let addElement = (course) => {
	//title
	//program
	//track
	//instructors
	//terms
	//link
	//description short
	//description long
	//cross listed
	//tags
	
	//concat the track+semester to add the class(foundation, elective, cross-listed) + (fall, spring, etc)
}
