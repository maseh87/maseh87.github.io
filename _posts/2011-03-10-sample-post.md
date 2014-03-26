---
layout: post
title: The Arguments Object
description: "The weird array like thing called arguments"
modified: 2013-05-31
tags: [javascript, firstblog, arguments]
image:
  feature: abstract-3.jpg
comments: true
share: true
---

If you are still a young buck in the Javascript game, like myself, then maybe I can share a newfound
trick I learned while creating functions.

For practice I was recreating a few of the most commonly used array methods like pop, push, shift and unshift to get a really good understanding on how methods work in Javascript. For example, the .push method allows you to pass in a value and it will add that value to the end of the array you specified. Like so...

{% highlight javascript linenos %}{% raw %}
//create a new array

var array = [1];

//use the push method to add a new value to the END of the array

array.push(2);

//array will now be this

--> [1,2];

{% endraw %}{% endhighlight %}
