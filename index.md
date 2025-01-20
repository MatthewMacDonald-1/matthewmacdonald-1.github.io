---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
permalink: /

portfolio-item:
    corbett-photos:
        title: Corbett Photos
        cover_image:
            src: "/assets/images/portfolio/corbett-photos/Tawhai-Falls-Tongariro.jpg"
        description:
        -   Corbett Photos was the <a href="https://old.corbettphotos.com/" target="_blank">first website</a> that I ever made for a client.
        -   It has since been updated a number of times over the years from a static site which was hard coded into a mix of server side rendering and client side rendering with rest api.
        -   <a href="https://corbettphotos.com/" target="_blank" class="badge_link"><img src="/assets/images/portfolio/corbett-photos/badge.svg"></a>
        images:
        -   src: "/assets/images/portfolio/corbett-photos/Tawhai-Falls-Tongariro.jpg"
            title: Tawhai Falls Tongariro
        -   src: "/assets/images/portfolio/corbett-photos/Bird of paradise 1.jpg"
            title: Bird of paradise 1
        -   src: "/assets/images/portfolio/corbett-photos/Cathedral Cove 2.jpg"
            title: Cathedral Cove 2
        -   src: "/assets/images/portfolio/corbett-photos/Waipu coast.jpg"
            title: Waipu coast
        -   src: "/assets/images/portfolio/corbett-photos/01 Seattle day one (8).jpg"
            title: 01 Seattle day one (8)
        -   src: "/assets/images/portfolio/corbett-photos/Hedgehog.jpg"
            title: Hedgehog

    ble-bike-erg:
        title: BLE Bike ERG
        cover_image:
            src: "/assets/images/portfolio/ble-bike-erg/workout-scene.png"
        description:
        -   A bluetooth low energy enabled bike exercise program.
        -   This program supports reading power, heart rate, and cadence sensor data, and can set the target power for trainers that support the BLE Fitness Training Machine Service (FTMS).
        -   This program also supports writing the the recorded workout data to both csv and fit files.
        -   <a href="https://github.com/MatthewMacDonald-1/BLE-Bike-ERG" target="_blank">View on GitHub <i class="fa-brands fa-github"></i></a>
        images:
        -   src: "/assets/images/portfolio/ble-bike-erg/select-page.png"
            title: Select BLE Devices
        -   src: "/assets/images/portfolio/ble-bike-erg/select-workout.png"
            title: Select Workout
        -   src: "/assets/images/portfolio/ble-bike-erg/workout-scene.png"
            title: Workout

    dvc:
        title: Level 2 DVC
        cover_image:
            src: "/assets/images/portfolio/DVC/Final Render - Ink Effect.png"
        description:
        -   As part of my level 2 Design and Visual communications project in school, we were instructed to design an a "Dream House". Below are some renders from the 3D model that I put together from my drawings during spring break.
        images:
        -   src: "/assets/images/portfolio/DVC/Final Render.png"
            title: Final Render
        -   src: "/assets/images/portfolio/DVC/Portrait of features (roof and rock).png"
            title: Portrait of features (roof and rock)
        -   src: "/assets/images/portfolio/DVC/North West Corner.png"
            title: North West Corner
        -   src: "/assets/images/portfolio/DVC/Final Render - Ink Effect.png"
            title: Final Render - Ink Effect
        -   src: "/assets/images/portfolio/DVC/North West Corner - close up on window.png"
            title: North West Corner - close up on window
        -   src: "/assets/images/portfolio/DVC/V29 House Model on Reference landscape.png"
            title: V29 House Model on Reference landscape
        -   src: "/assets/images/portfolio/DVC/House Render.png"
            title: Early House Render
        -   src: "/assets/images/portfolio/DVC/dream_house_test_render - 1.png"
            title: Concept 1
        -   src: "/assets/images/portfolio/DVC/dream_house_test_render - 2.png"
            title: Concept 2 - 1
        -   src: "/assets/images/portfolio/DVC/dream_house_test_render - 3.png"
            title: Concept 2 - 2
        -   src: "/assets/images/portfolio/DVC/dream_house_concept_2 - render 1.png"
            title: Concept 3
---

[Games](/games)

[Experiments](/experiments)

# Projects

{% include portfolio-item.html content=page.portfolio-item.corbett-photos %}

<hr>

{% include portfolio-item.html content=page.portfolio-item.ble-bike-erg %}

<hr>

{% include portfolio-item.html content=page.portfolio-item.dvc %}
