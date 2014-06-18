---
layout: post
title: The Array's prototype
description: "Get a better understanding of Array.prototype"
modified: 2014-05-26
tags: [array, prototype]
image:
  feature: so-simple-sample-image-2.jpg
comments: true
share: true
---


I have been a little confused on what .prototype means and what is it for. When I first looking in to exactly what it is a good friend of mine explained that I should think about the word prototype as a bag of methods. At the time I didn't understand it fully but I have gotten a pretty good grasp on what it is and what it does.

Actually, to think of prototype as a bag of methods is a very good way of describing it. There are a few methods that you can use on all arrays within Javascript such as, .pop, .push, .shift, .unshift etc... Those methods were built on the Array class' prototype already by JS.

Still a little confused? It's ok. To get an even better understanding we are gonna make our own method using Array.prototype.

The first one we will make is the .push method. Push is actually just a function that takes a value and pushes it into the last index on the array it is called on.

{% highlight javascript linenos %} {% raw %}
//we will use Array.prototype to write out our function
//the keyword add is the name of the method I am creating.
//I didn't name it push because it is already created...get it?
Array.prototype.add = function(value) {
  //the word 'this' refers to the array you are calling .add on
  this[ this.length ] = value;
  return this.length
};
//create an array
var arr = [1,2];
//test out our new method
arr.add(3);
-->3
//lets check out our array
arr
-->[1,2,3]


{% endraw %}{% endhighlight %}

Now we have created a new prototype on the Array class and named it add, but there are a few other stipulations that the native .push has that our method does not. In our current function we are only allowed to insert one value in. The native .push method allows you to add as many as you choose. In part 2 we will go over how to optimize our function to perform exactly like the push method...
