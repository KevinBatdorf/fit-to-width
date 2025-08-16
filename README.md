## Fit to Width

A WordPress block that automatically adjusts the text to fit the width of its container. CSS only.


For a detailed explanation of how this works: [Fit-to-Width Text: A New Technique](https://kizu.dev/fit-to-width).

### Features

- No JavaScript
- Can manually adjust line height

[![Twitter](https://img.shields.io/twitter/url/https/twitter.com/kevinbatdorf.svg?style=social&label=Follow%20%40kevinbatdorf)](https://twitter.com/kevinbatdorf)

![Fit to Width](https://raw.githubusercontent.com/kevinbatdorf/fit-to-width/main/.wordpress-org/screenshot-1.jpg)

### FAQ

**Is this accessible?**

I guess that depends on your perspective and legal requirements. First thing I'll say is that this technique outshines the alternatives, and those alternatives also suffer from the same caveat:

It won't pass [Success Criterion 1.4.4 Resize Text](https://w3c.github.io/wcag/guidelines/#resize-text) when the zoom is dependent on the viewport.

I'm by no means an expert on this, so if you're interested in the topic, there's a good discussion on this GitHub issue: [Feature for making text always fit the width of its parent](https://github.com/w3c/csswg-drafts/issues/2528) that I recommend reading.

There are arguments that if you maintain a width legible enough then zooming may not be an issue. My advice, however, is that you make sure that your text is able to zoom in up to 2em in size for all screen widths (press cmd/ctrl +/- to test).

More discussion here at [Fit-to-Width
Discussions & Feedback](https://blog.kizu.dev/fit-to-width-discussions-and-feedback/)
