---
title: Home
---

<!-- SKETCH SECTION -->
<div class="container-fluid" id="sketch-container">
	<div id="canvas-container">
	</div>
</div>

<!-- ACTION BUTTONS SECTION -->
<div class="container-fluid" id="button-container">

    <button onclick="descriptionToggle()" class="action-button">
      	what is IM?
    </button>

    <button onclick="examplesToggle()" class="action-button">
       what does IM do?
    </button>

	<button onclick="participationToggle()" class="action-button">
        what can I do?
	</button>
</div>

<!-- OVERLAY SECTION (DEFAULT: HIDDEN) -->
<div id="overlay-background"></div>
<div id="overlay-description" class="overlay"></div>
<div id="overlay-examples" class="overlay"></div>
<div id="overlay-participation" class="overlay"></div>

<!-- ADD JS SCRIPTS -->
<script src="/home/js/script.js"></script> 
<script src="/home/js/imageHandler.js"></script>
<script src="/home/js/sketch.js"></script>