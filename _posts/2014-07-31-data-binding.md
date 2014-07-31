---
layout: post
title: Data binding in Angular
description: How to bind data to an html template using Angular
modified: 2014-07-31
tags: [javascript, angular, html, bind]
image:
  feature: so-simple-sample-image-1.jpg
comments: true
share: true
---

How to bind data to your Angular Template

Here is an example on how to data to an Angular template using a controller. After you have set up the template you want to bind to it should look similar to this.
{% highlight html linenos %}{% raw %}
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body ng-app>
  <div ng-controller=”MyController></div>
</body>
</html>
{% endraw %}{% endhighlight %}

Then create your controller like so…
{% highlight javascript linenos %}{% raw %}
.controller(“MyController”, function($scope){
  $scope.example = ‘HEY!’;
});
{% endraw %}{% endhighlight %}
The $scope object is the object that can be used to bind values to the template. Each property on the $scope object can be used to display things very easily like so.
{% highlight html linenos %}{% raw %}
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body ng-app>
  <div ng-controller=”MyController>
  {{ example }}
</div>
</body>
</html>
{% endraw %}{% endhighlight %}

The keyword example that is in the double curly brackets represents the example property that is attached to the $scope object. Now when we view the template on the browser you will see HEY! on your page. There are a ton of things that you can do with the $scope object and what can be bound to your template. Angular makes binding extremely easy and it is very efficient when creating your Angular applications.


