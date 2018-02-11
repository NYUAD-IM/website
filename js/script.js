/*
	JS functions to deal with non-p5 & non-css related interactions on main page.

	Named 'script' to satisfy Pierre. Sorry, Craig.

	Modified Jan 2018
	James Hosken
*/


function participationToggle(){

	if($('#button-right-bg').style.right == '-67%'){
		setTimeout(() => {
			$('#button-right-bg').style.right = '-105%';
			$('#description-right').style.display = 'none';
		}, 500)
		$('#description-right').style.opacity = 0
	}else{
		setTimeout(() => {
			$('#description-right').style.opacity = 1
		}, 300)
		$('#description-right').style.display = 'block';
		$('#button-right-bg').style.right = '-67%'
	}
	/*
    loadNewImages();

    if(document.getElementById("overlay-participation").style.display == "block"){
    	document.getElementById("overlay-background").style.display = "none";
    	document.getElementById("overlay-participation").style.display = "none";
    }else{
    	document.getElementById("overlay-background").style.display = "block";
    	document.getElementById("overlay-participation").style.display = "block";
    }
    */
}

function descriptionToggle(){
	//console.log($('#button-left-bg').style.left)
	if($('#button-left-bg').style.left == '-40%'){
		$('#description-left').style.opacity = 0
		setTimeout(() => {
			$('#button-left-bg').style.left = '-80%';
			$('#description-left').style.display = 'none';
		}, 300)
	}else{
		setTimeout(() => {
			$('#description-left').style.opacity = 1
		}, 300)
		$('#description-left').style.display = 'block';
		$('#button-left-bg').style.left = '-40%';
	}
/*
    loadNewImages();

    if(document.getElementById("overlay-description").style.display == "block"){
    	document.getElementById("overlay-background").style.display = "none";
    	document.getElementById("overlay-description").style.display = "none";
    }else{
    	document.getElementById("overlay-background").style.display = "block";
    	document.getElementById("overlay-description").style.display = "block";
    }
*/
}

function experienceToggle(){
	let el = $('#description-center')
	if(el.style.opacity== 0){
		el.style.opacity = 1
		el.style.top = '10%'
	}else{
		el.style.opacity = 0
		el.style.top = '80%'
	}
	/*
    loadNewImages();

    if(document.getElementById("overlay-examples").style.display == "block"){
    	document.getElementById("overlay-background").style.display = "none";
    	document.getElementById("overlay-examples").style.display = "none";
    }else{
    	document.getElementById("overlay-background").style.display = "block";
    	document.getElementById("overlay-examples").style.display = "block";
    }*/
}

//Use this to close overlays if clicked outside overlays
function overlayClose(){

	document.getElementById("overlay-description").style.display = "none";
	document.getElementById("overlay-examples").style.display = "none";
	document.getElementById("overlay-participation").style.display = "none";
	document.getElementById("overlay-background").style.display = "none";

}

function loadNewImages(){

    /*I was an idiot and made all 3 overlays' image tag with the same ID's.
    By the time this became a problem too much other stuff would change,
    hence this weird hand-off of HTML object reference through functions.
    It works, though!
    */

    var images =  document.getElementsByClassName("overlay-image");

    for(var i = 0; i < images.length; i++){
        loadNewImage(images[i]);
    }

}
