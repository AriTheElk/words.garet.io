---
title: "Let's talk about my first day with Gatsby"
date: "2018-09-11"
category: JavaScript
---

It all started with a single tweet...

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Been meaning to give <a href="https://twitter.com/gatsbyjs?ref_src=twsrc%5Etfw">@gatsbyjs</a> v2 a serious evaluation for the past few months (last time I used it was late-2016), I think today is finally the day I&#39;m going to rebuild my blog with it.<br><br>I&#39;ll be live tweeting my experience in this thread 😇</p>&mdash; Garet Eliot (@gareteliot) <a href="https://twitter.com/gareteliot/status/1038509605477867525?ref_src=twsrc%5Etfw">September 8, 2018</a></blockquote>

Gatsby had been on my radar for a long time, to say the least. I had first checked it out when it was still what seemed to be a side project for [Kyle Mathews](https://twitter.com/kylemathews). I tried it out and happily gave it a star on GitHub. It was a nice experience, but nothing that I was exceptionally excited about. This was all mid-2016 when JavaScript-Fatigue™ was still very much at its peak. For that reason alone, I was apprehensive to fully adopt such an infantile library.

Shortly after that, however, I saw this tweet from Kyle Mathews.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Excited to announce I&#39;m working full-time now on <a href="https://twitter.com/gatsbyjs?ref_src=twsrc%5Etfw">@gatsbyjs</a>!<br><br>Looking for sponsorship/consulting<br><br>More on my blog <a href="https://t.co/rv1kA4Mjoj">https://t.co/rv1kA4Mjoj</a></p>&mdash; Kyle Mathews (@kylemathews) <a href="https://twitter.com/kylemathews/status/764162167536889856?ref_src=twsrc%5Etfw">August 12, 2016</a></blockquote>

At that moment, Gatsby had fully piqued my interest. It definitely seemed to be a risky move to an outsider, but I had seen Kyle's work and admired his dedication to the project, so I was fully interested to see where this would go.

Unfortunately, due to other work-related circumstances, I still was unable to adopt it into any projects. I was more interested in watching it grow than actually adopting it at that time anyway.

Fast-forward to 2017, I was working full-time at [Timber.io](https://timber.io) with little time for my side-projects. But boy-oh-boy did Gatsby mature during that time. The community surrounding it exploding seemingly-overnight. Getting hundreds, if not, thousands of GitHub stars every month, I knew that this project was going to be something big.

Which brings us to now, mid-way through 2018. I'm finally in a position where I can begin working on personal projects again with a stack of my choosing. The Gatsby library sitting pretty at over 25,000 GitHub Stars, 1,000 contributors, 6,000 commits, v2 looking more and more stable by the day, and an extremely healthy plugin ecosystem. If there was any time to get into Gatsby, this was for sure the best time.

So I decided to rewrite my blog site with Gatsby. That's right, the blog that you're currently reading this on.

First things first though, I had to settle what front-end stack I would be using.

## The Stack

For anybody who has been following me on social, you probably already know I'm a huge fan of styled-components. It was another library that I was an early adopter on because I saw the potential in it and absolutely fell in love with the API. So I knew that was going to be my style library. With styled-components v4 on the horizon, there was even more reason to go with it.

Other than that, there really isn't much more to the stack. Gatsby amazingly has almost every base covered. Markdown transformers, offline support, PWA support, and lots of plugins to help with accessibility and SEO.

Knowing that, it was time to dive into actually creating my site.

## First Impressions

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">First impressions: the cli tool is very reminiscent of CRA. Can&#39;t remember whether the early version I tried had such a tool (I think I remember having to manually clone one of the &quot;starters&quot; to work on it).<br><br>Combined with npx, it&#39;s a great experience getting up and running!</p>&mdash; Garet Eliot (@gareteliot) <a href="https://twitter.com/gareteliot/status/1038515302483550215?ref_src=twsrc%5Etfw">September 8, 2018</a></blockquote>

Funny enough, I jumped the gun a little bit with that tweet. In the next few tweets in that thread, I had apparently been reacting to Gatsby v1 instead of v2. :man_facepalming: It was nobody's fault but my own, since I confidently skimmed over the line in the ReadMe that said...

> Want to try v2 beta? Run this instead: gatsby new my-blazing-fast-site https://github.com/gatsbyjs/gatsby-starter-default#v2

I soon realized my mistake after [commenting in an issue thread](https://github.com/gatsbyjs/gatsby/issues/7897#issuecomment-419673892) related to styled-components v4 not working in Gatsby. Turns out, however, that there were some issues with styled-components v4 not functioning properly in Gatsby v2. At the time of writing this, the issues have been ironed out via `styled-components@4.0.0-beta.3`. [Evan Jacobs](https://twitter.com/probablyup) was very responsive in that thread and had the problems resolved within a day. So hats off to you, Evan!

Backtracking a bit back to that tweet though, what I said was still valid. If you don't want to install `gatsby-cli` globally to start projects, you can quickly create projects using the latest cli version by using `npx`. Here's a small example of what that would look like:

```term
npx gatsby-cli new projectname https://github.com/gatsbyjs/gatsby-starter-default#v2
```

It's not mandatory, but it's a nice trick for starting new Gatsby projects with zero installs required.

Moving on...

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">I quite like the folder structure of the default starter! I know structures are incredibly subjective, but they&#39;re nice and concise leaving zero room for wondering where things should go. I also like the fact that you&#39;re not bound to this structure AFAICT</p>&mdash; Garet Eliot (@gareteliot) <a href="https://twitter.com/gareteliot/status/1038517258694389760?ref_src=twsrc%5Etfw">September 8, 2018</a></blockquote>

I'm very finicky when it comes to the folder structure, so I was very pleased with the default structure in the starters. I did deviate a bit after working on building out my blog, but that's what is great about Gatsby, you're not bound to anything. You can check out the folder structure I ended up using for my blog [in the repo](https://github.com/garetmckinley/words.garet.io/tree/master/src).

## The Developer Experience

I was coming into Gatsby like a full-blown newbie. I had _admittedly_ never gave GraphQL a try. I know that's _slightly_ embarrassing to say as a full-time front-end developer, but that's just the way things have worked out for me. But I knew it was high time to get some experience using it.

It was recommended in the official docs to check out the [How To GraphQL](https://www.howtographql.com/) series, so I turned it on, sat back, and listened. I already had _very extensive_ experience with REST, so after watching the first two videos, I learned all I needed to about the fundamentals of GraphQL. If you're somebody who's new to the concepts of REST or APIs in general, it's probably a good idea to sit through the whole series. But alas, I was confident and anxious to start hacking away at my Gatsby blog.

Following along to [part 5](https://next.gatsbyjs.org/tutorial/part-five/) of the official Gatsby tutorial series, my mind was thoroughly blown.

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Wow, this part of the tutorial really blew me away 🤯<br><br>My head is spinning thinking about all the possibilities with Gatsby. I&#39;m starting to fully grasp just why this library is such a big deal.<a href="https://t.co/WMRVAPFujX">https://t.co/WMRVAPFujX</a></p>&mdash; Garet Eliot (@gareteliot) <a href="https://twitter.com/gareteliot/status/1038575964052234240?ref_src=twsrc%5Etfw">September 8, 2018</a></blockquote>

As an outsider, I was confused when I first heard of Kyle's plans to leverage GraphQL in Gatsby. I hadn't fully understood where the benefit would be, considering that it's a static site generator.

But boy was I wrong!

_"This changes everything"_, I quietly thought to myself. I had been a long time user of static site generators like [Jekyll](https://jekyllrb.com/) and [Hugo](https://gohugo.io/), but I never realized how beneficial it would be to have a data layer that you could flexibly query.

It was an absolute breeze to add in a [post loop to my main page](https://next.gatsbyjs.org/tutorial/part-six/#create-a-list-of-your-sites-markdown-files-in-srcpagesindexjs) and then a [single post page](https://next.gatsbyjs.org/tutorial/part-seven/). At this point, I was not only thoroughly invested in Gatsby, but I was also ready to rebuild all my personal projects with Gatsby.

Although that will be done over time, _I'm sure..._ —I said sarcastically to myself, knowing full well that I was going to start rewriting things in Gatsby as soon as this blog post goes live)

## Performance

When it came time to run that juicy `gatsby build` command, I was anxious to see how performant it would be. I had previously seen lots of lighthouse screenshots boasting high numbers, but I was expecting to have to put in a bit of work to get there.

But I was wrong. With zero efforts to optimize anything, my compiled and hosted blog was getting near-perfect scores.

![gatsby lighthouse score](https://pbs.twimg.com/media/Dmr938AVsAA8H42.jpg:large)

With numbers like those, there are almost zero reasons to further optimize or even worry about performance. I was (and still am) totally blown away with the sheer speed of the sites outputted by Gatsby.

## Concluding Thoughts

Honestly, I just want to take this time to sincerely thank everybody who has contributed to this wonderful static site generator. I don't think I've been this excited for anything JavaScript related since I first discovered React. Considering that this is just v2, I am thoroughly excited to see what the future will bring for Gatsby. But one thing is for sure, I will be using Gatsby in as many projects as I can.

Next up on my list: Build a complex Single-Page-App with Gatsby.
