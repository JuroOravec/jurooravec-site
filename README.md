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

#### `/src`

Where source code for the project lives.

#### `/src/gridsome.config.ts`

TypeScript entrypoint for gridsome config. This is transpiled to JS and imported
in [gridsome.config.js](./gridsome.config.js), so we can use TypeScript for Gridsome config.

#### `/src/gridsome.server.ts`

TypeScript entrypoint for gridsome server config. This is transpiled to JS and imported
in [gridsome.server.js](./gridsome.server.js), so we can use TypeScript for Gridsome config.

#### `/src/main.js`

Entrypoint for gridsome client (Vue).

#### `/src/App.vue`

Entrypoint for Vue app.

#### `/src/pages`

Vue components that serve as pages (page entrypoints).

> **Note:** The directory path is set by [gridsome](https://gridsome.org/docs/pages/#file-based-pages). If you want to store the page SFC files in different directories, you'll have to set the [pages programmatically](https://gridsome.org/docs/pages/#programmatic-pages).


#### `/src/modules`

Project features, content, etc, are split into separate modules that house related files together.

Some of the files you may find in modules are:
- `myModule.gridsome.server.ts` -- File imported by [gridsome.server.ts](./src/gridsome.server.ts)
- `myModule.gridsome.config.ts` -- File imported by [gridsome.config.ts](./src/gridsome.config.ts)
- `myModule.gridsome.client.ts` -- File imported by [main.js](./src/main.js)
- `myModuleSchema.ts` -- Extension to the GraphQL schema
- `myModuleResolvers.ts` -- Resolvers to the schema extension
- `myModuleModel.ts` -- Types defining the internal entry available in Gridsome collection once it's loaded from the source files
- `myModuleValidation.ts` -- Input validation for frontmatter in markdown files found in `content` directory
- `myModuleTypes.ts` -- Other types relevant to this module
- `content` -- Markdown (file-based) content that's imported with `@gridsome/source-filesystem`. These are turned into posts (e.g. blogs)
- `style` -- Styling (`css` / `scss` files) for this module
- `components` -- `.vue` components.
  - Files suffixed with `Template` are used as [gridsome templates](https://gridsome.org/docs/templates)
- `utils`
#### `/src/typings`

TypeScript shims -- type definitions for third party libraries.

#### `/src/__generated__`

Autogenerated files, e.g. by Graphql Code Generator (see [codegen.yml](./codegen.yml))

#### `/static`

Place to add static files. Files in this directory will be copied directly to the dist folder during build. For example, `/static/robots.txt` will be available at https://yoursite.com/robots.txt.

#### `/scripts`

Scripts that are not part of the build, but might be required for tooling, build or deployment.
