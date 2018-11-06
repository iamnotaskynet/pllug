---
layout: page
show_meta: false
title: "Lecture 3"
subheadline: "CSS basics"
teaser: "Selectors, properties, values. "
header: no
permalink: "/web-js/lecture3/"
---

[Lecture in pdf](https://tinyurl.com/yb6bo6dk)

[Resume html example](https://tinyurl.com/yc96pjf5)

### Task

Modernize CV page using modern CSS3.

### Realization

<link rel="stylesheet" type="text/css" href="/pllug/assets/css/web-js-lecture3-task.css">
<div id="cv-template" >
	<h2 style="color: #ACDDF9;">iamnotaskynet </h2>
	<div class="flex-container">
		<img id="profile-img" 
			src="https://avatars0.githubusercontent.com/u/14093790?s=400&u=ae9679e7b57a3e8271fbd81138ff1bc9097d4c0c&v=4">
		<p id="profile-bio">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et lacus eget justo laoreet tempor eget ut erat. Praesent vel quam eget est efficitur ultrices finibus quis tellus. Proin vitae consequat purus. Cras vel eros feugiat, posuere ligula id, tincidunt nibh. Morbi velit augue, ultrices mattis sapien in, semper dictum mi. Etiam congue dapibus lectus eget dapibus. Fusce sed ante elementum, bibendum leo ut, iaculis ex. Etiam consectetur eleifend venenatis. Integer sit amet orci dapibus purus condimentum accumsan in non nulla. Phasellus tincidunt posuere orci eget ornare. Etiam ac tortor sed nibh blandit volutpat. Curabitur et velit nec nisi finibus blandit.
		</p>
	</div>
	<div class="flex-container">
		<div>
			<h4 class="profile-topics">Expirience</h4>
			<ol>
				<li>
					<dl>
						<dt><a href="https://en.wikipedia.org/wiki/Nowhere">Nowhere</a></dt>
						<dd>never</dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt><a href="https://en.wikipedia.org/wiki/Void">Void</a></dt>
						<dd>emptyness</dd>
					</dl>
				</li>
			</ol>
		</div>
		<div>
	    	<h4 class="profile-topics">Education</h4>
	    	<ul>
	    		<li>codeacademy</li>
	    		<li>freecodecamp</li>
	    		<li>prometheus</li>
	    		<li>stepic</li>
	    		<li>ossu</li>
	    	</ul>
	    </div>
	    <div>
	    	<h4 class="profile-topics">Skills</h4>
	    	<ul>
	    		<li>HTML5</li>
		        <li>CSS3</li>
		        <li>Javascript</li>
		        <li>C#</li>
		        <li>Java</li>
		        <li>Swift</li>
		        <li>C++</li>
	    	</ul>
	    </div>
	</div>
	<h4 class="profile-topics">Contacts</h4>
    <div class="flex-container">
    	<a class="local-link" 
    		href="https://github.com/iamnotaskynet">Github</a>
    	<a class="local-link" 
    		href="https://www.facebook.com/iamnotaskynet">Facebook</a>
    	<a class="local-link" 
    		href="https://t.me/iamnotaskynet">Telegram</a>
    </div>
</div>