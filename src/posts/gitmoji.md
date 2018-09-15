---
title: Should you use gitmoji in your commit messages?
date: "2016-11-28"
author: Garet McKinley
tags: ["Git"]
---

[![](//imgur.com/XiLqt5F.png)](https://gitmoji.carloscuesta.me/)

**tl;dr** not yet.

## 📝 Semantic Commits v2.0

**I love emoji**. If you follow me on any social sites, you’re well aware of that fact. I love it so much, I even base my application choices on how well they support it (I’m looking at you, [VSCode](https://github.com/Microsoft/vscode/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20emoji) 😑).

But the one place that I absolute adore using emoji in, is the CLI.

For most non-millennial developers, that very idea may disturb you down to your very core. But you’re only fooling yourself if you honestly don’t see the benefit of having a massive library of standardized icons available at your disposal.

That said, are emoji ready for the limelight in something as permanent as commit messages? Obviously if you read the tl;dr above, you already know my answer. But let’s talk about why.

For being semantic, they’re extremely un-semantic.

It’s easy to stay ignorant to this fact if you are one with the GitHub bubble. If you’re a regular CLI junkie like myself though, you’ll quickly face palm when having to scroll through a commit history that looks like this:

```
:memo: add documentation blocks on todo func
:sparkles: add checkbox onto todo item
:sparkles: add todo item
:tada: initial commit
```

What exactly are those cryptic prefixes before the commit messages? Even though you might be able to read an emoji symbol and visualize the graphic in your head, it slows us down significantly and completely impares our ability to visually grep our commit history.

Wouldn’t it be so much easier if we could just skim through a commit history that looks like this?

```
docs: add documentation blocks on todo func
feat: add checkbox onto todo item
feat: add todo item
initial commit
```

Ah yes. Good 'ol [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages). It’s a tried and true commit message style that adds clarity and consistency to any code base. That said, I truly long for the day when I can view my git log in terminal like this

```
📝 add documentation blocks on todo func
✨ add checkbox onto todo item
✨ add todo item
🎉 initial commit
```

This will be incredible for visually grepping changes. I have been searching for a way to output git logs like this in terminal and have found nothing so far (please [let me know](https://twitter.com/garetmckinley) if you find one). The only possible solution I could see is making a cli git log wrapper that transforms emoji codes into actual emoji.

The problem here of course is terminal support. Which might not be a big deal for macOS users, but it is a problem when you’re working on an open source code base and possibly impairing others with your emoji-fied commit messages.

This is the reason why I believe [gitmoji](https://gitmoji.carloscuesta.me/) is not ready for the limelight yet.
