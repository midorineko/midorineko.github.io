---
layout: post
title:  "Transitions with Display"
date:   2016-06-18
categories: learnings
author: 'Steven Inouye'
subtitle: 'Using Webkit for transitions'
---

If you have built a website then you know the perils of CSS. Being a developer during the age of CSS3 has given us a few tricks we should take advantage off. One of the biggest additions with CSS3 is the addition of transitions. Alowing us to add an amount of time it takes to complete the new CSS movement. So we can make a div change from 50px in height to 20px in height in a .5s time span. 

This allows us to have beautifully moving objects throughout our website. However, when we try to add a transition element to an object that is trying to go from display: none; to display: block; nothing happens. This is because objects set with display: none; do not exist. There is no element to act a transition on. This can quickly be fixed if you want to have a transition on a hover by using opacity. Setting an opacity: 0; transitioning to opacity: 1; would correctly show the transition. The downside to this is we have to play with margins. By changing the opacity rather than the display, the object always exists on the DOM. Most of the time this will be a nightmare to deal with. 

So how do we get to do sweet transitions on a display: none; to a display: block; we use webkits. A transition is actually a fance animation on an object, we just need to fake the transition and make it unrelated to the blocks we are displaying. In this <a href="https://dclife.herokuapp.com/#!/dclife">mock website</a> you can see the use of webkit transitions to flip team images on hover and display text. The trick is to flip the div 180 degress on the Y axis. I do this with the following CSS code.

{% highlight css %}
.team-picture{
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.team-picture:hover{
    -webkit-font-smoothing: antialiased;
    z-index:100;
    -webkit-transform: rotateY(180deg);
    -webkit-transform: translateZ(0);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
}
{% endhighlight %}

This will correctly set up the team picture rotation and the text can be dealt with through normal display block methods. Now there is one last trick you have to remember. If you rotate text on the Y axis, it will be backwards. So make sure you flip the text back around. Now out of experience I found that iPhones dislike using rotate Y webkit transition twice on text. So instead I use, 
{% highlight css %}
.team-picture:hover .team-photo-text, .team-picture:hover .team-photo-name{
  display: block;    
  color: #ffffff !important;
  transform: scaleX(-1); 
  filter: FlipH; /* IE 6-7-8 */
}
{% endhighlight %}
This will correctly orient the text for the users. Now you will have a sexy transition on a display: none; object. 