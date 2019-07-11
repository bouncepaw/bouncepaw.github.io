---
title:     "The Sequira keyboard"
layout:    ru
date:      2019-07-11
excerpt:   "Everything about my keyboard"
permalink: sequira-en
---
# Sequira

![Sequira alongside my desktop](https://bouncepaw.github.io/data/img/keebs/sequira-workflow.jpg)

## Preamble

Ever since I started doing IT-related stuff, the thing that bothered me the most was the keyboard. My first keyboard was the part of my first computer, a weak Lenovo laptop with a broken display.

The first language I've learnt wasn't a programming one, it was Mediawiki markup language. I've been running a Russian-language wiki that's still available on the net, though it's abandoned.

In Mediawiki there's that thing called [templates](https://www.mediawiki.org/wiki/Help:Templates). They can have parameters, which are delimited by the pipe character `|`, and the whole template is wrapped in curly braces `{}`. Here is an example template usage:

    \{\{Hello|World!\}\}

As you can see below, it's easy to type on standard QWERTY layout:

![](https://bouncepaw.github.io/data/img/layout/qwerty.png)

But remember that the wiki was in Russian. Now check out our standard layout ЙЦУКЕН:

![](https://bouncepaw.github.io/data/img/layout/йцукен.png)

No pipe, no braces! How am I supposed to fill my site with content when the keyboard makes it hard? I started switching between the keyboard layouts rapidly to type those missing characters.

Of course, one day I remapped layout switching to Caps Lock, then I learned about custom layouts and played around with them a lot.

## Revelation

Surfing Habrahabr, I've come across an article telling about a guy creating his own keyboard called Catboard. You can read [the article itself](https://habr.com/ru/post/185500/) if you know Russian or [this landing page](http://catboard.klava.org/) in English.

I've become sure that ergonomic keyboards are better than standard ones. For a long time I have been bearing dreams of creating my own keyboard.

One and a half year later I joined Russian DIY keyboard community Klavarog and became obsessed with keyboards again. People there sure are creative people, the creator of the chat is the author of aforementioned Catboard itself! They and their keyboards inspired me heavily.

> Klavarog had been originally name of [keyboard simulator](https://klava.org), but it has expanded to a whole [GitHub organization](https://github.com/klavarog). The same name is used for our [chat](https://t.me/klavaorgwork).

Early 2019 I thought I was ready for creating my first DIY keyboard. I didn't plan to create a full-blown keyboard, I just wanted to test how hard it would be to create a keyboard and to test how cool chorded keyboards are. I ended up with Wakizashi:

![](https://bouncepaw.github.io/data/img/keebs/wakizashi.jpg)

When using chorded keyboards you don't press a key to type a character, you press a combination of keys, the chord, just like on piano. I'm not going to tell a lot about it; if you speak Russian, you can read [my article](https://bouncepaw.github.io/wakizashi-ru) about it. Also check out [source code](https://github.com/bouncepaw/wakizashi) in C++ with comments in English.

Wakizashi taught me that chords are a real thing and that it's really possible to create a keyboard by myself! However, as a heavy Emacs and tiling WM user back then, I needed to be able to press hotkeys easily but it wasn't easy to do so.

> Wakizashi inspired the author of Catboard to create his own chorded keyboard [Kladenets](https://github.com/ibnteo/kladenets). I think it's much cooler than Wakizashi.

Lessons learned, onto the real keyboard.

## Inspiration

Although my keyboard can be considered innovative in many ways, there are lots of keyboards that inspired me.

**Catboard** had taught me that having modifier keys on thumb is cool and my experience of having Ctrl key bound on space for many months has proven it. It also taught me that it's not necessary to stick to standard layout.

![Catboard](https://bouncepaw.github.io/data/img/keebs/catboard1.jpg)

**Quasi 42** was meant to have universal modifier key Quasi. The keyboard was never done.

![Quasi 42](https://bouncepaw.github.io/data/img/keebs/quasi42.png)

**Ergodox** was like a perfect keyboard for me until I've joined Klavarog. Now I think it's ugly.

![Ergodox](https://bouncepaw.github.io/data/img/keebs/ergodox-elf.jpg)

**Snag** is a keyboard made by a guy who lives in the same city as me, Ufa. When I've seen photo of this keyboard for the first time, I fell in love with that stagger and compactness. However, there are too few keys for me.

![Snag](https://bouncepaw.github.io/data/img/keebs/snag.jpg)

**BAT** is the first real chorded keyboard, I guess. It was the main source of inspiration for Wakizashi, and Sequira can be thought of as a direct ancestor of it.

![BAT](https://bouncepaw.github.io/data/img/keebs/bat.png)

**Keyboardio** is an expensive keyboard with each key having unique shape.

![Keyboardio](https://bouncepaw.github.io/data/img/keebs/keyboardio.jpg)

One of its features is keys on thenar. It inspired Sequira to have keys on hypothenar. These two terms refer to particular parts of human palm:

![Scheme of palm](https://bouncepaw.github.io/data/img/thenar_hypothenar.jpg)

## Sequira features

Now it's time to tell what this keyboard can actually do. First, take a look at layout of the keyboard. All its layers are pictured. I'll talk about everything in detail.

![Current Sequira layout](https://bouncepaw.github.io/data/img/layout/sequira1.png)

### Hypothenar keys

I thought it would be cool to have some extra keys on hypothenars. Actually I'm quite used to pressing Ctrl (on standard PC keyboard) or Fn (on standard Mac keyboard) key with hypothenar. To make it easier to press hypothenar keys on Sequira, I took 2∗2 keycaps.

![Hypothenars highligted](https://bouncepaw.github.io/data/img/seq1feat/hypothenar.png)

Turned out these keys are not really useful. I've bound Ctrl and Shift to them to use in difficult hotkeys; I use the left one sometimes, but I don't remember using the right one. Also, I should have moved the keys lower so it is easier to press them, but it would have violated compactness of the keyboard.

### Thumb keys

Talking about hotkeys; I use a lot of keyboard hotkeys, I need all the modifiers to be easy to press, so I put all of them under the thumbs along with Sun and Moon keys:

![Thumbs highligted](https://bouncepaw.github.io/data/img/seq1feat/thumb.png)

But these keys work as modifiers only when held with another key. When simply tapped, they work as keys I always need: Tab, Backspace, Space, Delete.

### Sun and Moon layers

Function keys {F1..F12}, number keys, etc would not fit into such a small keyboard, so I had to add two extra layers: Sun and Moon. They are active as long as corresponding key is pressed.

Moon layer consists of number keys arranged like on numpad, navigation keys (arrows, home, end, page up, page down), Pause/break, Print screen, tab navigation {Next tab, Previous tab}, rare function keys {F13..F16} bound to some actions in text editor (currently I'm moving away from Emacs to Sublime text 3) and pane navigation keys for the same editor.

![Moon layer](https://bouncepaw.github.io/data/img/seq1feat/moonlayer.png)

Sun layer consists of function keys {F1..F12}, Insert key, four actions {Undo, Cut, Copy, Paste}, volume control keys and mouse emulation.

![Sun layer](https://bouncepaw.github.io/data/img/seq1feat/sunlayer.png)

### Mouse emulation

Yes, Sequira can emulate mouse out of the box. Although complex movements are very hard, it can be used instead of normal mouse most of time. However, it is not as convenient as Macbook's trackpad.

![Mouse highligted](https://bouncepaw.github.io/data/img/seq1feat/mouse.png)

### Doubled modifier keys

To be able to press any complicated hotkey, I doubled all the mods. As you can see, set of {Moon, Ctrl, Super, Alt, Shift, Sun} is laid out in this order on every half. It's also right under the thumbs.

![Doubled mods highligted](https://bouncepaw.github.io/data/img/seq1feat/doublemods.png)

### Text editor shortcuts

In Sublime text there is the thing called Command palette, very useful. By default, it is bound to `Ctrl+Shift+p`. I created a special key that sends this exact combination, turned out to be cool. Also, there are aforementioned {F13..F16} in the Moon layer, I've bound some actions in Sublime text to them. F17 is also used, it has its own key (I call it Anchor key), I'm planning to use it as a leader keys (like in [Vim](https://www.reddit.com/r/vim/wiki/the_leader_mechanism)). Tab and pane switching shortcuts are also here.

![Text editor goods](https://bouncepaw.github.io/data/img/seq1feat/texteditor.png)

### Compose key

[Compose key](https://en.wikipedia.org/wiki/Compose_key) is useful when I need to enter special keys like arrows →←, accented characters áöĥ or anything else. When I have been using standard keyboard, I bound it to Scroll lock key. Nothing changed now, but now the Scroll lock key is on right of left hypothenar key.

![Compose key highligted](https://bouncepaw.github.io/data/img/seq1feat/compose.png)

### Photo key

On macOS screenshots are done using hotkeys `Cmd/Super + Shift + {3 4 5}`. The 3 version takes picture of whole screen, the 4 version takes picture of an area you specify with mouse or trackpad, the 5 version turns on a dialog window with a lot of options.

![Photo key shortcuts highligted](https://bouncepaw.github.io/data/img/seq1feat/photo.png)

On my GNU+Linux machine I've created similar shortcuts. However, since numbers are part of the Moon layer, the shortcuts would be difficult to press. That's why I added the Photo key, that turns on `Cmd/Super` and `Shift` mods along with the Moon layer. The key itself is hard to press accidentally. I think it's a good feature.

### Language key

As a citizen of Russia, I need to use Cyrillic keyboard layout along with the Latin one. Before Sequira, I used to use `Caps lock` key for switching layouts. Its location is quite comfortable.

![Language key highligted](https://bouncepaw.github.io/data/img/seq1feat/lang.png)

On Sequira I created a key that sends `Caps lock` scancode (so the OS would chande the layout) and also toggles Cyrillic layout layer internally.

### Phonetic layouts

I think everyone knows that QWERTY is quite inefficient when it comes to typing. Our Russian ЙЦУКЕН is a little better, but still quite bad. That's why I implemented custom layouts for both languages looking at frequency of letters on Wikipedia.

Turned out most common letters in Russian and English languages match, so I was able to create similar layouts. In the history of computing there were other phonetic layout pairs: QWERTY/ЯВЕРТЫ and ЙЦУКЕН/JCUKEN. They do not have perfect phonetic match, it's impossible because Russian and English alphabets are too different.

Here's comparison of my layouts with phonetic matches highligted:

![Phonetic matches highlighted](https://bouncepaw.github.io/data/img/seq1feat/phonetics.png)

### Chords

This is the key feature of Sequira, because Sequira is semichorded keyboard; I think the first of its kind. Rare letters that did not fit into the main block, punctuation, other characters, etc do not occupy any layer as on many custom keyboards. Instead, they utilize chords.

Only this zone is used for chords:

![Chord zone highlighted](https://bouncepaw.github.io/data/img/seq1feat/chordzone.png)

Here are the horizontal chords (to enter character you have to press the keys of the same color):

![Horizontal chords](https://bouncepaw.github.io/data/img/seq1feat/hor_chords.png)

And the vertical chords:

![Vertical chords](https://bouncepaw.github.io/data/img/seq1feat/ver_chords.png)

I tried my best to use rare key combinations for chords. For example, there's no chord on combination of keys {s t a}, because this trigraph is quite common. I wasn't sure this is comfortable at all until I've done Sequira. Now I'm proud to say that it's an extremely cool feature. I recommend everyone to do such thing on their keyboards. QMK has this feature pre-built, it's called combos.

QMK combos/chords code you have to develop yourself is very verbose to type, so I've created a special program that generates the C source code from config file with all the chords. Take a look at the [config file](https://github.com/bouncepaw/sequira/blob/master/chords.ini) (106 lines, 1.06 KB) and [generated code](https://github.com/bouncepaw/sequira/blob/master/keymaps/default/chords.h) (651 lines, 17.6 KB).

The generator is part of [QMK Bonus](https://github.com/klavarog/qmk_bonus) project maintained by Klavarog community. The docs in English are not done yet (no one has started translating yet, actually), but they are coming soon.

### Mixed key switches

3 different types of key switches are used in Sequira:

- Outemu Blues are used for main part of the keyboard. I've chosen them because I could buy them very cheap (350 RUB or ~5.5 USD for 75 pieces). I wish they were a little lighter to press.
- Cherry MX Reds are used for 10 high keys in the 4th row. I've chosen them because I didn't want to hear two clicky sounds on one keystroke.
- Gateron Clears are used for hypothenar keys because each 2∗2 keycap required 4 switches; only combination of the lightest switches would be pressable, these switches are the ones.

![Switch mixture](https://bouncepaw.github.io/data/img/seq1feat/mix.jpg)

## Conclusion

In conclusion I'd like to say that Sequira turned out to be to very comfortable, I think I'll never return to standard keyboard. I suffer when I use standard keyboard, however my typing speed is higher on it; I guess the situation will change in a month or so.

I encourage everyone to create their own keyboard. If you have any questions or if you have found an error in the article, contact me thru email (bouncepaw2@ya.ru) or thru telegram ([@bouncepaw](https://t.me/bouncepaw)); I speak Russian, English and Esperanto.

Thanks for reading!


