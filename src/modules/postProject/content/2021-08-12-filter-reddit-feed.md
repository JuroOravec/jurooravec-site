---
postId: post-2021-08-12-filter-reddit-feed
datePublished: 2021-08-12
dateModified: 2022-02-19
dateExpired: null
title: 'Web extension: Reddit feed filtering'
slug: reddit-feed-filter
description: Web extension to filter the posts on your Reddit homepage feed and shape it to your liking.
authors:
  - $metadata.siteAuthor
contributors: []
projectStatus: unpublished
projectUrl: https://github.com/JuroOravec/filter-reddit-feed
mainVideo: null
images: []
videos: []
audios: []
tags:
  - web extension
  - reddit
  - react
  - typescript
---

Web extension to filter the posts on your Reddit homepage feed and shape it to your liking.

### Implementation

The extension uses web extension API to read the user settings and read the web page
(if the user is on reddit.com domain). Then, it reads, parses (and listens for future
changes to) the webpage's HTML. Based on the post's subreddit and the frequency configured
by the user, some posts are hidden from the feed. Posts are hidden by removing them from
the HTML. User settings are persisted per user browser profile via web extension API.

The web extension provides a popup UI through which you can configure the frequency
at which you see posts. Frequency is set per subreddit. UI is implemented in
React and TypeScript.

---

#### Technologies

Web Extension,
TypeScript,
React
