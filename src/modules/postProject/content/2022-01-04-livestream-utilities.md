---
postId: post-2022-01-04-livestream-utils
datePublished: 2022-01-04
dateModified: 2022-02-19
dateExpired: null
title: Livestream utilities - Serverless, Web apps, Video generation service, OBS and Notion integration
slug: livestream-utilities
description: A set of tools to create Twitch-style video overlay and add interactivity to livestreams.
authors:
  - $metadata.siteAuthor
contributors: []
projectStatus: unpublished
projectUrl: null
mainVideo: null
images: []
videos: []
audios: []
tags:
  - python
  - pillow
  - moviepy
  - video generation
  - image generation
  - serverless
  - google cloud
  - google cloud functions
  - google cloud storage
  - cloud firestore
  - Firebase
  - vue
  - typescript
  - vuetify
  - open broadcaster software
  - obs
  - message queues
  - real-time messaging protocol
  - rtmp
  - notion
  - twitch
---

A set of tools to create Twitch-style video overlay and add interactivity to livestreams (videos played based on custom events). The tools used Notion as the source of truth.

This included:

### Video Generation Service

- The service generated a video given a set of inputs. Videos were uploaded to Google Cloud Storage. Firestore collection was used to store metadata and serve as a cache.
- Written in Python, used Pillow for image, and moviepy for video gen.

### Task Manager

- Web app for managing (CRUD) tasks defined in Notion. Modifying tasks scheduled video generation, and queued a command to play this video in a video player.

### UI Overlay

- Web app serving as the Twitch style video overlay. The app rendered UI based on config fetched from Firestore collection.

### Video Player

- Simple web app serving as a video overlay, it used Firestore as a command queue. When a command arrived, the app played a video based on the command.

### OBS Panel

- Web-based stream deck, conceptually similar to LioranBoard, this allowed to control OBS remotely.

### Web App Backend

- GCloud Functions serving as backend orchestration for various web apps.

### RTMP Server

- Dockerized RTMP server to enable to stream to multiple platforms simultaneously.

---

#### Technologies

Python,
Serverless,
Google Cloud,
Google Cloud Functions,
Google Cloud Storage,
Cloud Firestore,
Firebase,
Vue.js,
TypeScript,
Vuetify.js,
Open Broadcaster Software (OBS),
Message Queues,
Real-time Messaging Protocol (RTMP)
