---
title: "My first Gatsby plugin: gatsby-remark-embed-soundcloud"
date: "2018-09-10"
category: Music
---

I recently dove deep into the world of [GatsbyJS](https://next.gatsbyjs.org/) and have been absolutely loving every minute of it (post about that coming soon). But one of the first things I wanted to do in order to really get a feel for the engine, was to write my own plugin for it.

After traversing the [official plugin list](https://next.gatsbyjs.org/plugins/), I noticed that there wasn't yet an automatic SoundCloud embed yet. Since I use remark for rendering my Gatsby blog, it only made sense to create a remark embed for SoundCloud.

You can find the plugin along with the documentation [here](https://github.com/garetmckinley/gatsby-remark-embed-soundcloud#readme). I wanted to make it dead-simple, so there is literally zero markup required on the user's part, just paste in your SoundCloud link and it will automatically generate an embed code for it.

You can customize the size, color, and whether it autoplays when loading. Here's two examples of it in action.

## Embedding a set (album/ep/playlist)

https://soundcloud.com/gareteliot/sets/coastline-paradox

## Embedding a single track

https://soundcloud.com/gareteliot/aries-sayonara-garet-eliot-remix
