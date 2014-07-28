---
layout: post
title: Issue Using Ionic's Swipeable Cards?
description: "A common error when using the swipeable cards service"
modified: 2014-07-28
tags: [ionic, javascript, errors, cards]
image:
  feature: sanfran-bridge.jpg
comments: true
share: true
---

When I tried using the swipeable cards service inside my application recently I ran into a problem that had my pulling my hair out for a few hours. After you add the file to your app and the card is loaded correctly when you swipe the card this error will pop up and blow your mind.

* Uncaught TypeError: undefined is not a function    ionic.cards.js:210
* Uncaught TypeError: undefined is not a function    ionic.cards.js:214
* Uncaught TypeError: undefined is not a function    ionic.cards.js:218

After I did some digging I found that inside the ionic.cards.js file you will have to change *window.rAF* to *ionic.requestAnimationFrame* and it will cure your headache! Give that a shot and tell me if you ran into the same issue and if this post was helpful.

