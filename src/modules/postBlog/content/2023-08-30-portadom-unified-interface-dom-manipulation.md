---
postId: post-2023-08-30-portadom-unified-interface-dom-manipulation
datePublished: 2023-08-30
dateModified: 2022-08-30
dateExpired: null
title: 'Portadom: A Unified Interface for DOM Manipulation'
slug: portadom-unified-interface-dom-manipulation
description: Single DOM manipulation interface across Browser API, JSDOM, Cheerio, Playwright.
authors:
  - firstName: Juro
    lastName: Oravec
    url: https://jurora.vc/about
    email: juraj.oravec.josefson@gmail.com
contributors: []
mainVideo: null
images:
  - path: ../assets/imgs/2023-08-30-portadom-cover.png
    alt: Portadom unifies the interaction with several DOM manipulation.
videos: []
audios: []
tags:
  - software development
  - webscraping
  - javascript
  - html
---

![](../assets/imgs/2023-08-30-portadom-cover.png)

Web scraping, while immensely useful, often requires developers to navigate a sea of tools and libraries, each with its own quirks and intricacies. Whether it's [JSDOM](https://github.com/jsdom/jsdom), [Cheerio](https://cheerio.js.org/), [Playwright](https://playwright.dev/), or even just plain old vanilla JS in the DevTools console, moving between these platforms can be a challenge.

Enter [Portadom](https://github.com/JuroOravec/portadom), your new best friend in the world of web scraping.

What is Portadom?
Portadom provides a consistent DOM manipulation interface across:

- Browser API
- JSDOM
- Cheerio
- Playwright

This means you no longer have to rewrite or refactor large chunks of your code when switching between these tools. Instead, you can focus on the logic of your web scraping tasks and let Portadom handle the DOM manipulation intricacies.

## The Portadom Workflow

Imagine you're working on a project to scrape data from several websites. You initially start by prototyping in the DevTools console using vanilla JS. Once you've figured out the transformations and data extractions, you realize that some sites can be scraped with static HTML, while others need a JS runtime.

### 1. Prototyping with Vanilla JS
You start with a simple site and define your transformations directly in the DevTools:

```js
let title = document.querySelector('h1').innerText;
```

### 2. Static HTML with JSDOM or Cheerio
For sites where static HTML is sufficient, you can easily migrate your vanilla JS logic:

```js
import { load as loadCheerio } from 'cheerio';
import { cheerioPortadom } from 'portadom';

const html = `<h1>Welcome to Portadom</h1>`;
const $ = loadCheerio(html);
const dom = cheerioPortadom($.root(), null);

const title = await dom.findOne('h1').text();
```

With Portadom, the transition feels almost seamless. The core logic remains consistent, and only the setup changes.

### 3. Dynamic Sites with Playwright

For websites that rely heavily on JavaScript, you'd need a tool like Playwright. But with Portadom, even this transition is smooth:

```js
import { playwrightLocatorPortadom } from 'portadom';

const page = await browser.newPage();
await page.goto('https://example.com');

const bodyLoc = page.locator('body');
const dom = playwrightLocatorPortadom(bodyLoc, page);

const title = await dom.findOne('h1').text();
```

Notice how, once again, only the setup changed. The actual DOM querying logic remains consistent, thanks to Portadom.

## Embracing Flexibility

Portadom is all about flexibility. No matter where you start — be it with Cheerio for static HTML parsing or Playwright for dynamic sites — you're never locked in. If your needs change, Portadom makes it easy to switch your underlying platform without overhauling your entire scraping logic.

## Take the Leap with Portadom

Web scraping is finicky - everything breaks all the time. With Portadom, you're equipped with a tool that lets you focus on crafting the perfect data extraction strategy without getting bogged down by the intricacies of various DOM manipulation libraries. Dive in and let Portadom streamline your web scraping journey!

Portadom was already successfully used in scraping:
- [Facebook](https://www.facebook.com/)
- [Amazon Products](https://amazon.com/)
- [Profesia.sk](https://www.profesia.sk/)
- [SKCRIS](https://www.skcris.sk/)

Portadom currently supports following manipulations:
- Element attributes, properties, text
- `findOne` - equivalent to `document.querySelector`
- `findMany` - equivalent to `document.querySelectorAll`
- `closest` - equivalent to `Element.closest`
- `parent` - equivalent to `Element.parent`
- `children` - equivalent to `Element.children`
- `root` - Get document root
- `remove` - Remove current Element
- `getCommonAncestor` - Get common ancestor between this and `other` Element
- `getCommonAncestorFromSelector` - Get common ancestor between this and `other` Element (found by selector)

Facebook prompted the need to add the `getCommonAncestor` method, as Facebook's HTML doesn't provide many patterns to work with.

## Learn more
- [GitHub](https://github.com/jurooravec/portadom)
- [NPM](https://www.npmjs.com/package/portadom)
- [Documentation](https://github.com/JuroOravec/portadom/blob/main/docs/typedoc/modules.md)
