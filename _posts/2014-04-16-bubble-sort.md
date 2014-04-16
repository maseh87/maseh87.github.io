---
layout: post
title: Bubble Sort
description: "What is Bubble Sort and how does it work?"
modified: 2014-04-16
tags: [array, sorting, bubble sort, algorithms]
image:
  feature: abstract-6.jpg
comments: true
share: true
---

During a recent interview I was asked to create a function that will sort an array of numbers from smallest to biggest. Prior to the interview I never thought about sorting my own array. Why would I do that? Why can't I just the sort method already created for me? After I asked myself those questions I decided I was going to jump in and tackle this problem and show him what I can do. 5 minutes later I was stumped. Come to find out sorting a list is a fairly difficult concept to understand. After about 20 minutes or so my interviewer ended the meeting and told me to go study some more. That is exactly what I did.

There is a ton of different ways to sort in programming. The first one I came across just so happens to be one of the easiest sorting algorithms and it is called Bubble Sort. Basically Bubble Sort passes through your list, finds the largest number and moves it to the end of the list. Then passes back through and does the same thing until the list is in order. The way I made this happen is by simply comparing the number to the number on the right of it, if the number is greater then i would swap the numbers until I reached the end of the list.

Let's move the largest number to the end of the list...
{% highlight javascript linenos %}{% raw %}
var arr = [7,1,4];




{% endraw %}{% end highlight %}









