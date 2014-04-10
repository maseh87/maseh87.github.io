---
layout: post
title: Tips on using Pseudocode
description: "Practice writing pseudocode more effectively"
modified: 2013-05-31
tags: [psuedocode, tips, programming]
image:
  feature: abstract-10.jpg
comments: true
share: true
---

Here is some tips on writing pseudocode effectively to help you move forward in programming and take some difficulty out of the road ahead.

So first let's define what pseudocode is and what it is used for. Wikipedia defines pseudocode as an informal high-level description of the operating principle of a computer program or other algorithm. Now that we have that out of the way lets break it down to what it is to normal people like us. Pseudocode, to me, is notes in my text editor that do not get ran as code.

I have been through quite a few interviews that require me to demonstrate my ability to program and I have always had something come up that throw me off the problem at hand. It wasn't until recently that I discovered the power in pseudocode and how it will guide you to solving problems whether at home or in a pressure filled interview in the future.

It it very common while programming to get thrown off your path and buried in random sublime colors and feel like you will never find the surface. So imagine you are doing an interview with someone you have never met and they ask you write a function named add that takes two numbers together, adds them and returns the sum. Sounds easy right? Now imagine you are interviewing for a high paying job that you want more than anything and you are so nervous you can't think straight. So he's waiting and you are stuck because you forgot what he said, your pits are sweating, your mouth just turned into cotton and you look like Maury just said you are the father! How do you get your mind rolling? Let's write some pseudocode to get it started...


{% highlight javascript linenos %}{% raw %}
/*First step, make a function named add
  add takes 2 numbers
  the function will add the 2 numbers
  then return the sum
*/
{% end hightlight %} {% end raw %}

Now there is no limit to the pseudocode you can write. This is all about what will make you visualize the issue in steps instead of one big problem. Obviously this is not a super difficult function to create but if you are a beginner and you have never been exposed to programming in front of others this is one of the biggest tools you can use to help you impress your interviewer and get your mind back on track. So let's follow our steps and create the function he asked for...
{% highlight javascript linenos %}{% raw %}
//First step, make a function named add
//add takes 2 numbers
var add = function(num1, num2) {
//the function will add the 2 numbers
//then return the sum
  return num1 + num2;
};
{% end hightlight %} {% end raw %}

Everyone uses pseudocode in their code no matter how much experience they have at programming. It is a truly powerful and useful tool to practice. Please let me know your techniques that have helped you along the way...


