
var imageNumber = 40;		//Change this if adding more images


//Called when new overlay loaded
function loadNewImage(imageObjectRef){

	console.log('New Image');

	var url  = '/media/img/im-site-img-' + Math.floor(random(1, imageNumber)) + '.jpg';

	console.log(url);

	imageObjectRef.setAttribute('src',url);


}
