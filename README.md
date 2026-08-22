# Frontend Mentor - Scoot multi-page website solution

This is a solution to the [Scoot multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/scoot-multipage-website-N76alNPRJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Design deviations](#design-deviations)
- [Author](#author)

## Overview

### Screenshot

![](./screenshot.webp)

### Links

- Solution URL: [GitHub](https://github.com/MrBlackvanta/scoot-multi-page-website)
- Live Site URL: [Cloudflare](https://scoot-multi-page-website.abdelrhman-ahmed8881.workers.dev)

## My process

### Built with

- [Next.js 16](https://nextjs.org/) (App Router, React Compiler, Turbopack, static export)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS v4](https://tailwindcss.com/)

### Design deviations

Accessibility fixes, each the smallest change that clears WCAG AA. Ratios measured by
compositing on rounded 8-bit channels against the real backdrop.

| Element               | Design                 | Shipped   | Ratio         |
| --------------------- | ---------------------- | --------- | ------------- |
| Body copy, header nav | `#939CAA` on white     | `#6C7789` | 2.77 -> 4.53  |
| Footer nav links      | `#939CAA` on `#333A44` | `#9AA3B0` | 4.14 -> 4.50  |
| Button label          | white on `#FCB72B`     | `#333A44` | 1.76 -> 6.53  |
| Button hover label    | `#FCB72B` on white     | `#333A44` | 1.76 -> 11.48 |
| Tablet map pin label  | `#495567` on `#FCB72B` | `#333A44` | 4.13 -> 6.53  |

Yellow-on-white cannot be fixed without turning the brand colour brown, so the button's
hover keeps the yellow border and swaps only the fill.

Documented and left as designed:

- The yellow button fill against the white page is 1.76:1 and the yellow map dots against the
  light-grey map are 1.48:1. Both are non-text; every city name is real text beside its dot, so
  no information is carried by colour alone.
- The map pins keep the design's `#495567` label at 24px, where 4.13:1 clears the 3:1 large-text
  threshold. Only the 13px tablet pill needed the darker ink.
- Every hero frame draws a `#2F3B59` rectangle at 75% over its photo, but the photos Frontend
  Mentor exports already carry that wash — sampling one gives no channel above 139. Applying it
  again in CSS darkened all four heroes well past the design's own preview, so the overlay is not
  in the build. White on the bare photo measures 4.77:1 under the 15px hero paragraph and
  6.3–7.0:1 under the page headings, worst pixel in the box.
- Tablet drops the map labels to 13px while mobile and desktop use 24px. Proportional to the
  map, and it clears 4.5:1.
- The hero's yellow connector arrow is drawn from 1280px up. It is 452px wide and needs the gap
  the 1440px frame leaves between the text column and the white circles; narrower than that it
  would cross the paragraph or the circles, so the desktop hero drops it rather than move it.
- **A hovered header nav link is `#FCB72B` on white in the design, which is 1.76:1.** It is left
  as drawn; the same yellow clears AA on the dark footer and drawer (6.53:1), so only the header
  is affected, and only while the pointer is on the link.
- The design has no current-page nav state. Added one, coloured per backdrop so each clears AA:
  `#333A44` on the white header (11.48:1), `#FCB72B` on the dark footer and drawer (6.53:1).
- The story panels' yellow connector arrows are hand-placed in the design, at a different offset
  per panel and per breakpoint. Two are moved: the home page's middle arrow sits 32px higher, or
  its long leg crosses "Coming to a city near you" once the heading wraps below 1100px; and the
  About page's first arrow follows the home page's placement, because that group is mirrored in
  the design file and its drawn position lands on the heading at mobile.
- On mobile, panel-one arrows are anchored to the bottom of their photo rather than to its top,
  so the arrowhead keeps sitting on the photo's edge as the photo narrows below 375px.
- The FAQ chevron is `#FCB72B` on `#F2F5F9`, 1.61:1. Left as drawn: it is non-text, the rows are
  native `<details>` so the state is exposed programmatically, and the answer appearing carries
  the same information visually.
- The value badges put `#495567` on `#FCB72B` at 4.31:1. That is below the 4.5:1 body threshold
  but the numerals are 24px bold, so 3:1 applies and they clear it.
- The design shows one FAQ row open per group. Built as independent disclosures rather than an
  exclusive accordion, so opening one answer never hides another; the first row of each group
  ships open to match the drawn state.
- At tablet the gap between a story panel's photo and its heading is 56px on three panels and
  64px on the other three. The build uses 56px everywhere; there is no majority to follow.
- The careers openings list and the locations map have no heading in the design. Both got a
  visually hidden one, so every section is named and the heading outline covers every block.
- Map pins are hand-placed in the design and no two frames agree on where a city is. Each city
  ships as one percentage of the map, so the pins track it at every width; the coordinates are
  the mean of the tablet and desktop frames. Three of the four land within 2px of both; New York
  is 7px out at 1440px and 4px at 768px, because those two frames disagree by 13px about it.
- The locations page keeps the tablet stack until 1280px. Its desktop row puts the 48px heading
  in a 350px column, which needs the container at its full 1110px width to hold two lines.
- The mobile and tablet frames title-case "Your City Not Listed?" where the desktop frame and the
  starter markup use sentence case. Shipped as the markup has it.
- Six buttons all labelled `Apply` are indistinguishable to a screen reader out of context, so
  each one's accessible name is extended to `Apply for <role>` — the visible label is preserved
  inside it, as WCAG 2.5.3 requires.
- The openings rows are drawn at a fixed 190px (mobile) and 128px height. Shipped as a minimum
  height, so a role title that wraps below 375px grows its row instead of overflowing it.
- Focus rings and the reduced-motion path are not in the design file.
- The Frontend Mentor attribution makes the mobile footer taller than the 438px drawn.

## Author

- UpWork - [Abdelrhman Abdelaal](https://www.upwork.com/freelancers/mrblackvanta)
- Frontend Mentor - [@MrBlackvanta](https://www.frontendmentor.io/profile/MrBlackvanta)
- LinkedIn - [Abdelrhman Abdelaal](https://www.linkedin.com/in/abdelrhman-vanta/)
