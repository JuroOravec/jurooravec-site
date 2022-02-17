# Gridsome Static Vue Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/61686b84-2791-4c23-9862-258e263df460/deploy-status)](https://app.netlify.com/sites/jurooravec/deploys)

## Features

- Site features:
  - Search across posts
  - Recommended / Related posts
  - Git-based comment section using Vssue
  - Analytics (Mixpanel, Sentry)
  - RSS feed
  - Pre-compression of static files
- SEO fetures:
  - Sitemap
  - Robots.txt
  - Meta tags (incl. Open Graph and Twitter cards)
- Dev quality of life features:
  - Markdown-based content
    - Markdown frontmatter validation
    - Vue and HTML inside Markdown files
    - GraphQL codegen based on queries in `<page-query>` and `<static-query>` blocks
  - TypeScript
    - In Vue files
    - In `gridsome.config` and `gridsome.server` files
  - Fine control over the data flow:
    - Validation of input data from Markdown files
    - Enrichment (transformation) of internal data stored in LokiJS collections
    - GraphQL schema with custom resolvers
  - Modularized project structure:
    - `core` - features / data common across all other modules
    - `config` - gridsome configs, plugins, and helpers to work with them
    - `post` - schema, logic, validation, etc, common across any kind of "Post"
    - `blogPost` - Blog post
    - `projectPost` - Project post

## Notes

If I were to do it again, I'd go with Nuxt instead now.

There's been too many workarounds to make gridsome to work with:

- TypeScript for `gridsome.config` and `gridsome.server` files
- GraphQL Codegen based on `<page-query>` and `<static-query>` blocks
- `vue-remark` vs other plugins that were incompatible (e.g. the recommender plugin)
- Vuetify (the vuetify loader still doesn't work)

## Project layout

### /pages

Pages are usually used for normal pages or for listing items from a GraphQL collection.
Add .vue files here to create pages. For example **About.vue** will be **site.com/about**.
Learn more about pages: https://gridsome.org/docs/pages/

### /templates

Templates for **GraphQL collections** should be added here.
To create a template for a collection called `WordPressPost`
create a file named `WordPressPost.vue` in this folder.

Learn more: https://gridsome.org/docs/templates/

### /content

Markdown (file-based) content that's imported with `@gridsome/source-filesystem`.

### /static

Place to add static files. Files in this directory will be copied directly to `dist` folder during build. For example, /static/robots.txt will be located at https://yoursite.com/robots.txt.

### /modules

Modules group code by domain (eg core, auth, feat) rather than type (eg component, page, etc).

## Credits

This is the project you get when you run `gridsome create new-project`.

Based on https://github.com/itsnwa/gridsome-forestry-starter
