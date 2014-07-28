---
layout: post
title: Modular file structure for your Angular project
description: "An indepth look on an efficient way to scaffold an Angular App"
modified: 2014-07-21
tags: [ionic, angular, scaffold]
image:
  feature: graffiti-wallpaper.jpg
comments: true
share: true
---

Alright boys and girls, I am going to give you an example on how I structure my [Angular](https://angularjs.org/) projects. I will be using the starter tabs app given to you by Ionic for this tutorial. If you don't know what Ionic is click this [link](http://ionicframework.com/getting-started/) and follow the instructions on starting the myApp tabs application, it is the new hotness to say the least.

After you have you have scaffolded out your new Ionic tabs app, inside of your www folder is where we will doing all of the work. Ionic provides you with a good base structure to get started but it can get cluttered very quickly as your app grows. The current folder layout is structured like this.


{% highlight javascript linenos %} {% raw %}// The client side folder which hold all client side code
www
  -> css
  -> img
  -> js
      -app.js
      -controllers.js
      -services.js
  -> templates
      -friend-detail.html
      -tab-account.html
      -tab-dash.html
      -tab-friends.html
      -tabs.html
{% endraw %} {% endhighlight %}

The way we will be restructuring the files will be represented by each state declared inside the app. To learn more about states you can read about them in more detail in the ui-router's docs [here](http://angular-ui.github.io/ui-router/site/#/api/ui.router). In this structure our app has multiple states and some of those states have children states.

The tabs.html file holds the tabs for the footer of our application. Each tab has its own view and a state associated with it. Don't worry if you dont understand exactly what the states are just yet, I will dive deeper into ui-router in the following blog post.

To give you a better understanding here is a visual example of how our Ionic app is laid out. Inside of your app.js file you will see all of the currents states and how they are structured.

<figure>
  <img src="/images/filestructure.jpg">
</figure>

So lets set up our files to better respresent how our app is already structured.


{% highlight javascript linenos %} {% raw %} www
    -> css
    -> img
    -> starter (Parent Module)
          starter.js
          starter.html
      ->services // On the root of the starter folder to be injected to any controller within the app
          services.js
      -> tabs (tabs state) // has 3 child states account, dash, and friends
          tabs.html
          tabs.js
        -> account (tabs.account state)
              account.js
              account.html
        -> dash (tabs.dash state)
              dash.js
              dash.html
        -> friends (tash.friends state)
              friends.html
              friends.js
{% endraw %} {% endhighlight %}

Now each state has it's own folder. Inside each folder contains the states template and controller located in it's respective .js file. The tabs state is located inside of the tabs folder. Each of it's children have their own folders inside the tabs folder. Now if you want to add a new view or had to debug for example you can navigate through your files with ease. This way of structure allows your application to grow as you add more features. This convention will also help you reduce merge conflicts while working in teams on a project. Each team member can work in their own folders without changing the same files. (If you haven't experienced this problem, you will!)

Now that you have a better understanding of structuring your new application please feel free comment with any questions or an insight to how you normally structure applications of your own.




