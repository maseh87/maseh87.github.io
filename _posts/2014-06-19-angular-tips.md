---
layout: post
title: Getting Started with Angular
description: "How to start a project using Angularjs"
modified: 2014-05-26
tags: [angular, javascript, getting started]
image:
  feature: so-simple-sample-image-2.jpg
comments: true
share: true
---

If you are not sure about Angular or if you are just getting started using the framework, I am gonna run you through how to get your Angular site started and off the ground.

The first step when starting your Angular project is to declare where the app is gonna be inside your index.html file. (Don't forget to add link the angular file inside your html file!!) It is as simple as adding an attribute on a current element called ng-app on an element. You should add the attribute inside the html element to basically say that anything inside the html tags will belong to Angular. Now, to separate your files and to make it as module as possible lets give the ng-app a name called 'my-app'. You will see why we give it a name later.

{% highlight html linenos %} {% raw %}
  <html>
    <head ng-app='my-app'>
      <title>My Angular Site</title>
    </head>
    <body>

      <script src="lib/angular/angular.min.js"></script>
    </body>
  </html>

{% endraw %} {% endhighlight %}

The second thing we will make is a module for our site. The main way to define an Angular app is by creating a module. An app can have multiple modules that pertain to different site functionality but for this app we will just create one. Our module will hold all of our application code. The module will also encapsulate our code to keep our global namespace clean. In our app.js file we will write out our angular module.

{% highlight javascript linenos %} {% raw %}
angular.module('my-app', [])

{% endraw %} {% endhighlight %}

The module takes two parameters the name of our application that we defined in our html file and an array that will contain any dependencies you will include later in your application. The angular module has a few methods on it that do various things but the one we will do next is create a controller and a new scope.

When we create a controller we explicitly create a child scope object and can attach that object to the DOM by creating a ng-controller directive on a DOM element like so...

{% highlight javascript linenos %} {% raw %}
angular.module('my-app', [])

.controller('FirstController', function($scope) {
  //the controller method takes the name you want to give your controller and a callback

  //the callback gets a $scope parameter that is our root scope's child object

});

{% endraw %} {% endhighlight %}

Now let's declare our ng-controller in our index.html

{% highlight html linenos %} {% raw %}
  <html>
    <head ng-app='my-app'>
      <title>My Angular Site</title>
    </head>
    <body>

      <div ng-controller='FirstController'></div>

      <script src="lib/angular/angular.min.js"></script>
    </body>
  </html>

{% endraw %} {% endhighlight %}

Now that your controller is created you can start binding data inside your html.

{% highlight javascript linenos %} {% raw %}
angular.module('my-app', [])

.controller('FirstController', function($scope) {
  //we add a property on $scope called age and set the value to 26
  $scope.age = 26;

});

{% endraw %} {% endhighlight %}

{% highlight html linenos %} {% raw %}
  <html>
    <head ng-app='my-app'>
      <title>My Angular Site</title>
    </head>
    <body>

      <div ng-controller='FirstController'>
        <h1>Hey I am {{ age }} years old! </h1>
      </div>

      <script src="lib/angular/angular.min.js"></script>
    </body>
  </html>

{% endraw %} {% endhighlight %}

Beginning an Angular project is as simple as that and can be used for a ton of stuff. Comment below if you have anymore questions or advice on Angular.




