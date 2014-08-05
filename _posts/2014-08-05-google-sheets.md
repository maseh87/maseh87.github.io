---
layout: post
title: Sheet selection using Google App Scripts
description: "How to select 2 separate sheets in Google Sheets"
modified: 2014-08-05
tags: [javascript, google, sheets]
image:
  feature: graffiti-wallpaper.jpg
comments: true
share: true
---

How to compare 2 separate google sheets using google app scripts.

I have been developing a way for a schedule I created in Google sheets to check its accuracy auto-magically using Google App Scripts. One issue I came across is that I had to compare 2 separate sheets in the same Drive project against one another and change one of the sheets accordingly. There is a few ways to do it but here is the easiest one.

First you need to name each sheet so right click on the tab and rename each sheet whatever you want.
<figure>
  <img src="/images/tabs.png">
</figure>
You can either reference the sheets by their names or you can reference the active sheet. The active sheet is the sheet that is currently open and is being viewed.
 This is how to select the active spreadsheet
{% highlight javascript linenos %}{% raw %}
 //sheet is an object that has access to many methods
 var sheet = SpreadsheetApp.getActiveSpreadsheet();

 //to select each sheet individually you do this...
 var firstSheet = sheet.getSheetByName('Sheet1');
 var secondSheet = sheet.getSheetByName('Sheet2');
{% endraw %}{% endhighlight %}
 After you have references to each sheet you can compare between the two or change each one individually.

