---
permalink: /tutorials/web/html-basics
layout: page
title: HTML Basics
description: HTML basics.
---

# HTML Basics

What is HTML? HTML stands for HyperText Markup Language and is a tree style collection of nodes that define the layout of the page. 

Below is an example of what the base of a document typically looks like. The body is where elements like text, images, buttons are found whilst the header (head) is where metadata about the page is located, this includes the title seen in tab bars as well as links to scripts and style sheets. 

{% highlight html %}
<!DOCTYPE html>
<html>
    <head>
        <!-- Header -->
    </head>
    <body>
        <!-- Body -->
    </body>
</html>
{% endhighlight %}

# Head

## Set the page title

To set the title for the page we need to add an `<title>` tag as a child of the `<head>` tag.

{% highlight html %}
<head>
    <!-- Header -->

    <title>Cool Page</title>
</head>
{% endhighlight %}

# Body

## Header

{% highlight html %}
<body>
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
</body>
{% endhighlight %}

<iframe>
<!DOCTYPE html>
<html>
    <head>
        <!-- Header -->
    </head>
    <body>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
    </body>
</html>
</iframe>

## Paragraph




