---
title:     "The Sequira keyboard"
published: false
layout:    en
date:      2019-07-07
excerpt:   "todo"
permalink: sequira-en
---
# Sequira

![Sequira alongside my desktop](https://bouncepaw.github.io/data/img/keebs/sequira-workflow.jpg)

## Preamble

Ever since I started doing IT-related stuff, the thing that bothered me the most was the keyboard. My first keyboard was the part of my first computer, a week Lenovo laptop with a broken display.

The first language I've learnt wasn't a programming one, it was Mediawiki markup language. I've been running a Russian-language wiki that's still available on the net, though it's abandoned.

In Mediawiki there's that thing called [templates](https://www.mediawiki.org/wiki/Help:Templates). They can have parameters, which are delimited by the pipe character `|`, and the whole template is wrapped in curly braces `{}`. Here is an example template usage:

```mediawiki
{{Hello|World!}}
```

As you can see below, it's easily available on standard QWERTY keyboard:

![](https://bouncepaw.github.io/data/img/layout/qwerty.png)

But remember that the wiki was in Russian. Now check out our standard keyboard ЙЦУКЕН:

![](https://bouncepaw.github.io/data/img/layout/йцукен.png)

No pipe, no braces! How am I supposed to fill my site with content when the keyboard makes it hard? I started switching between the keyboard layouts rapidly to type those missing characters.

Of course, one day I remapped layout switching to Caps Lock, then I learned about custom layouts and played around with them a lot.

## Revelation

Surfing Habrahabr, I've come across an article telling about a guy creating his own keyboard Catboard. You can read [the article itself](https://habr.com/ru/post/185500/) if you know Russian or [this landing page](http://catboard.klava.org/) in English.

I've become sure that ergonomic keyboards are better than standard ones. During long time I have been bearing dreams of creating my own keyboard.

One and a half year later I joined Russian DIY keyboard community Klavarog and became obsessed with keyboards again.

People there sure are creative people, the creator of the chat is the author of aforementioned Catboard itself! They and their keyboards inspired me heavily.

> Klavarog had been originally name of [keyboard simulator](https://klava.org), but it has expanded to a whole [GitHub organization](https://github.com/klavarog). The same name is used for our [chat](https://t.me/klavaorgwork).

Early 2019 I thought I was ready for creating my first DIY keyboard. I didn't plan to create a full-blown keyboard, I just wanted to test how hard it would be to create a keyboard and to test how cool chorded keyboards are. I ended up with Wakizashi:

![](https://bouncepaw.github.io/data/img/keebs/wakizashi.jpg)

When using chorded keyboards you don't press a key to type a character, you press a combination of keys, the chord, just like on piano. I'm not going to tell a lot about it; if you speak Russian, you can read [my article](https://bouncepaw.github.io/wakizashi-ru) about it (or just watch pictures). Also check out [source code](https://github.com/bouncepaw/wakizashi) in C with comments in English.

Wakizashi taught me that chords are a real thing and that it's really possible to create a keyboard by myself! However, as a heavy Emacs and tiling WM user back then, I needed to be able to press hotkeys easily; it wasn't easy to do.

> Wakizashi inspired the author of Catboard to create his own chorded keyboard [Kladenets](https://github.com/ibnteo/kladenets). I think it's much cooler than Wakizashi.

Lessons learned, onto the real keyboard.

## Inspiration

Although my keyboard can be considered innovative in many ways, there are lots of keyboards that inspired me.

**Catboard** had taught me that having modifier keys on thumb is cool and my experience of having Ctrl key bound on space for many months has proven it. It also taught me that it's not necessary to stick to standard layout.

![Catboard](https://bouncepaw.github.io/data/img/keebs/catboard1.jpg)

**Quasi 42** was meant to have universal modifier key Quasi. It was never implemented.

![Quasi 42](https://bouncepaw.github.io/data/img/keebs/quasi42.png)

**Ergodox** was like a perfect keyboard for me until I've joined Klavarog. Now I think it's ugly.

![Ergodox](https://bouncepaw.github.io/data/img/keebs/ergodox-elf.jpg)

**Snag** is a keyboard made by a guy who lives in the same city as me, Ufa. When I've seen photo of this keyboard for the first time, I fell in love with that stagger and compactness. However, there too few keys for me.

![Snag](https://bouncepaw.github.io/data/img/keebs/snag.jpg)

**BAT** is the first real chorded keyboard, I guess. It was the main source of inspiration for Wakizashi, and Sequira can be thought of as a direct ancestor of it.

![BAT](https://bouncepaw.github.io/data/img/keebs/bat.png)

**Keyboardio** is an expensive keyboard with each key being designed especially for a particular digit.

![Keyboardio](https://bouncepaw.github.io/data/img/keebs/keyboardio.jpg)

One of its features is keys on thenar. It inspired Sequira to have keys on hypothenar. These two terms refer to particular parts of human palm:

![Scheme of palm](https://bouncepaw.github.io/data/img/thenar_hypothenar.jpg)

## Sequira features

Now it's time to tell what this keyboard can actually do. First, take a look at layout of the keyboard. All its layers are pictured. I'll talk about everything in detail.

![Current Sequira layout](https://bouncepaw.github.io/data/img/layout/sequira1.png)

### Hypothenar keys

I thought it would be cool to have some extra keys on hypothenars. Actually I'm quite used to pressing Ctrl (on standard PC keyboard) or Fn (on standard Mac keyboard) key with hypothenar. To make it easier to press hypothenar keys on Sequira, I took 2∗2 keycaps.

![Hypothenars highligted](https://bouncepaw.github.io/data/img/seq1feat/hypothenar.png)

Turned out these keys are not really useful. I've bound Ctrl and Shift to them to use in difficult hotkeys; I use the left one sometimes, but I don't remember using the right one. Also, I should have moved the keys lower so it is easier to press them, but if would have violated compactness of the keyboard.

### Thumb keys

Talking about hotkeys; I use a lot of keyboard hotkeys, I need all the modifiers to be easy to press, so I put all of them under the thumbs along with Sun and Moon keys (I use macOS' notation for keys even though my main PC runs GNU+Linux):

![Thumbs highligted](https://bouncepaw.github.io/data/img/seq1feat/thumb.png)

But these keys work as modifiers only when held with another key. When simply tapped, they work as keys I always need: Tab, Backspace, Space, Delete.

### Sun and Moon layers

### Doubled modifier keys

### Mouse emulation

### Text editor shortcuts

### Compose key

### Photo key

### Language toggle key

### Phonetic layouts

### Chords

### Mixed key switches



