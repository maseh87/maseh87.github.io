---
layout: post
title: Create a node server using Express
description: "How to create a server the easy way"
modified: 2014-03-26
tags: [server, javascript, node]
image:
  feature: so-simple-sample-image-2.jpg
comments: true
share: true
---

Creating a server using Node can be pretty confusing and time consuming depending on the size of your application. Luckily there is a simple and easy way to make your server using Express.

One main feature you will most likely want out of your server is providing your static assets to the browser so they can be rendered for viewing. When trying to accomplish this with only node it is, in my opinion, annoying. This is the way to do it in Express.

{% highlight javascript linenos %} {% raw %}
//first require our express files
var express = require('express');
//next invoke our express function so we can have access to the express' object properties
var app = express();

app.use(express.static('path/to/your/static/asset'));
//specifies what port your asset will be on
app.listen(3000);
//just a message telling yourself that the server is running correctly
console.log('Listening on port 3k');
{% endraw %} {% endhighlight %}

Inside the express.static you will give the path to your static asset. Your static assets will be any files that you want to be rendered in the browser for viewing, for example your index.html page. If you include __dirname + /a/path it can save you a few lines of code. This will also correctly serve any script tags or links that your static asset has included.

Express also has great middleware options. One very useful middleware package is morgan. Morgan is a logger middleware that will display in your terminal all requests made to your server. Morgan takes one argument that can be 4 different options. The most useful is the 'dev' argument. When provided that morgan will log ever output that will colored by the different response status'. Extremely useful when you run into bugs.

How to include morgan
{% highlight javascript linenos %} {% raw %}
var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));
//yes its that simple

app.use(express.static('path/to/your/static/asset'));

app.listen(3000);
console.log('Listening on port 3k');
{% endraw %} {% endhighlight %}

Express will save you a ton of time when creating your servers and I highly recommend using it. Tell me your techniques when creating your own servers below.

