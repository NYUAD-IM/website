/* 	
	JS functions to deal with non-p5 & non-css related interactions on main page. 

	Named 'script' to satisfy Pierre. Sorry, Craig.

	Modified Dec 2017
	James Hosken
*/


$(document).ready(function(){
	console.log("Page ready");

	// Load overlays as HTML snippets (this way allows us to reuse the overlays across the site)
	$('#overlay-description').load('html/overlay-description.html');
	$('#overlay-examples').load('html/overlay-examples.html');
	$('#overlay-participation').load('html/overlay-participation.html');

	//add event listener to background div (beneath overlays) to allow an outside click to close overlay
	document.getElementById("overlay-background").addEventListener("click", overlayClose);

});




function descriptionToggle(){

    if(document.getElementById("overlay-description").style.display == "block"){
    	document.getElementById("overlay-background").style.display = "none";
    	document.getElementById("overlay-description").style.display = "none";
    }else{
    	document.getElementById("overlay-background").style.display = "block";
    	document.getElementById("overlay-description").style.display = "block";	
    }
}

//Use this to close overlays if clicked outside overlays
function overlayClose(){

	document.getElementById("overlay-description").style.display = "none";
	document.getElementById("overlay-examples").style.display = "none";
	document.getElementById("overlay-participation").style.display = "none";
	document.getElementById("overlay-background").style.display = "none";
}

