---
postId: post-2020-11-01-click-censor
datePublished: 2020-11-01
dateModified: 2022-02-19
dateExpired: null
title: 'Web extension: "Click Censor" - censor text on a webpage with a click of a button'
slug: click-censor
description: '"Click Censor" - censor text on a webpage with a click of a button'
authors:
  - $metadata.siteAuthor
contributors: []
projectStatus: unpublished
projectUrl: https://github.com/JuroOravec/click-censor
mainVideo: null
images:
  - path: ../assets/imgs/2020-11-01-click-censor_screenshot.jpg
    alt: Screenshot of "Click Censor" web extension in action on a Wikipedia page
         that has some phrases redacted. A context menu is open, showing that the
         web application added a context menu option.
videos: []
audios: []
tags:
  - web extension
  - javascript
  - sentry
---

Web extension that added a simple utility: When you selected a text and right-clicked, you had the option to "censor" that text. This action would search for all occurrences of the phrase in the current webpage and hide them out.

`youtube:https://www.youtube.com/watch?v=z4hu78LpvVE`

### Implementation

Written in JavaScript. Interaction with the page was handled using
web extension browser API. Text censoring done with https://markjs.io/.
The extension used a command queue to handle user actions asynchronously.

### Project Status

Currently, the project is unlisted from Chrome Webstore as the store
policies changed, and the web extension was using Sentry for error detection.

---

#### Technologies

Web Extension,
JavaScript,
Sentry
