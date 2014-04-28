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

Bubble Sort is one of the easiest sorting algorithms to understand and wrap your head around. It iterates through a list and moves the largest number to the end of the list and repeats the process until the list is fully sorted. This is not a good way to sort a very large list and this way of sorting is the least efficient but it is a great introduction to the different sorting techniques used in programming.

[5,4,3,2,1]

This array is the worst case scenario when it comes to an array being unsorted. So the first step to sorting this is to move the largest number to the end of the array.

{% highlight javascript linenos %}{% raw %}
var arr = [5,4,3,2,1],
smallerNum;
var BubbleSort = function(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i + 1]) {
      smallerNum = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = smallerNum;
    }
  }
  return arr;
};
//output = [4,3,2,1,5];
{% endraw %}{% endhighlight %}

The function BubbleSort will iterate over the list once and swap the numbers until the largest one is at the end of the list. This code will obviously stop after the largest has been moved but we want to keep iterating over the list until the entire list is sorted. One way we can do that is by putting a loop inside another loop.
var arr = [1,2]
for(var i = 0; i < arr.length; i++) {
  for(var j = 0; j < arr.length; j++) {
    console.log('i ' + i + ' j ' + j);
  }
}

This will be printed

i 0 j 0

i 0 j 1

i 0 j 2

i 1 j 0

i 1 j 1

i 1 j 2

So for one iteration of i it will iterate over until j = arr.length and then i will count up. That is how we will compare all of the numbers until the list is sorted.

{% highlight javascript linenos %}{% raw %}
var arr = [5,4,3,2,1],
smallerNum;
var BubbleSort = function(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        smallerNum = arr[j + 1];
        arr[j + 1] = arr[];
        arr[j] = smallerNum;
      }
    }
  }
  return arr;
};
//output = [1,2,3,4,5]
{% endraw %}{% endhighlight %}

So this is how the loops are working together.
1st i iteration
  i = 0, j = 0  [5,4,3,2,1]
  if (5 > 4) //this is true so we swap the numbers
  i = 0, j = 1  [4,5,3,2,1]
  if (5 > 3) // this is also true, swap them
  i = 0, j = 2  [4,3,5,2,1]
  if (5 > 2) // true so swap
  i = 0, j = 3  [4,3,2,5,1]
  if (5 > 1) // another true statement swap them
  i = 0, j = 4  [4,3,2,1,5]
  //j = arr.length - 1 so exit the second loop
2nd i iteration
  i = 1, j = 0  [4,3,2,1,5]
  if (4 > 3)  //true so swap
  etc...


You can see how the larger the array becomes the longer it will take to complete this way of sorting. There are a few tweeks we can make to make this function work a little faster but this is the basic idea of how bubble sort works.






