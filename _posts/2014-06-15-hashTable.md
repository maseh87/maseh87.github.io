---
layout: post
title: Hash Table
description: "What is a Hash Table and why we need it in JavaScript"
modified: 2014-03-26
tags: [object, javascript, hashtable]
image:
  feature: so-simple-sample-image-2.jpg
comments: true
share: true
---

The term hash table might not ring any bells to you but if you have been programming with JavaScript for any amount of time you have been using a form of one without even knowing it. The basic idea of a hash table is to store a key and a value inside a list of other keys and values and when called upon return the value in constant time. When I say constant time I mean (in a very basic description) no matter how big the list is it will not take any extra time to retrive any value stored inside the list.

Does this sound familiar? It should remind you of exactly how an object works in javascript. When a key and a value are stored inside an objet you can retrieve that value by calling the key in the same amount of time everytime no matter the size of the object. Magic, you say? No here is a basic example of how a hash table works.


