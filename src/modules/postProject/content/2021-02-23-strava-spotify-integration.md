---
postId: post-2021-02-23-strava-spotify-integration
datePublished: 2021-02-23
dateModified: 2022-02-19
dateExpired: null
title: 'Web app: Spotify-Strava Integration - Spotify playlists based on Strava activities'
slug: strava-spotify-integration
description: A set of tools to create Twitch-style video overlay and add interactivity to livestreams.
authors:
  - $metadata.siteAuthor
contributors: []
projectStatus: stopped
projectUrl: null
mainVideo: null
images: []
videos: []
audios: []
tags:
  - strava
  - spotify
  - integration
  - rest api
  - authentication
  - social login
  - typescript
  - passport.js
  - express
  - postgresql
  - webhook
  - polling
  - vue
  - vuetify
  - aws
---

Integration between Spotify and Strava that created Spotify playlists from songs you listened to during your Strava activity. The playlist was also added to the Strava activity description.

### User flow

User logged in with email or social login. Once logged in, they connected their Strava and Spotify accounts. There was a dashboard displaying all created Spotify playlists. User could configure how to format a new playlist, and whether and how to update the Strava activity description.

### Backend

The backend was written in TypeScript, Node.js, Express.js, used REST API. User authentication handled by passport.js.

For each user, the app polled Spotify for recently played songs with their access token, and cached the songs in PostgreSQL database. Likewise, for each user, a webhook was registered on Strava to listen for "activity created" event. On the event, the songs were retrieved from the cache, and a new Spotify playlist was created with them.

### Frontend

Frontend was written in TypeScript, Vue2, Vuetify.

After signing in, user could see all the playlists that have been created by the integration.
Each playlist linked to the respective Spotify and Strava URLs.

There was a settings page where user could configure the formatting of the generated playlists,
and an account page where user could delete their account.

### Deployment

Backend deployed on AWS EC2, frontend on S3, database on RDS

### Project Status

Project was stopped because of poor integration support.

For one, Strava webhooks can have delay up to 30 mins, so users had to wait up to 30 mins
until the playlists became available.

For another, Spotify is rate-limiting the API requests per app token, not per user. So the more
users there were, the more polling requests had to be made. Hence it was not scalable.

---

#### Technologies

TypeScript,
Node.js,
Express.js,
Passport.js,
REST APIs,
API Integration,
Spotify API,
Strava API,
User Authentication,
Social Login,
Vue.js
Vuetify.js
PostgreSQL,
AWS RDS,
Webhooks,
Polling
