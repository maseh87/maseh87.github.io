---
layout: post
title: Automatically Sorted Objects in Javascript
description: "Something Chrome does automatically"
modified: 2014-03-31
tags: [sorting, objects, javascript]
image:
  feature: abstract-2.jpg
comments: true
share: true
---


I recently stumbled across something I thought was a known fact about Javascript. Turns out that it isn't. During one of my late night study sessions I found out that a javascript object automatically sorts an object if the property is a number.

Let me explain in a little more detail...

If you set the key to a number and the value to any value in javascript it will sort them numerically automatically. If the object has some properties that are numbers and some are strings it will automatically sort the number properties and put the other properties after.

{% highlight javascript linenos %}{% raw %}
var obj = {name: "Mason", 5: 5, 4: 4, 3: 3, 2: 2, 1: 1};
//call obj
obj
//it will return
obj
Object {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, name: "Mason"}
{% endraw %}{% endhighlight %}

I have read up on this and found out that this is something that Chrome's engine, V8, does by default. I thought this was very interesting. Feel free to input if you have any more knowledge of how Chrome reads Javascript or thoughts!
