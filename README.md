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

| Element | Design | Shipped | Ratio |
| --- | --- | --- | --- |
| Body copy, header nav | `#939CAA` on white | `#6C7789` | 2.77 -> 4.53 |
| Footer nav links | `#939CAA` on `#333A44` | `#9AA3B0` | 4.14 -> 4.50 |
| Button label, tablet map pills | white on `#FCB72B` | `#333A44` | 1.76 -> 6.53 |
| Button hover label | `#FCB72B` on white | `#333A44` | 1.76 -> 11.48 |

Yellow-on-white cannot be fixed without turning the brand colour brown, so the button's
hover keeps the yellow border and swaps only the fill.

Documented and left as designed:

- The yellow button fill against the white page is 1.76:1 and the yellow map dots against the
  light-grey map are 1.48:1. Both are non-text; every city name is real text beside its dot, so
  no information is carried by colour alone.
- Tablet drops the map labels to 13px while mobile and desktop use 24px. Proportional to the
  map, and it clears 4.5:1.
- Focus rings, the current-page nav state and the reduced-motion path are not in the design file.
- The Frontend Mentor attribution makes the mobile footer taller than the 438px drawn.

## Author

- UpWork - [Abdelrhman Abdelaal](https://www.upwork.com/freelancers/mrblackvanta)
- Frontend Mentor - [@MrBlackvanta](https://www.frontendmentor.io/profile/MrBlackvanta)
- LinkedIn - [Abdelrhman Abdelaal](https://www.linkedin.com/in/abdelrhman-vanta/)
