# Folder Structure:

- **Public**
	- **FILES**
		*Ignore all files*
	- **FOLDERS**
		*ignore all folders except these:*
		- **logs**
			*where you'll find server logs*
		- **user**
			*this is what we can modify*
			- **accounts**
				*info about admin accounts. Do not modify*
			- **config**
				*shouldn't be necessary to modify after site setup*
			- **data**
				*license info. Do not modify*
			- **pages**
				*the content for the site. You can edit here, but ideally use the nyuad.im/admin portal to edit this content.
				The content of each page will be saved as a markdown file named according to the template that is used to render it, inside a folder named after the page. **For example, the `About` page, which uses the `infopage.html.twig` template, is saved as `infopage.md` under the folder `02.about`**
				Text, image, media, and javascript can be added via the admin portal. All media (and js) added to a page via the portal will be saved under that page's folder. For more information on the possibilities, go the the admin panel (nyuad.im/admin), select the `pages` tab, and view the `example` page content. To see the rendered version, go to nyuad.im/example* 
			- **plugins**
				*I have not used any plugins*
			- **themes**
				*everything to do with the look and interactivity of the site. CSS & general JS files, as well as the [Twig php engine](https://learn.getgrav.org/themes/twig-primer) that renders the content of the page (in 'pages') into html.*
				- **nyuadim**
					*custom theme for our site :) *
					- **css**
						*where all css for the site is stored. If you would like to add custom styling (e.g. for a customised 24X post or something) please add it to the `custom.css` file. **Note that ALL pages load `custom.css` last, so I suggest only modifying your own ids/classes to avoid overwriting thematic styles.** *
					- **fonts**
						*self explanatory*
					- **images**
						*images that are inherent to the theme (certain icons, backgrounds if any) are stored here. You shouldn't ever need to put anything here, unless modifying the theme itself.*
					- **js**
						*js files for the whole site.
						Add js files here only if you want them rendered for the entire site. For page-specific javascript, see `pages` section.
						Similary to css, if you'd like to add general js commands to all pages, add them to `custom.js`. Jquery and p5js are loaded on all pages*
					- **templates**
						*twig files that render markdown content in `pages` into html. For more info on how Twig works, visit [docs](https://learn.getgrav.org/themes/twig-primer)*
						- partials
							*folder containing snippets of twig code that can be reused in other files*


