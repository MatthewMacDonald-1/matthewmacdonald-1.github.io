---
permalink: /games
layout: page
title: Games
description: Unity WebGL game builds

portfolio-item:
    erupted:
        title: Erupted
        cover_image:
            src: "/assets/images/portfolio/erupted/Screenshot2.png"
        description:
        -   Erupted is a two-dimensional platformer game where the player controls Magmite, a lava creature that has just been ejected from its volcanic home by an eruption. The player must return Magmite to the volcano by navigating the levels and destroying obstructions or enemies with it's lava projectiles, but be careful as Magmite only has so much lava.
        -   <a href="/games/erupted/">Play</a>
        -   <a href="https://cosc360.otago.ac.nz/games/2024/Erupted" target="_blank">Erupted - COSC360</a>
        images:
        -   src: "/assets/images/portfolio/erupted/Magmite.jpg"
            title: Magmite
        -   src: "/assets/images/portfolio/erupted/Screenshot1.png"
            title: Screenshot 1
        -   src: "/assets/images/portfolio/erupted/Screenshot2.png"
            title: Screenshot 2
        -   src: "/assets/images/portfolio/erupted/Screenshot3.png"
            title: Screenshot 3

    space-invaders:
        title: Space Invaders
        cover_image:
            src: "/assets/images/portfolio/space-invaders/Space Invaders Menu Background.png"
        description:
        
        -   <a href="/games/space-invaders/">Play</a>
        images:
        -   src: "/assets/images/portfolio/space-invaders/Screenshot1.png"
            title: Screenshot 1
        -   src: "/assets/images/portfolio/space-invaders/Screenshot2.png"
            title: Screenshot 2
        
---

# Games

{{ page.description }}


{% include portfolio-item.html content=page.portfolio-item.erupted %}

<hr>

{% include portfolio-item.html content=page.portfolio-item.space-invaders %}