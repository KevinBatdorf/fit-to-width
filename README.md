## Fit to Width

A WordPress block that automatically adjusts the text to fit the width of its container. CSS only.


For a detailed explanation of how this works: [Fit-to-Width Text: A New Technique](https://kizu.dev/fit-to-width).

### Features

- No JavaScript
- Can manually adjust line height

### FAQ

**Q: Is this accessible?**

A: I guess that depends on a few things. First thing I'll say is that this approach is better than others you will find! And I've yet to find a solution that meets this following criteria:

It won't pass [Success Criterion 1.4.4 Resize Text](https://w3c.github.io/wcag/guidelines/#resize-text) when the zoom is dependent on the viewport when zooming.

I don't want to give my own opinion on this as, although I've read a lot on the topic these past few weeks, I'm no means an expert. There's a good discussion on this GitHub issue: [Feature for making text always fit the width of its parent](https://github.com/w3c/csswg-drafts/issues/2528) that I recommend reading.

My advice, however, is that you make sure that your text is legible on all screen widths. There is a 1em minimum font size set, and I've included controls for setting a max font size as well if you need it.

More discussion here at [Fit-to-Width
Discussions & Feedback](https://blog.kizu.dev/fit-to-width-discussions-and-feedback/)

[![Twitter](https://img.shields.io/twitter/url/https/twitter.com/kevinbatdorf.svg?style=social&label=Follow%20%40kevinbatdorf)](https://twitter.com/kevinbatdorf)

![Fit to Width](https://raw.githubusercontent.com/kevinbatdorf/fit-to-width/main/.wordpress-org/screenshot-1.jpg)
