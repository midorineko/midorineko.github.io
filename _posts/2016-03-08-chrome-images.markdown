---
layout: post
title:  "Images in Chrome"
date:   2016-03-08
categories: learnings
author: 'Steven Inouye'
subtitle: 'My personal learnings dealing with chrome images'
---

If you have read my past blog posts, I have been working on quickly updating the <a href="/cannabis#/kasper">cannabis</a> section of my blog with images. My earlier blog posts contain issues I had with getting the image file names, but after I solved that I ran into a different issue. Displaying 50 - 100 pictures on a page take from a 12mp camera. 

The main issue as I am sure you guess is it is **slow**! 

First I decided the quality I was displaying was way too high. Some of the files were 3mb+, loading 150mb+ on a page was disastrous. I used **https://tinyjpg.com/** to easily batch shrink all my files a ton. However, even after shrinking the folder by more than 50% it was still too slow. 

Second was figure out why all the images were rendering slowly, when I was getting the names from github api within 100ms. A quick search into angularjs shows that ng-repeat was a culprit. It apparently is not indexed and the list elements are removed when out of view. By adding an index using **track by** the ng-repeat was much faster. 

Third there was an issue with enlarging the images. The css **focus** class was not working inside of chrome, so I couldn't select an image out of a list. In google chrome the list elements must have a **<div tabindex="1"**. This will allow the css **focus** class to work and allow for tabbing through the images.