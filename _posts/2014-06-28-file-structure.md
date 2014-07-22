---
layout: post
title: Modular file structure for your Angular project
description: "An indepth look on an efficient way to scaffold an Angular App"
modified: 2014-03-26
tags: [ionic, angular, scaffold]
image:
  feature: so-simple-sample-image-2.jpg
comments: true
share: true
---

Alright boys and girls, I am going to give you an example on how I structure my Angular projects. I will be using the starter tabs app given to you by Ionic for this tutorial. If you don't know what Ionic is click this link and check it out, it is the new hotness to say the least.

After you have you have scaffolded out your new Ionic tabs app, inside of your www folder is where we will doing all of the work. Ionic provides you with a good base structure to get started but it can get very cluttered quickly as your app grows. The current folder layout is structured like this.

// The client side folder which hold all client side code
www
  -css
  -img
  -js
    -app.js
    -controllers.js
    -services.js
  -templates
    -friend-detail.html
    -tab-account.html
    -tab-dash.html
    -tab-friends.html
    -tabs.html

The way we will be restructuring the files will be represented by each state declared inside the app. To learn more about states you can read about them in more detail in the ui-router's docs here. In this structure our app has multiple states and some of those states have children states.

The tabs.html file holds the tabs for the footer of our application. Each tab has its own view and a state associated with it. Don't worry if you dont understand exactly what the states are just yet, I will dive deeper into ui-router in the following blog post.

To give you a better understanding this is a visual example of how our Ionic app is laid out. Inside of your app.js file you will see all of the currents states and how they are structured.

<figure>
  <img src="/images/filestructure.jpg">
</figure>
