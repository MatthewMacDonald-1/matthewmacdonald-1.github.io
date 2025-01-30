---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
permalink: /
description: 
---

{{ page.description }}

<a href="https://github.com/MatthewMacDonald-1/" target="_blank">My GitHub <i class="fa-brands fa-github"></i></a>

# Highlights

{% include portfolio-item.html content=site.data.portfolio.corbett-photos %}

<hr>

{% include portfolio-item.html content=site.data.portfolio.ble-bike-erg %}

<hr>

{% include portfolio-item.html content=site.data.portfolio.dvc %}
