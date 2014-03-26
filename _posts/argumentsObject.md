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

For practice I was recreating a few of the most commonly used array methods like .pop, .push, .shift and .unshift to get a really good understanding on how methods work in Javascript. For example, the .push method allows you to pass in a value and it will add that value to the end of the array you specified. Like so...

{% highlight javascript linenos %}{% raw %}
//create a new array
var array = [1];

//use the push method to add a new value to the END of the array
array.push(2);

//array will now be this
--> [1,2];

{% endraw %}{% endhighlight %}
The .push method can take as many values as you give it and they will be 'pushed' in order to the end of the array you specify. That is when I discovered the arguments object. If you are making a function to take an unspecified amount of arguments like the .push method you can use the arguments object within your function to get the number of arguments that are being passed in.

Every function has access to the arguments object by default and when it is returned it looks like an array with the arguments listed as the elements of that array. Although it appears to look like an array it is does not act exactly like an array. It's a little confusing but it can be useful if you need to determine the number of arguments that are passed into your function.

Let's see it in action to get a better understanding...
{% highlight javascript linenos %}{% raw %}
//declare a function and console.log the arguments object inside
var test = function() {
  console.log(arguments);
};
//call the function test and pass it a few arguments
test(1, 'hey', 74);
//the end result
--> [1, 'hey', 74]

{% endraw %}{% endhighlight %}

The arguments object definitely looks like an array but you cannot treat it exactly like an array. The only method you can use on the arguments object is length, which can be useful if you need to loop through each argument individually or just find out how many arguments are being passed in.
{% highlight javascript linenos %}{% raw %}
//declare a function and console.log the length of the arguments object
var test = function() {
  console.log(arguments.length);
};
//call the function test and pass it a few arguments
test(1, 'hey', 74);
//the end result
--> 3

{% endraw %}{% endhighlight %}

There are a ton of different uses for the arguments object and by knowing it exists could save you some time and stress while programming. You can read more about it on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments) or [DevDocs](http://devdocs.io/javascript/functions_and_function_scope/arguments). Feel free to reach out with any questions or inputs!
