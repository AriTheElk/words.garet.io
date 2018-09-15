---
title: 75% less mouse, 100% more productive —a vim story
date: "2016-11-16"
author: Garet McKinley
tags: ["Editors"]
---

<img alt="mouse running gif" src="//imgur.com/vQV1W7B.gif" style="float:right"/>

What if I told you I had a secret weapon that could make you a faster programmer… would you believe me?

What if I told you that part of the secret to becoming a faster programmer is removing one of your input devices from your computer?

_… You’re kidding me right?_

Not at all. In fact, I can work an entire 10 hour day without ever touching my mouse or trackpad while coding… and so can you. In fact, this entire blog was developed without the use of a mouse —other than testing in a web browser.

## What I’m referring to, is the vim way of working.

I’m sure you’ve used vim at least a few different times before. It’s that little text editor that you only use on your linux server and can never seem to figure out how to close or save a file.

But it’s more than that...

It's more than an editor.

Vim is it’s own language. A language for writers. A language for developers. I could go on and on, because Vim is more than a code editor —it’s a platform.

But at the core of that platform, lies one simple concept...

## USE THE KEYBOARD

By it’s very nature, the mouse slows us down. By us, I should say that I’m referring to the group of people I originally intended this article for — software engineers. We work all day typing away, whether it’s in our IDE, CLI, IRC, ETC… When does it actually make sense to use a mouse?

I’m not just saying this to say something extreme and spark an argument within the community either. I want you to actually sit back and think about when it make sense for a software engineer to use a mouse during development.

There are obviously going to be a few edge cases where you have no other choice; but for the most part, we can arrange the majority of our tools in a way that requires us to use literally zero cursor input.

### The advantage?

It takes time and effort to move your hand off the keyboard. This is especially true if you use an actual mouse. But if you use a trackpad, you aren't safe either. I know firsthand that the awkward "hinge" motion of moving my right-hand fingers from my keyboard to my trackpad can cause difficulties.

After a full day of working on my laptop using both my keyboard and trackpad, I find myself constantly trying to stretch out my wrists to relieve them of pain and cramps. There's no way that this is good for the long-term health of one of my favorite appendages.

But there's more to it than just slicing milliseconds off of your workflow and preventing carpel tunnel. It keeps you focused **on your work**.

It does this, by implementing multiple modes. Most code editors have a single mode, insert. Every keystroke made while focused on the code editor, will cause that key to be inserted into the editor. But vim goes beyond a basic insert mode.

Vim contains 3 primary modes:

- Normal
- Insert
- Visual

#### Normal Mode

Normal mode is the inital mode that loads on vim. It's primary function is for moving around the cursor. You can do this using the key visualization below

```python
    ↑
    k
← h   l →
    j
    ↓
```

These keys move the cursor one position in their respective direction. It's pretty bad practice to just repeatedly tap away on these keys to get where you wanna go though. There's much faster ways to navigate, like these:

- `0` = move to the beginning of the line
- `$` = move to the end of the line
- `w` = move to the beginning of the next word
- `b` = move to the beginning of the previous word
- `gg` = move to the beginning of the file
- `G` = move to the end of the file
- `(` = move to the previous sentence
- `)` = move to the next sentence
- `{` = move to the previous paragraph
- `}` = move to the next paragraph

> **note:** keys are case-sensitive in vim, all uppercase letters represent `shift`+`letter`

You can also add a number before any movement command to repeat it `x` amount of times. i.e. `2w` moves the cursor forward 2 words.

## Is this really faster than a mouse?

Let's take a moment to think about the logic that takes place in our brains during a typical coding session inside an editor like Atom.

Let's imagine a scenario where you're in the middle of coding a function and you need to move your cursor to the very beginning of the function. Maybe it's to rename it, maybe it's to add more arguments, or maybe you wanna shift it down a few lines. What you're doing after then is irrelevant. All I really care about, is moving that damn cursor back to the beginning of the function name.

```javascript
function foo(bar) {
  return bar * 2;|
}
```

\*I put a `|` in there to represent the cursor.\*

You are feeling confident. You just wrote a function and even remembered to insert a semicolon! So let's so back to the beginning of the word `foo`. No big deal, right?

#### Logic

1. Move your eyes upwards from the current cursor position in search of the function name.
2. Located the function name, move right hand down to trackpad.
3. Shit. The cursor isn't close by. Move your eyes away from the function name in an attempt to locate your cursor.
4. Located the cursor. Now move the cursor along with my eyes in an attempt to re-locate the function name.
5. Found the function name, cursor is over it. Move to the beginning of the word.
6. Click.
7. Move right hand back to the keyboard.

The operation was simple. We needed to do one thing. Yet it took our brain 7 steps to complete it. Not just that, one of those steps is _relatively_ time consuming. Now I know you may be thinking, "well, this only takes a matter of seconds to complete", and you'd be right. But what if I told you this entire operation could be done in less than half the amount of time?

Now let's look at doing that **exact same** operation using vim with [easymotion](https://github.com/easymotion/vim-easymotion).

#### Logic

1. Move your eyes upwards from the current cursor position in search of the function name
2. Located the function name. Press `\\` twice on the keyboard followed by a direction (`w` to go forwards, `B` to go backwards)
3. The first letter of our function name will transform into a red letter, read that letter!
4. Now press it on the keyboard.

That's it. We're there. It took us 4 steps, none of which are time consuming at all. We were able to cut out all wrist and extreme finger motions to get exactly where we wanted to go.

![](//imgur.com/vDbriEb.gif)

At first, expect it to feel a little awkward. It always does the first time. But after you have some time to explore how it reacts to your every touch, you'll be keystroking all over this beautiful code editor.

It may seem like I'm greatly trivializing this comparison by comparing something so basic. But in reality, the only thing we do more than type while programming, is move the cursor around.

After we've written our initial lines, the rest of the time spent in that file is refactoring the code to make it work better. If you have to repeat the same task over and over and over again all day long, doesn't it make sense to choose the option that takes half the amount of brain power and logical steps?

Glancing away from your editor for a brief moment to find the cursor may seem like a trivial task, but repeated all day long, can definitely cause mental fatigue as well as loss of focus. Our biggest source of distractions as developers is looking away from our editors, this is why I have notifications silenced on my computer while I work. The act of glancing away for a mere second can cause a flood of external thoughts and stimuli that distract you from the task you're trying to accomplish.

## Build your own experience.

![](//2.bp.blogspot.com/-eY0-35xiGxg/UsAji64nNNI/AAAAAAAADfc/g3gYVMeDyyM/s1600/modular+christmas+2-TWINKLE.gif)

Out of the box, vim is a bit lackluster. If you're familiar with the vim workflow, you'll be able to get around just fine, but it's definitely not an ideal development environment for daily use. To get the most out of vim, you have to customize it for your own needs.

Luckily vim has been around for over 20 years, there's no shortage of extensions. The first thing you'll want to do though, is install a plugin manager. I personally recommend [vim-plug](https://github.com/junegunn/vim-plug). It's extremely minimalistic and works great.

I plan to write a follow-up article before long with in-depth information on customization for specific languages; but for now, here's a list of my language-agnostic plugin recommendations. No need to go nuts and install every single one, just look through them and choose the ones right for you.

- [vim-startify](https://github.com/mhinz/vim-startify) - Smart startup screen
- [vim-luna](https://github.com/notpratheek/vim-luna) - My current syntax theme
- [vim-fugitive](https://github.com/tpope/vim-fugitive) - Incredibly powerful git integration
- [vim-gitgutter](https://github.com/airblade/vim-gitgutter) - See git diffs in the gutter
- [editorconfig](https://github.com/editorconfig/editorconfig-vim) - Add support for `.editorconfig` files
- [vim-easymotion](https://github.com/easymotion/vim-easymotion) - Do those awesome motions that I did in the gif above
- [deoplete](https://github.com/Shougo/deoplete.nvim) - Asynchronous auto-complete (Neovim only)
- [ctrlp](https://github.com/kien/ctrlp.vim) - Add a fuzzy-finder
- [tagbar](https://majutsushi.github.io/tagbar/) - Browse your code by tags
- [vim-airline](https://github.com/vim-airline/vim-airline) - Add beautiful status bars
- [vim-nerdtree](https://github.com/scrooloose/nerdtree) - Add an awesome sidebar
- [vim-nerdtree-git-plugin](https://github.com/Xuyuanp/nerdtree-git-plugin) - Show gif diffs in the sidebar.

## In conclusion

It's faster to not have to move your hands back and forth from your keyboard to mouse. Who would've thought?
