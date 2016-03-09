---
layout: post
title:  "Using Github API"
date:   2016-03-08
categories: learnings
author: 'Steven Inouye'
subtitle: 'Simple Github API'
---
Previously to display my images I was using a third party to collect an html script of a GitHub directory which I parse with regex to get the images by name, finally displaying them on the page with ng-repeat.

I would have stuck with this way since I wasn't using any confidential information, however the service I was using continues to crash due to limiting. This forced me to re-attack the problem of getting the file names from a github directory using angularjs.

Using the Github api it was relatively easy. First I explored the api in the console using...
{% highlight ruby %}
  curl -i https://api.github.com/users/octocat/orgs
{% endhighlight %}

Eventually I worked my way into the directory I wanted, which looked a little something like...
{% highlight ruby %}
  curl -i https://api.github.com/repos/username/username.github.io/contents/directory?ref=branch
{% endhighlight %}
This call gave me all the files in the repository.

Using a $http get call on the above url I was given an array of objects. Each object had a "name" attribute which held the name of the file. I attempted the same request with JSONP, but was rejected.

I now have all the pictures displaying through a correct github api call. However it is fairly slow. I will optimize the images and index the ng-repeat. Hopefully this will give me the desired performance. check out the performance increase in the <a href="/cannabis#/kasper">cannabis</a> section.
