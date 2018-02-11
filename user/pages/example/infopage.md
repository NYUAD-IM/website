---
title: Example
media_order: 'testimg.jpg,custom.js'
---

# Page Title

Here are some examples of how to use the editor for general posting purposes.

## Markdown
This is the recommended syntax, and should be suitable for generic new posts. For full doxumentation of the markdown cababilities of Grav visit [here](https://learn.getgrav.org/content/markdown).

---

## HTML
<h3 class="double-underline"> HTML works too</h3>
But it is not the recommended syntax and I'd suggest only using it in special circumstances, such as adding classes.

---

## Images
Images can be loaded in the below panel and dragged into this editor. you can also use the syntax `![name](imagename.jpg)`. **Note** if you load images with html, the url will look like `<img src="/[thispage]/[imagename]">`, for example:
<img src="/example/testimg.jpg">

#### Some useful functions that can be applied to images:
![Cropped Image](testimg.jpg?cropZoom=300,100)
![Monochrome & cropped Image](testimg.jpg?grayscale&cropZoom=300,100)

---

## Classes
The classes that affect styling (via css/posts.css) are:
<p class="double-underline"> '.double-underline': Purple double underline</p>
<p class="purple-text"> '.purple-text': Purplizes text</p>

## Javascript
To run a javascript file specific to this page, simply add it below and reference it in an html script tag. Jquery and p5js are loaded on all pages. 
<script src="/example/custom.js"></script>