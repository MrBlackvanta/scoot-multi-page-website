# Scoot multi-page website

My solution to the [Scoot multi-page website](https://www.frontendmentor.io/challenges/scoot-multipage-website-N76alNPRJ)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://scoot-multi-page-website.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/scoot-multi-page-website

## Built with

- Next.js 16, App Router, static export
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

### Colour

Each of these is the smallest change that clears AA:

|                       | design                 | built     | contrast      |
| --------------------- | ---------------------- | --------- | ------------- |
| Body copy, header nav | `#939CAA` on white     | `#6C7789` | 2.77 to 4.53  |
| Footer nav links      | `#939CAA` on dark      | `#9AA3B0` | 4.14 to 4.50  |
| Button label          | white on `#FCB72B`     | `#333A44` | 1.76 to 6.53  |
| Button hover label    | `#FCB72B` on white     | `#333A44` | 1.76 to 11.48 |
| Tablet map pin label  | `#495567` on `#FCB72B` | `#333A44` | 4.13 to 6.53  |

Yellow on white can't be fixed without turning the brand colour brown, so the button's hover
keeps the yellow border and swaps only the fill.

Left as designed and worth naming: the yellow button fill against the white page and the
yellow map dots against the light-grey map are both well under 3:1, but they're non-text and
every city name is real text beside its dot, so nothing is carried by colour alone. The FAQ
chevron is the same case, and those rows are native `<details>` so the state is exposed
programmatically anyway. A hovered header nav link is yellow on white in the design and stays
that way; the same yellow clears AA on the dark footer and drawer, so only the header is
affected and only while the pointer is on the link.

**The hero overlay isn't in the build.** Every hero frame draws a dark rectangle at 75% over
its photo, but the photos Frontend Mentor exports already carry that wash. Sampling one gives
no channel above 139. Applying it again darkened all four heroes well past the design's own
preview. White on the bare photo measures 4.77:1 under the hero paragraph, worst pixel in the
box.

### Deviations

**The design has no current-page nav state.** I added one, coloured per backdrop so each
clears AA.

**The story panels' yellow arrows are hand-placed** at a different offset per panel and per
breakpoint. Two moved: the home page's middle arrow sits 32px higher, or its long leg crosses
a heading once that heading wraps below 1100px, and the About page's first arrow follows the
home page's placement, because that group is mirrored in the file and its drawn position lands
on the heading at mobile. On mobile, panel-one arrows anchor to the bottom of their photo
rather than the top, so the arrowhead keeps sitting on the photo's edge as it narrows.

**The hero's connector arrow is drawn from 1280px up.** It's 452px wide and needs the gap the
1440 frame leaves between the text column and the circles. Narrower than that it would cross
either the paragraph or the circles, so the desktop hero drops it rather than move it.

**Map pins are hand-placed and no two frames agree on where a city is.** Each city ships as
one percentage of the map so the pins track it at every width, with coordinates averaged from
the tablet and desktop frames. Three of four land within 2px of both; New York is 7px out at
1440, because those two frames disagree by 13px about it.

**FAQ rows are independent disclosures, not an exclusive accordion**, so opening one answer
never hides another. The first row of each group ships open to match the drawn state.

**Six buttons all labelled "Apply" are indistinguishable to a screen reader out of context**,
so each one's accessible name extends to "Apply for &lt;role&gt;", with the visible label
preserved inside it as 2.5.3 requires.

The openings rows are drawn at a fixed height and ship as a minimum, so a role title that
wraps below 375px grows its row instead of overflowing it.

The careers list and the locations map have no heading in the design; both got a visually
hidden one so every section is named.

The locations page keeps the tablet stack until 1280. Its desktop row puts a 48px heading in a
350px column, which needs the container at full width to hold two lines.

At tablet the gap between a panel's photo and its heading is 56px on three panels and 64px on
the other three, with no majority to follow. Everything uses 56.

**Eleven buttons do nothing**, because the design gives no destination for Learn More, Say
Hello, Apply or Message Us, and the challenge has no contact route. They're focusable and
correctly labelled; wiring them would mean inventing routes the brief doesn't have.

Focus rings and the reduced-motion path aren't in the design file.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
