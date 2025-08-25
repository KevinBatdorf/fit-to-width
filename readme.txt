=== Fit To Width ===
Contributors:      kbat82
Tags:              block, responsive text, stretch, typography, creative
Tested up to:      6.8
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Automatically adjusts the text to fit the width of its container. CSS only.

== Description ==

A simple, lightweight block for displaying each line of text at full width, no matter the length of the text. No JavaScript.

View the project on GitHub: [https://github.com/kevinbatdorf/fit-to-width](https://github.com/kevinbatdorf/fit-to-width)

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/fit-to-width` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= What about browser support? =

See here [https://caniuse.com/mdn-css_at-rules_property](https://caniuse.com/mdn-css_at-rules_property)

= How did you do it? =

For a detailed explanation of how this works, see [https://kizu.dev/fit-to-width](https://kizu.dev/fit-to-width).

= Is it accessible? =

I guess that depends on your perspective and legal requirements. First thing I'll say is that this technique outshines the alternatives, and those alternatives also suffer from the same caveat:

It won't pass [Success Criterion 1.4.4 Resize Text](https://w3c.github.io/wcag/guidelines/#resize-text) when the zoom is dependent on the viewport.

I'm by no means an expert on this, so if you're interested in the topic, there's a good discussion on this GitHub issue: [Feature for making text always fit the width of its parent](https://github.com/w3c/csswg-drafts/issues/2528) that I recommend reading.

There are arguments that if you maintain a width legible enough then zooming may not be an issue. My advice, however, is that you make sure that your text is able to zoom in up to 2em in size for all screen widths (press cmd/ctrl +/- to test).

== Screenshots ==

1. An example of the text next to a cool dog

== Changelog ==

= 0.1.0 =
- Initial Release
