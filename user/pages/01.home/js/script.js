/* 	
	JS functions to deal with non-p5 & non-css related interactions on main page. 

	Named 'script' to satisfy Pierre. Sorry, Craig.

	Modified Jan 2018
	James Hosken
*/

$(document).ready(function(){
	console.log("Page ready");

    //Inject resusable HTML 
    // $('#header-container').load('/html/navigation.html');


	// Load overlays as HTML snippets (this way allows us to reuse the overlays across the site)
	$('#overlay-description').load('user/pages/01.home/overlays/overlay-description.html');
	$('#overlay-examples').load('user/pages/01.home/overlays/overlay-examples.html');
	$('#overlay-participation').load('user/pages/01.home/overlays/overlay-participation.html');

	//add event listener to background div (beneath overlays) to allow an outside click to close overlay
	document.getElementById("overlay-background").addEventListener("click", overlayClose);

});


function participationToggle(){

    loadNewImages();

    if(document.getElementById("overlay-participation").style.display == "block"){
    	document.getElementById("overlay-background").style.display = "none";
    	document.getElementById("overlay-participation").style.display = "none";
    }else{
    	document.getElementById("overlay-background").style.display = "block";
    	document.getElementById("overlay-participation").style.display = "block";	
    }
}

function descriptionToggle(){

    loadNewImages();
    
    if(document.getElementById("overlay-description").style.display == "block"){
    	document.getElementById("overlay-background").style.display = "none";
    	document.getElementById("overlay-description").style.display = "none";
    }else{
    	document.getElementById("overlay-background").style.display = "block";
    	document.getElementById("overlay-description").style.display = "block";	
    }
}

function examplesToggle(){

    loadNewImages();

    if(document.getElementById("overlay-examples").style.display == "block"){
    	document.getElementById("overlay-background").style.display = "none";
    	document.getElementById("overlay-examples").style.display = "none";
    }else{
    	document.getElementById("overlay-background").style.display = "block";
    	document.getElementById("overlay-examples").style.display = "block";	
    }
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