---
layout: post
title: Keep your controllers Lean!
description: "Tips on how to keep your Angular controllers lean"
modified: 2014-08-19
tags: [javascript, js, angular, controllers]
image:
  feature: graffiti-wallpaper.jpg
comments: true
share: true
---

When creating your Angular application it is really easy to get lost and start coding all of your client side logic in the controller which can lead to very slow performance and a number of other issues. To get around this issue all of your logic can be taken care of inside of a service. Also, to keep your application as fast as possible you should only attach properties on the $scope object if it is going to be rendered on your view.


{% highlight javascript linenos %}{% raw %}angular.controller('MyController', function($scope, $http) {
  //a simple $http request to a server that gets invoked on every click in the view
  $scope.click = function() {
    $http({
      url: '/test/url',
      method: "GET"
  //$http returns a promise
    }).then(function(result) {
  //return the results back from the server
      return result.data;
    });
  };
});{% endraw %}{% endhighlight %}

You can see that the click function could be expensive every time you wanted something back from the server. To make this a little faster we can grab those results from the server when the application loads and only have to call the server once.

{% highlight javascript linenos %}{% raw %}
//create a closure for your cache variable
(function() {
  var cache;
  angular.factory('MyFactory', function($http) {
    $http({
      url: '/test/url',
      method: "GET"
    //$http returns a promise
    }).then(function(result) {
    //save the results to the cache variable
      var cache = result.data;
    });
    //return an object to call inside of any of your controllers
    return {
      cache: cache
    };
  });
});{% endraw %}{% endhighlight %}

Now inside of your controller you can just inject your service and the cache property will contain all of your data for you. This will make one server request and save all of your data to increase the speed of your application. You can also use this data in any of your controllers now.





